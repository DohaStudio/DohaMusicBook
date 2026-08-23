# PR #3 Theory Foundation Review

> 목적: PR #3에서 추가한 이론 Foundation이 입문자에게 오개념을 만들지 않는지 음악이론·리듬·오디오 기초 관점에서 검수한다.

## 검수 범위

- Part 00 — Music Notation Foundation II
- Part 01 — Phrase / Period / Sentence
- Part 02 — Meter / Tuplet / Hemiola
- Part 03 — Voice Leading Fundamentals
- Part 04 — Non-Chord Tone / Linear Melody
- Part 06 — Instrument Range / Idiomatic Writing
- Part 09 — Audio Physics for Producers
- Part 14 — Systematic Ear Training / Audiation

## 판정

현재 검수 범위에서 **병합을 막는 P0 수준의 명백한 이론 오류는 남아 있지 않다.**

다만 초안에서 몇 문장이 지나치게 일반화될 수 있어 아래와 같이 수정했다.

## 발견·수정한 사항

### 1. Voice Leading
수정 전 위험:
- Leading Tone / Chordal 7th resolution이 모든 현대 음악에 적용되는 절대 규칙처럼 읽힐 가능성
- Voice Overlap과 Voice Crossing 정의가 충분히 엄밀하지 않음
- Parallel 5th/Octave가 현대 제작에서도 단순 금지처럼 오해될 가능성

수정:
- Common-Practice tonal voice leading의 대표적 tendency로 범위를 명시
- Voice Crossing과 Voice Overlap을 시간축 기준으로 구분
- Parallel perfect interval 제한을 독립 성부 문맥과 texture/doubling 문맥으로 분리

### 2. Phrase / Period / Sentence
수정 전 위험:
- `같은 시작 Motif + 4+4`만으로 Period를 정의하는 인상
- Sentence를 단순 2+2+4 공식으로 암기할 가능성

수정:
- Period는 Antecedent/Consequent의 cadence-strength 관계가 핵심임을 명시
- Parallel Period와 Contrasting Period 가능성을 구분
- Sentence를 Presentation + Continuation의 formal-function 관계로 설명
- 2+2+4는 대표적 모델이지 필수 길이가 아님을 명시

### 3. Meter / Hemiola
수정 전 위험:
- Hemiola가 단순 accent variation과 동일하게 보일 가능성

수정:
- 대표적인 3:2 metric/accent reinterpretation으로 설명
- 6/8 또는 두 마디 3/4 등에서 `3+3 ↔ 2+2+2`가 어떻게 들리는지 명시
- Odd Meter가 언제나 additive meter인 것은 아니라고 한정

### 4. Non-Chord Tone
수정 전 위험:
- Suspension/Retardation/Appoggiatura/Escape Tone의 전통적 접근·해결 규칙이 지나치게 느슨함

수정:
- Suspension: preparation → held dissonance → 전형적 step-down resolution
- Retardation: 전형적 step-up resolution
- Appoggiatura: 대표적으로 leap approach + step resolution
- Escape Tone: 대표적으로 step approach + opposite-direction leap
- 현대 Pop에서는 분류보다 실제 approach/target/resolution 문맥을 우선한다고 별도 명시

### 5. Notation / Enharmonic Spelling
수정 전 위험:
- Accidental의 효력 범위가 너무 모호함
- Enharmonic spelling 예시가 기능 설명에 충분히 직접적이지 않음

수정:
- Common-Practice staff notation에서 같은 마디/같은 staff position의 효력 범위를 명시
- Tie/editorial/contemporary convention의 예외 가능성을 남김
- D major의 C#, Db major의 Db 등 scale-degree/harmonic function 예시 추가
- Tie와 Slur를 구분

## 검수 결과 — 추가 수정 없이 통과

### Instrument Range / Idiomatic Writing
- `Virtual Instrument가 재생 가능 = 실제 악기에서 연주 가능`으로 오해하지 않도록 경계가 적절하다.
- 실제 orchestration 상세 range를 고정 수치로 암기시키지 않고 instrument-specific reference 확인을 요구한다.
- Keyboard/Guitar/Bass/String/Brass/Woodwind/Vocal을 role/range/register/articulation 관점으로 연결해 현재 책의 목적에 적합하다.

### Audio Physics for Producers
- Frequency와 pitch를 동일시하지 않는다.
- Fundamental/Harmonic/Partial을 과도하게 단순화하지 않는다.
- Phase와 Polarity를 명시적으로 구분한다.
- 0 dBFS, Headroom, Clipping, Masking, Nyquist/Aliasing, Buffer/Latency를 절대 작업값이 아니라 개념/Trade-off로 설명한다.
- 특정 sample rate, buffer size, loudness 숫자를 보편 정답으로 고정하지 않는다.

### Systematic Ear Training / Audiation
- Absolute Pitch 획득을 목표로 하지 않고 tonic-relative hearing을 중심으로 한다.
- Rhythm → Scale Degree → Interval → Triad → Bass → Functional Progression → Seventh/Guide Tone → Chromatic Harmony 순서가 점진적이다.
- 자동 분석 도구보다 human estimate를 먼저 기록하도록 해 실제 Ear Training 목적과 맞는다.
- Bass 하나만으로 Chord Symbol을 확정하지 않는 경계가 있다.

## 남은 선택 심화 — 현재 PR 범위 밖

다음은 유용하지만 현재 core foundation 병합을 막지 않는다.

- Species / Two-Part Counterpoint
- Contemporary Countermelody / Imitation
- Advanced Orchestration ranges and notation
- Metric Modulation
- Advanced acoustics / filter theory / Fourier analysis
- Advanced chromatic harmony beyond Part 17

이 항목은 실제 학습 중 필요가 확인될 때 선택 심화로 추가한다.

## Merge Gate

```text
[x] Music-theory accuracy reviewed
[x] Terminology consistency reviewed
[x] Beginner-to-advanced sequencing reviewed
[x] Traditional vs contemporary scope boundaries reviewed
[x] Voice Leading high-risk definitions corrected
[x] Period/Sentence high-risk definitions corrected
[x] Meter/Hemiola high-risk definitions corrected
[x] Non-Chord Tone high-risk definitions corrected
[x] Notation/Enharmonic high-risk definitions corrected
[x] Audio Physics terminology reviewed
[x] Ear Training sequence reviewed
[ ] README/navigation final check
[ ] final HEAD mergeability recheck
```
