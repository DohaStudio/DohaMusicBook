# Part 12 — 현재 DohaMusic 사용법

> 공부용 사용자 가이드. 기준은 2026-08-23 `DohaMusic/develop` README와 Frontend Overview이며 UI/API 변경 시 원본 저장소를 다시 확인한다.

## 공부 순서

1. [Lesson 01 — 로컬 실행과 화면 구조](lesson-01-local-run-navigation.md)
2. [Lesson 02 — Studio 생성 Workflow](lesson-02-studio-workflow.md)
3. [Lesson 03 — Lyrics Lab과 Voice](lesson-03-lyrics-voice.md)
4. [Lesson 04 — Generation과 Result](lesson-04-generation-result.md)
5. [Lesson 05 — History, Projects, Composition Read Workspace](lesson-05-history-projects-workspace.md)
6. [Lesson 06 — 음악 공부 반복 루프와 문서 갱신법](lesson-06-study-loop-and-update.md)

## 현재 사용자 흐름

```text
Studio
→ Lyrics
→ Voice
→ Review
→ Generation
→ Result
→ History
→ Project
→ Composition Read Workspace
→ Listening / Study Notes
```

현재 Frontend route는 `/`, `/studio`, `/lyrics`, `/voice`, `/generation/[jobId]`, `/result/[jobId]`, `/history`, `/projects`, `/projects/[id]`, `/settings`, `/about`이다. Generation/Result는 Job context route이며 주 탐색 메뉴는 아니다.

## 현재 사용 가능한 핵심 범위

- Studio 생성 Workflow와 K-POP structured options
- Lyrics 생성·검증·revision
- 동의된 Voice Profile WAV upload/list/get/delete/선택
- Pipeline Job 상태, cancel/retry
- Result WAV 재생/download
- Quality/Tempo/Hook 관련 안전한 분석 정보가 존재하는 경우 표시
- History와 Project
- 선택된 CompositionSnapshot의 읽기 전용 Timeline/Track lane
- Play/Pause, seek, horizontal scroll/zoom, richer playhead foundation

## 현재 사용법으로 쓰면 안 되는 기능

아래는 실제 최신 구현 확인 전까지 `TARGET` 또는 `FOUNDATION`이다.

- mutable Track/Clip 완전 편집
- Split/Trim/Move/Copy/Delete
- Fade/Gain/Loop/Undo/Redo
- 완성형 Mixer
- MIDI Track/Piano Roll
- SoundFont engine integration
- Reference Panel workflow
- 실제 DohaLM/DohaAudio production transport
- 완성형 Composition Evaluation/QA
- Candidate A/B 전용 DAW UI

현재 Player waveform/seek와 Pipeline의 단계 표현을 완성형 DAW Timeline/Mixer의 구현 증거로 취급하지 않는다.

## 프로그램을 공부에 쓰는 원칙

사용법을 외우는 것이 목적이 아니다. 매 세션에서 다음을 연결한다.

```text
Music theory
→ Intent
→ Program input
→ Generated result
→ Listening diagnosis
→ Project/Timeline observation
→ Human edit or next generation
→ Product gap
```

예를 들어 Chorus가 약하다면 먼저 Melody Range, Harmony Lift, Groove, Arrangement Density 같은 음악적 원인을 찾고 그 다음 `부분 재생성 없음`, `MIDI note editing 없음` 같은 제품 Gap을 분리한다.

## 학습 기록

```text
study/dohamusic-user-guide/
├─ 01-local-run-navigation.md
├─ 02-studio-session.md
├─ 03-lyrics-voice-session.md
├─ 04-generation-result-review.md
├─ 05-history-candidate-comparison.md
├─ 06-project-timeline-study.md
├─ 07-full-study-session.md
└─ 08-product-gap-notes.md
```

## 문서 갱신 Authority

CURRENT 사용법을 바꿀 때는 다음 순서로 원본을 확인한다.

1. DohaMusic `develop` README
2. ROADMAP / AI-native DAW product direction
3. Frontend Overview와 실제 `frontend/app/`
4. 관련 API/domain 문서
5. 구현 코드와 tests가 필요한 경우 추가 확인

DohaMusicBook은 공부용 문서이지 원본 제품 Roadmap이나 Architecture Authority를 대체하지 않는다.

## Part 12 완료 기준

- 로컬 Backend/Frontend를 직접 실행한다.
- Studio→Result까지 한 번의 생성 흐름을 수행한다.
- Lyrics를 사람이 수정한다.
- Voice Enrollment와 Training/Recording을 구분한다.
- History에서 후보를 비교한다.
- Project의 Composition Read Workspace를 사용해 시간 위치를 분석한다.
- 음악 문제와 제품 문제를 분리한 Product Gap을 남긴다.
