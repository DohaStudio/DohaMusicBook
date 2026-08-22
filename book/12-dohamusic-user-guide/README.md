# Part 12 — 현재 DohaMusic 사용법

> 이 문서는 공부용 사용 가이드다. 기준은 2026-08-22 `DohaMusic/develop` README이며 실제 UI/API가 변경되면 원본 저장소를 다시 확인해 갱신한다.

## 1. 로컬 실행

Backend:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -e ".[dev]"
python -m alembic -c backend/alembic.ini upgrade head
python -m uvicorn backend.main:app --reload
```

Frontend:

```powershell
Set-Location frontend
npm ci
npm run dev
```

기본 확인 위치:

- Backend API docs: `http://127.0.0.1:8000/docs`
- Health: `http://127.0.0.1:8000/health`
- Frontend: `http://localhost:3000`

## 2. 화면을 공부 순서와 연결하기

### `/studio`

음악 제작 진입점으로 본다. 단순히 버튼 위치를 외우지 않고 `요청 → Job → 결과 → Project/Asset` 흐름을 추적한다.

### `/lyrics`

가사 생성/편집 흐름을 공부한다. Part 05의 Concept, Story, Syllable, Prosody와 비교하면서 현재 UI가 무엇을 표현하고 무엇을 아직 표현하지 않는지 기록한다.

### `/voice`

Voice Enrollment와 vocal workflow를 공부한다. Enrollment Sample과 실제 Recording Take, Training Dataset을 같은 것으로 취급하지 않는다.

### `/generation/[jobId]`

비동기 생성 Job의 상태 변화를 확인한다. 생성 AI를 '한 번 호출하면 파일이 나오는 기능'으로만 이해하지 않고 lifecycle과 retry/cancel을 함께 공부한다.

### `/result/[jobId]`

생성 결과와 WAV를 확인하고 청취 평가를 남기는 위치로 활용한다.

### `/history`

생성 이력과 반복 실험을 비교한다. 실패한 결과도 삭제 대상으로만 보지 않고 prompt/condition/선택 기준 학습 자료로 기록한다.

### `/projects` / `/projects/[id]`

Project 중심 제작 구조를 공부한다. Asset, AssetVersion, Artifact, CompositionSnapshot의 차이를 실제 화면과 연결한다.

## 3. 현재 Composition Read Workspace에서 볼 것

현재 기준으로 선택된 CompositionSnapshot에는 읽기 전용 Timeline, snapshot-local Track lane, 실제 media metadata 기반 duration/playhead, play/pause/seek, horizontal scroll/zoom과 Track 선택 기반이 있다.

학습할 때는 다음을 확인한다.

- 어떤 Snapshot을 보고 있는가?
- 어떤 Track lane이 있는가?
- playback source는 무엇인가?
- duration은 어디에서 왔는가?
- playhead와 seek가 실제 오디오 시간과 어떻게 대응하는가?

Canonical playback source가 없으면 재생을 억지로 허용하지 않는 fail-closed 동작도 확인한다.

## 4. 아직 사용법으로 작성하면 안 되는 기능

다음은 목표/설계 또는 미구현 영역이다.

- Track/Clip의 완전한 mutable editing
- Split / Trim / Move / Copy / Delete
- Fade / Gain / Loop / Undo / Redo
- 완성 Mixer의 Volume / Pan / Mute / Solo
- MIDI Track
- Piano Roll
- SoundFont engine
- Reference Panel workflow
- 실제 DohaLM/DohaAudio production transport
- 완성형 Composition Evaluation/QA

책에서 이 기능을 설명할 때는 `TARGET` 또는 `FOUNDATION`으로 표시하고 현재 사용 절차를 만들어내지 않는다.

## 5. 기능을 사용할 때 남길 공부 기록

각 실습마다 다음을 기록한다.

```text
Date:
Project:
Goal:
Music concept studied:
Screen/API used:
Input:
Output:
What I heard:
What worked:
What sounded wrong:
What I changed:
Current product limitation:
Possible future feature:
```

목표는 프로그램 사용법을 외우는 것이 아니라 **내가 만든 프로그램을 이용해 음악적 판단을 반복 훈련하는 것**이다.
