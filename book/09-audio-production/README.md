# Part 09 — Audio Production: 녹음에서 Mix와 Master까지

> 학습 목표: 작곡 이후의 Audio Editing, Mixing, Mastering을 구분하고 실제 소리를 수정한 이유를 귀와 기록으로 설명한다.

## 공부 순서

1. [Lesson 01 — Digital Audio와 Editing](lesson-01-digital-audio-editing.md)
2. [Lesson 02 — Gain, Pan, EQ](lesson-02-gain-pan-eq.md)
3. [Lesson 03 — Compression과 Dynamics](lesson-03-compression-dynamics.md)
4. [Lesson 04 — Reverb, Delay, Stereo, Automation, Bus](lesson-04-space-automation-bus.md)
5. [Lesson 05 — Mixing, Mastering, Reference Track](lesson-05-mixing-mastering-reference.md)
6. [Lesson 06 — DohaStudio Audio Production Workflow](lesson-06-dohastudio-audio-workflow.md)
7. [Lesson 07 — Vocal Recording과 Correction](lesson-07-vocal-recording-correction.md)
8. [Lesson 08 — Distortion과 Creative Effects](lesson-08-distortion-creative-effects.md)

## 이 Part의 전체 흐름

```text
Source / Recording
→ Take / Comp / Correction
→ Editing
→ Gain / Pan
→ EQ
→ Compression
→ Distortion / Creative FX
→ Reverb / Delay
→ Automation / Bus
→ Mix
→ Master
→ Reference / Translation Review
→ Final Export
```

Plugin을 많이 사용하는 것이 목표가 아니다. 매 처리마다 `문제 → 판단 → 변경 → A/B 결과`를 기록한다.

## 핵심 원칙

- 좋은 Take를 확보한 뒤 필요한 Correction을 한다.
- Editing 문제를 Mixing으로 숨기지 않는다.
- Arrangement 문제를 EQ만으로 해결하려 하지 않는다.
- 더 큰 소리를 더 좋은 소리로 착각하지 않는다.
- Corrective processing과 Creative processing을 구분한다.
- Mix 문제를 Mastering에서 전부 고치지 않는다.
- Reference는 복제 대상이 아니라 균형 확인용 기준점이다.
- 원본과 처리 결과를 모두 보존한다.

## 최종 학습 기록

```text
study/audio-production/
├─ 01-audio-format-editing.md
├─ 02-balance-pan-eq.md
├─ 03-compression-ab.md
├─ 04-space-automation-bus.md
├─ 05-mix-master-reference.md
├─ 06-translation-check.md
├─ 07-vocal-recording-correction.md
├─ 08-distortion-creative-effects.md
├─ 09-dohastudio-audio-trace.md
└─ 10-product-gap-notes.md
```

## DohaStudio 연결

### CURRENT
현재 DohaMusic의 WAV 결과와 Project playback을 이용해 청취·비교한다. 외부 DAW에서 수정한 결과와 원본을 A/B하는 학습이 가능하다.

### FOUNDATION / TARGET
완성형 Mixer, Automation lane, Plugin host, Production Audio AI 기능은 실제 최신 구현 상태를 확인한 뒤 표시한다. 책에서 목표 기능을 현재 사용 가능한 기능으로 서술하지 않는다.

### 책임 경계
- DohaMusic: Project/Composition/Artifact/Job 및 Workspace orchestration
- DohaAudio: 음악·오디오 AI Provider 경계
- DohaVocal: 보컬 특화 AI/Correction Provider 경계

## Part 09 완료 기준

- Digital Audio 기본 규격을 설명한다.
- Recording/Comping/Pitch·Timing Correction의 역할을 구분한다.
- Editing/Mixing/Mastering을 구분한다.
- Gain/Pan/EQ로 기본 Balance를 만든다.
- Compressor의 Attack/Release 변화를 듣는다.
- Distortion/Saturation을 level-aware A/B한다.
- Reverb/Delay/Automation/Bus를 목적에 맞게 사용한다.
- Reference Track과 여러 재생 환경으로 결과를 점검한다.
- 원본→수정→Mix→Master lineage와 수정 이유를 기록한다.
