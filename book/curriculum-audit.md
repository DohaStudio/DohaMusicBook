# DohaMusicBook Curriculum Audit

> 목적: 참고한 여러 작곡·미디·AI 음악 교재의 목차를 그대로 복제하지 않고, DohaStudio의 실제 목표에 필요한 학습 주제가 빠졌는지 점검한다.

## 1. 현재 핵심 Curriculum 범위

| 학습 영역 | DohaMusicBook |
|---|---|
| 작곡 목적 / 학습법 / 악보 문법 / Enharmonic·Key·Time Signature | Part 00 |
| Song Form / Phrase / Period / Sentence | Part 01 |
| Rhythm / Meter / Groove / Drum / Polyrhythm / Tuplet / Hemiola | Part 02 |
| Key / Scale / Interval / Chord / Function / Cadence / Voice Leading / Reharmonization / Modes | Part 03 |
| Motif / Melody / Hook / Non-Chord Tone / Linear Melody | Part 04 |
| Lyrics / Prosody / Vocal | Part 05 |
| Arrangement / Timbre / Instrument Range / Idiomatic Writing / Sampling / Synthesis | Part 06 |
| AI Prompt / Candidate / Human Review | Part 07 |
| MIDI / DAW / Piano Roll 개념 / MIDI Customization | Part 08 |
| Recording / Editing / Mix / Master / Creative FX / Producer Audio Physics | Part 09 |
| Copyright / AI / Sample / Dataset / Voice rights | Part 10 |
| DohaStudio source code | Part 11 |
| 현재 DohaMusic 사용법 | Part 12 |
| 한 곡 End-to-End 제작 | Part 13 |
| 반복 작곡 훈련 / Integrated Listening / Systematic Ear Training / Audiation | Part 14 |
| Collaboration / Recording / Mix-Master Handoff / Delivery | Part 15 |
| Release / Distribution / Revenue Flow / Release Package | Part 16 |
| Applied & Jazz Harmony / Voicing / Altered Dominant / Modal Harmony | Part 17 |

## 2. 이론 Foundation 재감사에서 보강한 연결부

전체 범위는 넓었지만 `있음`과 `충분히 연결되어 있음`을 구분해 다시 감사했다. 새 Part를 늘리지 않고 기존 Part 안에 다음 핵심 연결 이론을 보강한다.

### A. Notation Foundation II — Part 00
- Accidentals / Enharmonic Spelling
- Key Signature
- Time Signature
- Dot / Tie / Beam / Tuplet
- Dynamics
- Lead Sheet 기본 문법

### B. Phrase-Level Form — Part 01
- Phrase / Subphrase
- Antecedent / Consequent
- Period
- Sentence
- Fragmentation / Continuation
- Phrase Extension / Elision
- Hypermeter 직관

### C. Meter Deep Dive — Part 02
- Simple / Compound Meter
- 3/4 vs 6/8
- Tuplet
- Swing과 Triplet의 구분
- Hemiola / Cross-Rhythm
- Odd/Additive Meter 입문

### D. Voice Leading — Part 03
- Common Tone / Stepwise Motion
- Contrary / Similar / Parallel / Oblique Motion
- Leading Tone / Chordal 7th resolution tendency
- Outer / Inner Voice
- Voice Crossing / Overlap
- Parallel perfect interval을 전통 규칙과 현대 texture 문맥으로 구분

### E. Non-Chord Tone / Linear Melody — Part 04
- Passing / Neighbor
- Suspension / Retardation
- Anticipation / Appoggiatura / Escape Tone
- Chromatic Approach
- Pedal/Sustained Tone
- Strong/Weak beat와 tension

### F. Instrumentation Foundation — Part 06
- Range vs Register
- Keyboard / Bass / Guitar / Strings / Brass / Woodwind / Vocal의 기본 idiomatic 관점
- Unison / Octave / Doubling
- Close / Open Spacing
- Transposing Instrument의 존재와 실제 score 전달 전 확인 원칙

### G. Producer Audio Physics — Part 09
- Frequency / Amplitude / Spectrum
- Fundamental / Harmonic / Partial
- Phase vs Polarity
- Mono Compatibility
- Headroom / Clipping / Noise Floor
- Frequency Masking
- Nyquist / Aliasing 직관
- Latency / Buffer trade-off

### H. Systematic Ear Training & Audiation — Part 14
`Hear → Guess → Sing/Tap/Play → Write → Verify → Correct → Hear again` 루프를 기반으로 난이도를 단계화한다.

