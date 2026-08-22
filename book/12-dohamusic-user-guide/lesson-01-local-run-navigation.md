# Lesson 01 — 로컬 실행과 화면 구조 익히기

## 학습 목표
- DohaMusic을 로컬에서 실행한다.
- 현재 사용 가능한 route와 각 화면 역할을 구분한다.
- UI를 기능 목록이 아니라 음악 제작 흐름으로 이해한다.

## 1. Backend 실행

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
python -m alembic -c backend/alembic.ini upgrade head
python -m uvicorn backend.main:app --reload
```

확인:

```text
API docs: http://127.0.0.1:8000/docs
Health:   http://127.0.0.1:8000/health
```

## 2. Frontend 실행

```powershell
Set-Location frontend
npm ci
npm run dev
```

```text
Frontend: http://localhost:3000
```

## 3. 현재 route map

```text
/
/studio
/lyrics
/voice
/generation/[jobId]
/result/[jobId]
/history
/projects
/projects/[id]
/settings
/about
```

Generation과 Result는 특정 Job의 context route이며 주 탐색 메뉴가 아니다.

## 4. 화면별 목적

| 화면 | 공부할 것 |
|---|---|
| Studio | 생성 요청을 하나의 음악 제작 Workflow로 구성하는 방법 |
| Lyrics | 가사 생성·검증·revision |
| Voice | 동의된 Voice Profile 등록과 선택 |
| Generation | 비동기 Job lifecycle |
| Result | 생성 결과, 분석, 재생/download |
| History | 반복 생성 실험 비교 |
| Projects | 결과를 Project/Asset/Composition 관점으로 정리 |
| Settings | 로컬 환경과 상태 확인 |

## 5. 개발자 정보와 사용자 정보
일반 사용자 화면에는 Provider, Polling, 내부 API 주소 같은 기술 정보를 기본 노출하지 않는다. 필요한 경우 개발자 정보 플래그를 통해 확인하고, 책에서도 사용자 관점 설명과 내부 구현 설명을 분리한다.

## 실습
1. Backend와 Frontend를 실행한다.
2. 모든 주요 route를 한 번씩 연다.
3. 각 화면에서 가장 중요한 primary action 하나를 적는다.
4. 기능이 비활성 상태라면 이유가 무엇인지 기록한다.

```text
Route:
Primary action:
Input:
Output:
Music concept connected:
Current limitation:
```

## 완료 체크
- [ ] Backend와 Frontend를 직접 실행했다.
- [ ] 주요 route 역할을 설명할 수 있다.
- [ ] 사용자 정보와 개발자 정보를 구분한다.
