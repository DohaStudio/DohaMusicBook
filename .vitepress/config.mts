import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const BOOK_DIR = path.join(ROOT, 'book')

function titleFromMarkdown(filePath: string, fallback: string) {
  try {
    const source = fs.readFileSync(filePath, 'utf8')
    const heading = source.match(/^#\s+(.+)$/m)?.[1]?.trim()
    return heading || fallback
  } catch {
    return fallback
  }
}

function humanizeFileName(fileName: string) {
  return fileName
    .replace(/\.md$/i, '')
    .replace(/^lesson-?\d*-?/i, '')
    .replace(/^\d+-/, '')
    .replace(/-/g, ' ')
}

function generateBookSidebar() {
  if (!fs.existsSync(BOOK_DIR)) return []

  return fs
    .readdirSync(BOOK_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .map((entry) => {
      const dir = entry.name
      const dirPath = path.join(BOOK_DIR, dir)
      const readmePath = path.join(dirPath, 'README.md')
      const partTitle = titleFromMarkdown(readmePath, dir)

      const lessons = fs
        .readdirSync(dirPath)
        .filter((name) => name.endsWith('.md') && name !== 'README.md')
        .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
        .map((name) => ({
          text: titleFromMarkdown(path.join(dirPath, name), humanizeFileName(name)),
          link: `/book/${dir}/${name.replace(/\.md$/i, '')}`
        }))

      return {
        text: partTitle,
        link: fs.existsSync(readmePath) ? `/book/${dir}/README` : undefined,
        collapsed: true,
        items: lessons
      }
    })
}

export default defineConfig({
  lang: 'ko-KR',
  title: 'Doha Music Book',
  description: '작곡, 화성학, 리듬, 멜로디, 편곡, 프로덕션을 실제 제작 흐름과 함께 공부하는 음악 교재',
  base: '/DohaMusicBook/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  themeConfig: {
    logo: undefined,
    nav: [
      { text: '홈', link: '/' },
      { text: '책 읽기', link: '/book/' },
      { text: '커리큘럼', link: '/book/curriculum-audit' },
      { text: 'GitHub', link: 'https://github.com/DohaStudio/DohaMusicBook' }
    ],
    sidebar: {
      '/book/': generateBookSidebar()
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '책 검색'
          },
          modal: {
            noResultsText: '검색 결과가 없습니다.',
            resetButtonTitle: '검색 초기화',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기'
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3],
      label: '이 페이지의 목차'
    },
    docFooter: {
      prev: '이전 글',
      next: '다음 글'
    },
    lastUpdated: {
      text: '마지막 수정'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DohaStudio/DohaMusicBook' }
    ],
    footer: {
      message: 'Markdown 원본과 웹 교재를 하나의 저장소에서 관리합니다.',
      copyright: 'DohaStudio · DohaMusicBook'
    }
  }
})