```text
Pulse / Subdivision
→ Scale Degree
→ Interval
→ Triad Quality
→ Bass Transcription
→ Functional Progression
→ Seventh / Guide Tone
→ Chromatic / Jazz Harmony
```

기존 `examples/harmony-ear-training/`의 ii–V–I, Tritone Sub, Altered Dominant 등은 기초 단계를 통과한 뒤의 심화 자료로 둔다.

## 3. 이미 충분히 분리된 심화 영역

### Applied & Jazz Harmony
Part 17은 기본 화성학을 배우기도 전에 심화 이론 때문에 학습이 막히지 않도록 선택 심화 과정으로 유지한다.

```text
Part 03 Basic / Practical Harmony
        ↓
Voice Leading foundation
        ↓
Part 17 Applied & Jazz Harmony
```

Substitution, Subdominant Minor, Diminished, Minor Harmony, Tension, Extended Dominant, Available Note Scale, Pedal Point, Slash Chord, Turnaround, Blues, Guide Tone/Voicing, Altered Dominant, Tritone Substitution, Modal Harmony까지 현재 범위면 충분하다.

## 4. 의도적으로 핵심 Curriculum에서 제외하거나 제한하는 것

### 특정 DAW의 UI 매뉴얼
버전에 따라 바뀌는 버튼 위치는 핵심 이론으로 고정하지 않는다. 특정 DAW 실습이 필요하면 Lab/Walkthrough로 추가한다.

### 특정 아티스트 스타일 복제 프롬프트
특정 아티스트명을 그대로 모사하기보다 `Reference → musical features → abstract vocabulary → structured condition → originality review`를 사용한다.

### 전통 Counterpoint 전체 과정
Species Counterpoint 전체를 필수 과정으로 만들지는 않는다. Voice Leading을 먼저 필수 Foundation으로 두고, 독립 성부/Countermelody/Imitation이 실제 작업에서 필요해질 때 Part 17 선택 심화로 추가한다.

### 고급 Jazz 이론의 무제한 확장
Negative Harmony, Coltrane Changes, 특정 Jazz method 등을 현재 필수 범위에 계속 추가하지 않는다. 기초 연결부와 실제 작곡 증거가 우선이다.

## 5. 현재 권장 공부 순서

```text
Start Here / Notation I–II
→ Form + Phrase Structure
→ Rhythm + Meter Deep Dive
→ Basic Harmony + Voice Leading
→ Melody + Linear Non-Chord Tone
→ Lyrics/Vocal
→ Arrangement/Sound + Instrument Range
→ AI Music
→ MIDI/DAW
→ Audio Production + Producer Audio Physics
→ Rights
→ DohaStudio Code / User Guide
→ Demo Project
→ Composer Training + Systematic Ear Training
→ Collaboration & Delivery
→ Release & Distribution

선택 심화:
Basic Harmony / Voice Leading → Applied & Jazz Harmony
```

Part 17은 첫 Demo의 필수 선행 과정이 아니다.

## 6. 다음 Deep Dive에서 필요한 실제 증거

이론 Foundation 보강 후에는 새 개념을 계속 늘리기보다 실제 학습 증거를 채우는 것이 우선이다.

1. 실제 기성곡 Song Form + Phrase 분석
2. 3/4·6/8·Tuplet·Hemiola MIDI A/B
3. Root-position vs Voice-Led chord progression A/B
4. Non-Chord Tone melody variation
5. Scale Degree / Interval / Bass transcription 오답 기록
6. Instrument range / voicing 편곡 비교
7. Audio phase/mono/masking 실습 기록
8. 첫 Demo Song End-to-End 기록
9. 실제 DohaMusic 화면 기반 walkthrough
10. 실제 DohaStudio source permalink 기반 code lab

## 7. 앞으로 추가할 때의 기준

새 Chapter/Lesson은 다음 중 하나를 만족해야 한다.

1. 실제 작곡 판단력을 높인다.
2. 실제 음원 제작/협업/발매에 필요하다.
3. DohaStudio의 음악 데이터 구조를 이해하는 데 필요하다.
4. 현재 DohaMusic을 안전하고 정확하게 사용하는 데 필요하다.
5. 프로그램의 미래 기능 요구를 음악적 근거에서 도출하는 데 필요하다.

단순 서비스 사용 팁이나 일시적인 유행은 핵심 본문에 넣지 않는다.
