# Lesson 02 — DohaMusic: Project, Job, Artifact, Composition 흐름 읽기

## 학습 목표
- DohaMusic의 제품/도메인 책임을 음악 제작 흐름과 연결한다.
- Asset, AssetVersion, Artifact, CompositionSnapshot, Job을 구분한다.
- 현재 구현과 목표 DAW 편집 구조를 혼동하지 않는다.

## 1. DohaMusic은 최종 사용자 제품이다
현재 develop 기준 DohaMusic은 AI-native DAW를 목표로 하며 Workspace/MusicProject/ProjectAsset, Asset/AssetVersion/Artifact, CompositionSnapshot, Job 기반과 Composition Read Workspace, Timeline Playback, WAV playback을 갖는다.

## 2. 핵심 엔티티를 음악 제작 언어로 보기

```text
Asset          = 음악 제작에서 관리하는 논리 자산
AssetVersion   = 그 자산의 특정 불변 버전
Artifact       = 생성/처리 Job이 만든 결과물
Job            = 생성·분석·변환 등의 실행 단위
CompositionSnapshot = 특정 시점의 작품 상태를 고정한 버전
```

실제 schema 의미는 최신 code/ADR이 authority다. 이 책의 정의는 공부를 위한 해석이다.

## 3. 생성 결과가 작품이 되는 흐름

```text
User Intent
→ Job 생성
→ Provider 실행
→ Result metadata/payload 회수
→ Artifact/AssetVersion 등록
→ 사용자 비교/선택
→ Composition에 연결
→ Snapshot
```

AI가 결과를 만들었다고 자동으로 최종 작품이 되는 것은 아니다. 사용자 선택과 Workspace 상태 반영이 별도 단계다.

## 4. 현재 Timeline
현재 develop에는 선택된 CompositionSnapshot을 읽는 초 단위 Timeline과 Track lane, media metadata 기반 duration/playhead, play/pause/seek, scroll/zoom 기반이 있다.

하지만 다음은 아직 CURRENT가 아니다.

- mutable WorkingComposition 실제 schema/API
- 완성형 Track/Clip Editing
- Split/Trim/Move/Copy/Delete
- Mixer/Undo/Redo/range selection
- MIDI Track/Piano Roll
- SoundFont engine

## 5. 코드 읽기 질문
DohaMusic 코드를 볼 때 기능 이름보다 lifecycle을 따라간다.

```text
어떤 Router가 요청을 받는가?
어떤 Service가 정책을 결정하는가?
어떤 Repository가 상태를 저장하는가?
어떤 Job identity가 유지되는가?
결과가 어떤 Artifact/AssetVersion으로 등록되는가?
사용자 선택은 어디에 남는가?
Snapshot은 언제 immutable해지는가?
```

## 6. 음악과 코드 연결 실습
생성된 Chorus 후보 하나를 예로 들어 다음을 추적한다.

```text
Music intent:
Job type:
Provider:
Result artifact:
Asset/version relation:
User decision:
Composition relation:
Snapshot relation:
Missing editing capability:
```

## 완료 체크
- [ ] AssetVersion과 Artifact를 구분한다.
- [ ] Job과 최종 Composition을 구분한다.
- [ ] Snapshot이 필요한 이유를 설명한다.
- [ ] 현재 Timeline과 미래 편집 UI를 구분한다.
