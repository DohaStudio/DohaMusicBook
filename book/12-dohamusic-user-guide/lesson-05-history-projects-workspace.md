# Lesson 05 — History, Projects, Composition Read Workspace

## 학습 목표
- `/history`에서 반복 생성 실험을 비교한다.
- `/projects`와 `/projects/[id]`에서 Asset/Artifact/Composition 관계를 익힌다.
- 현재 읽기 전용 Timeline과 Playback 기능을 정확히 사용한다.

## 1. History
History는 성공 결과만 모아보는 화면이 아니다. 같은 목표에서 어떤 설정과 결과가 반복됐는지 비교하는 학습 기록으로 사용한다.

```text
Goal:
Attempt A:
Attempt B:
Attempt C:
Best candidate:
Why:
Setting that mattered most:
Failure pattern:
```

Prompt를 계속 바꾸기 전에 무엇이 실제로 달라졌는지 듣는다.

## 2. Projects
Project는 생성 Job 하나보다 긴 수명의 음악 작업 단위다. Project 안에서 관련 Asset, 결과, Composition 상태를 묶어 본다.

다음 용어를 구분한다.

```text
Asset          논리적인 음악/미디어 자산
AssetVersion   그 자산의 특정 불변 버전
Artifact       Job/처리 과정이 만든 결과물 또는 산출물
CompositionSnapshot  특정 시점의 곡 구성 상태
```

실제 코드 계약의 세부 의미는 DohaMusic 최신 authority 문서를 우선한다.

## 3. Project Detail과 분석 요약
현재 Project 상세에서는 생성 결과와 연결된 예상 Tempo, Hook 추정 정보 등 안전한 분석 요약이 보일 수 있다. 분석이 없거나 실패한 경우 이를 성공한 값처럼 추정하지 않는다.

## 4. Composition Read Workspace
현재 선택된 CompositionSnapshot에는 읽기 전용 Timeline/Track lane과 playback 기반이 있다.

확인한다.

```text
Selected snapshot:
Track lanes:
Canonical playback source:
Duration:
Current playhead:
Selected track:
Zoom level:
```

Play/Pause, Seek, horizontal scroll, zoom을 사용하면서 실제 음악 시간과 UI Timeline 위치를 연결한다.

## 5. Fail-closed Playback
안전한 단일 canonical playback source를 결정할 수 없으면 재생이 비활성화될 수 있다. 임의의 파일을 골라 재생하는 것보다 상태를 명확히 실패시키는 것이 현재 계약이다.

## 6. 아직 하지 못하는 것
현재 Read Workspace를 편집 가능한 DAW로 착각하지 않는다.

- Clip split/trim/move
- Track/Clip mutable editing
- Mixer
- MIDI/Piano Roll
- Automation
- Undo/Redo

은 최신 구현 상태를 확인하기 전까지 현재 사용법으로 적지 않는다.

## 7. 실습
하나의 Project에서 결과를 재생하고 다음을 적는다.

```text
Project goal:
Snapshot inspected:
Playback source:
Section at 00:00–00:15:
Section at 00:15–00:30:
Strongest hook timestamp:
Arrangement change timestamp:
What I want to edit but cannot yet:
```

마지막 항목은 Product Gap으로 이동한다.

## 완료 체크
- [ ] History에서 최소 두 결과를 비교했다.
- [ ] Asset/AssetVersion/Artifact/Snapshot을 구분한다.
- [ ] Timeline playback과 seek를 사용했다.
- [ ] Read-only 기능과 편집 기능을 혼동하지 않는다.
