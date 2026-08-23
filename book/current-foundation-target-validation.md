# CURRENT / FOUNDATION / TARGET Validation

> 목적: DohaMusicBook의 구현 상태 표현을 2026-08-23 기준 각 DohaStudio `develop` authority와 대조한다.

## Source Authority

검수 기준은 각 저장소의 최신 `develop` README와 그 README가 지목하는 authority 문서다.

- DohaMusic `develop` README
- DohaLM `develop` README
- DohaAudio `develop` README
- DohaVocal `develop` README

DohaMusicBook은 제품 상태의 authority가 아니며, 상태가 바뀌면 원본 저장소를 우선한다.

## DohaMusic

### CURRENT

다음은 실제 현재 범위로 확인된다.

- Composition Read Workspace
- 읽기 전용 초 단위 Timeline
- snapshot-local Track lane
- Master / Mix waveform·Playhead foundation
- WAV playback
- play/pause, seek, horizontal scroll, zoom
- Workspace / Project / Asset / AssetVersion / Artifact / CompositionSnapshot / Job 기반
- Studio/Lyrics/Voice/Generation/Result/History/Projects 계열 Frontend
- Guided Voice Enrollment
- K-POP Structured Options와 final WAV Quality·Tempo·Hook 분석 기반

책의 Part 03/06/08/09/11/12에서 이 범위를 CURRENT로 설명하는 것은 원본 상태와 일치한다.

### FOUNDATION

다음은 설계·계약·domain foundation은 있으나 제품 기능으로 사용할 수 없는 상태다.

- Project당 mutable WorkingComposition 설계
- canonical Track/Clip identity와 commit boundary 설계
- DohaVocal Consumer Contract와 config 기반 HTTP transport/mock 검증
- Vocal Provider Job persistence/result-ingestion/trusted-locator contracts
- local operator authentication foundation

특히 WorkingComposition Track/Clip은 domain/persistence **설계**가 완료된 것이며 schema/API/Clip UI가 구현된 것이 아니다.

### TARGET / NOT CURRENT

- mutable Track/Clip schema/API 및 편집 UI
- Split/Trim/Move/Copy/Delete
- Fade/Gain/Loop/Undo/Redo
- 완성형 Mixer / Automation
- MIDI Track / Piano Roll
- SoundFont engine integration
- Virtual Instrument hosting
- 실제 DohaLM / DohaAudio production transport
- DohaVocal worker wiring과 실제 vocal processing
- Reference Panel workflow
- CompositionEvaluationRun 기반 완성곡 QA
- Continuous Learning의 실제 Dataset/Training 연결

따라서 책이 MIDI/Piano Roll/SoundFont/Mixer를 외부 DAW 학습 또는 TARGET으로만 취급하는 현재 표현은 맞다.

## DohaLM

### CURRENT / IMPLEMENTED FOUNDATION

- reusable LLM provider 역할
- Foundation model 연구 계보와 Candidate B baseline
- manifest/validator/loader 관련 코드
- Base Qwen local end-to-end 검증 이력
- FastAPI REST/SSE MVP

### NOT CURRENT AS PRODUCTION INTEGRATION

- 승인된 General Instruct Adapter candidate
- 실제 approved Adapter Runtime artifact
- Python SDK
- versioned release
- DohaMusic production integration

따라서 DohaMusicBook에서 DohaLM을 LLM provider로 설명하되 실제 DohaMusic transport/integration을 CURRENT로 쓰지 않는 경계가 맞다.

## DohaAudio

### FOUNDATION / IMPLEMENTED

- Provider Runtime/API foundation
- MusicGenerationJob / StemSeparationJob / AudioAnalysisJob lifecycle foundation
- in-memory/SQLite job persistence와 worker boundary
- Dataset admission/enrollment/archive inspection/governance
- human semantic review/authentication boundary
- training preflight/dry-run contracts

### NOT CURRENT AS PRODUCTION MODEL

- 실제 Music Generation model
- 실제 Stem Separation production model
- 실제 Audio Analysis production model
- 승인 Dataset
- 실제 Training/Fine-tuning/Evaluation
- production reviewer identity/authority activation
- DohaMusic network integration

책에서 DohaAudio를 음악·오디오 AI의 책임 owner로 설명하는 것은 맞지만, 실제 production processing이 이미 구현된 것처럼 읽히면 안 된다.

## DohaVocal

### FOUNDATION / IMPLEMENTED

- Vocal Provider API foundation
- Vocal Job contracts/lifecycle
- metadata-only Fake Provider/Runtime
- Model Manifest contract

### NOT CURRENT AS PRODUCTION MODEL

- AI Singing Voice
- Voice Conversion
- Pitch/Timing/Vocal Correction model
- Noise Reduction/Enhancement model
- Vocal Training/Evaluation
- production Artifact payload integration

DohaMusic의 Guided Voice Enrollment UI/flow와 DohaVocal의 실제 voice model 구현 상태를 혼동하지 않는다. Enrollment가 존재한다고 실제 Singing/Conversion/Correction model이 존재하는 것은 아니다.

## DohaMusicBook 대조 결과

검수한 핵심 문서:

- Part 03 Harmony
- Part 06 Arrangement & Sound
- Part 08 MIDI & DAW
- Part 09 Audio Production
- Part 11 DohaStudio Code
- Part 12 DohaMusic User Guide
- Part 17 Applied & Jazz Harmony

### 결과

- CURRENT 기능을 TARGET으로 과소평가하는 병합 blocker 없음
- TARGET 기능을 CURRENT로 과대평가하는 병합 blocker 없음
- MIDI/Piano Roll/SoundFont/Mixer는 CURRENT로 오기록되어 있지 않음
- WorkingComposition Track/Clip은 완성 제품 기능이 아니라 설계/Foundation으로 유지되어야 함
- DohaLM/DohaAudio 실제 production transport는 CURRENT가 아님
- DohaVocal 실제 AI processing model은 CURRENT가 아님
- Provider 책임 경계와 Provider끼리 직접 호출하지 않는 원칙이 원본 저장소와 일치함

## 상태 표기 규칙

DohaMusicBook에서는 앞으로 다음을 유지한다.

```text
CURRENT
= 현재 기준 브랜치에서 사용/실행 가능한 실제 기능

FOUNDATION
= contract/domain/runtime/design이 존재하지만 실제 payload/model/UI/operational wiring이 완성되지 않은 상태

TARGET
= 장기 제품 방향 또는 아직 구현되지 않은 기능

STUDY
= 음악 공부에는 필요하지만 DohaStudio 제품 구현 상태와 무관한 지식/외부 DAW 실습
```

검수 결과 P0 수준의 CURRENT / FOUNDATION / TARGET 오기록은 발견되지 않았다.
