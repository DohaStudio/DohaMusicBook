# Part 11 — DohaStudio 코드로 음악 이해하기

> 기준 확인: 2026-08-22, 각 저장소 `develop` README. 구현 상태는 계속 변하므로 Chapter 작성 시 원본 저장소를 다시 확인한다.

## 1. 전체 관계

```text
User
  ↓
DohaMusic — AI-native DAW / Workspace / Orchestrator
  ├─→ DohaLM    — LLM model & inference provider
  ├─→ DohaAudio — music/audio AI provider
  └─→ DohaVocal — vocal AI provider
        ↓
AssetVersion / Artifact / CompositionSnapshot / 사용자 선택
```

핵심 규칙은 Provider끼리 직접 호출하지 않는 것이다. 사용자 요청과 Project 상태, Job, Artifact lineage, 최종 선택은 DohaMusic이 관리한다.

## 2. DohaMusic에서 공부할 것

현재 `develop` README 기준으로 DohaMusic은 AI-native DAW를 목표로 하며 다음 기반이 존재한다.

- Workspace / MusicProject / ProjectAsset
- Asset / AssetVersion / Artifact
- CompositionSnapshot / Job
- Composition Read Workspace
- Timeline Playback
- Master/Mix Waveform와 Playhead
- 생성·Stem·Voice Conversion·Pipeline·Lyrics legacy flow
- WAV 재생·다운로드
- Pipeline cancel/retry
- Guided Voice Enrollment
- K-POP structured options와 WAV quality·tempo·hook 분석

### 아직 CURRENT가 아닌 것

- mutable WorkingComposition의 실제 Track/Clip schema/API와 편집 UI
- Split/Trim/Move/Copy/Delete, Fade/Gain, Mixer, Undo/Redo의 완성형 DAW 편집
- MIDI Track / Piano Roll
- SoundFont engine integration
- 실제 DohaLM·DohaAudio transport
- Reference Analysis workflow/panel
- Composition Evaluation 완성곡 QA
- LearningCandidate → Dataset/Training 실제 연결

따라서 책에서는 `목표 기능`과 `지금 직접 실행 가능한 기능`을 별도 박스로 작성한다.

## 3. DohaLM에서 공부할 것

DohaLM은 음악 앱 자체가 아니라 재사용 가능한 LLM Provider다.

음악 공부와 연결할 때는 다음 질문으로 읽는다.

- Music Intent를 언어로 어떻게 표현할까?
- 가사 초안과 revision을 어떻게 구조화할까?
- Reference 분석 결과를 prompt/condition으로 어떻게 번역할까?
- LLM의 결과를 바로 정답으로 쓰지 않고 어떤 검토 단계를 둘까?

DohaLM은 오디오/MIDI 생성을 직접 담당하지 않는다.

## 4. DohaAudio에서 공부할 것

DohaAudio의 목표 책임은 다음과 연결된다.

- Music / Instrumental Generation
- Stem Separation
- BPM / Key / Music Structure / Audio Quality Analysis
- Dataset / Training / Fine-tuning / Evaluation
- Model Manifest / Runtime

현재는 Runtime과 Dataset/Training 전 단계의 governance foundation이 중심이며 실제 Music Generation 모델과 실제 Training은 아직 구현된 것으로 취급하지 않는다.

음악 Chapter에서는 `BPM`, `Key`, `Structure`, `Audio Quality`, `Stem`을 배운 뒤 이 Provider가 왜 해당 정보를 필요로 하는지 연결한다.

## 5. DohaVocal에서 공부할 것

목표 책임:

- Singing Voice Generation
- Voice Conversion
- Pitch / Timing Correction
- Beat Alignment
- Noise/Breath/Silence cleanup
- Vocal normalization/enhancement/quality analysis

현재는 Provider API와 metadata-only Fake Runtime foundation이 중심이다. 실제 singing/VC/correction 모델은 미구현이다.

특히 다음 엔티티를 혼동하지 않는다.

- Voice Enrollment Sample
- Recording Take
- Vocal Training Dataset
- AI Generated Vocal
- Voice Converted Vocal
- Processed Vocal Asset
- Final Selected Vocal

## 6. 음악 개념에서 코드로 이동하는 방법

예: `Melody`를 공부했다면 다음 순서로 코드를 읽는다.

1. 음악적으로 Melody와 Motif가 무엇인지 이해한다.
2. 현재 DohaMusic이 Melody를 어떤 입력/metadata/domain으로 표현하는지 찾는다.
3. 생성 요청이 어떤 Job으로 전달되는지 확인한다.
4. Provider 결과가 어떤 Artifact/AssetVersion으로 돌아오는지 확인한다.
5. 사용자가 무엇을 선택하고 CompositionSnapshot에 무엇이 남는지 확인한다.
6. 표현이 부족하면 `학습 노트`에 gap을 기록하고 실제 제품 요구사항과 분리한다.

## 7. 상태 표기 규칙

- `CURRENT` — 현재 기준 브랜치에서 실제 확인한 기능
- `FOUNDATION` — 계약/도메인/runtime 골격은 있으나 실제 모델·payload·UI가 완성되지 않은 기능
- `TARGET` — 제품 방향에 있으나 아직 사용할 수 없는 기능
- `STUDY` — 책에서 배우지만 아직 DohaStudio 구현과 직접 연결되지 않은 음악 지식

이 표기를 모든 프로그램 관련 Chapter에서 사용한다.
