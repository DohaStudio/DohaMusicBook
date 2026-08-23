# Part 06 — Arrangement & Sound: 같은 곡을 다른 세계로 만든다

> 학습 목표: 작곡을 Melody+Chord로만 보지 않고 Instrument Role, Density, Register, Timbre, Dynamics, Stereo Image까지 포함한 전체 사운드 설계로 이해한다.

## 공부 순서

1. [Lesson 01 — Instrument Role](lesson-01-instrument-role.md)
2. [Lesson 02 — Density와 Layering](lesson-02-density-layering.md)
3. [Lesson 03 — Register와 Timbre](lesson-03-register-timbre.md)
4. [Lesson 04 — Dynamics와 Stereo Image](lesson-04-dynamics-stereo.md)
5. [Lesson 05 — Virtual Instrument, Sample, Synth, SoundFont](lesson-05-virtual-instruments-samples-soundfont.md)
6. [Lesson 06 — Section Arrangement와 DohaStudio 실습](lesson-06-section-arrangement-dohastudio.md)
7. [Lesson 07 — Sampling, Synthesis, Layering](lesson-07-sampling-synthesis-layering.md)

## 이 Part에서 익힐 핵심

```text
Instrument Role
    ↓
Density / Layering
    ↓
Register / Timbre
    ↓
Dynamics / Stereo Image
    ↓
Sound Source
(Virtual Instrument / Sample / Synth / SoundFont)
    ↓
Sampling / Chopping / Synthesis
    ↓
Section Arrangement Map
    ↓
Candidate Arrangement Review
```

편곡은 악기를 많이 넣는 작업이 아니다. 곡의 목적과 Section 역할에 맞게 무엇을 넣고, 무엇을 빼고, 어떤 음역과 질감과 공간에 놓을지 결정하는 작업이다.

## 직접 만들 최종 결과

```text
study/arrangement/
├─ 01-instrument-role-map.md
├─ 02-density-layering-analysis.md
├─ 03-register-timbre-notes.md
├─ 04-dynamics-stereo-map.md
├─ 05-sound-source-license-log.md
├─ 06-section-arrangement-plan.md
├─ 07-sampling-synthesis-layering.md
├─ 08-candidate-arrangement-review.md
└─ 09-product-gap-notes.md
```

## DohaStudio 연결 원칙

### CURRENT
현재 DohaMusic은 Project/Composition/Artifact, 읽기 전용 Track lane, WAV playback/timeline을 이용해 생성 결과를 듣고 Section별 역할과 밀도를 분석하는 데 활용한다.

### TARGET
완성형 Track/Clip 편집, Mixer, Automation, MIDI/Piano Roll, SoundFont engine, Production Stem Separation은 현재 사용 가능한 기능처럼 설명하지 않는다. 향후 `Track.role`, `instrument`, `register`, `timbre`, `Clip.start/end`, `gain`, `pan`, `Section.density`, `Automation` 등의 정보가 편곡 도메인과 연결될 수 있다.

## Part 06 완료 기준

- 악기를 이름보다 역할로 분류한다.
- Section별 Density 변화를 설명한다.
- Layering의 목적을 설명한다.
- Register 충돌을 찾는다.
- Timbre Contrast를 설계한다.
- Dynamics와 Stereo Image를 편곡 요소로 듣는다.
- Virtual Instrument/Sample/Synth/SoundFont를 구분한다.
- Sampling/Chopping/Synthesis를 직접 실습한다.
- 사용한 음원 소스의 라이선스를 기록한다.
- AI Candidate의 편곡을 음악 용어로 비교한다.
