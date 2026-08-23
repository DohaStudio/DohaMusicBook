# Part 03 — Harmony: 코드로 긴장과 해결을 설계한다

> 학습 목표: 코드 이름을 외우는 데서 끝나지 않고 Key, Scale, Interval, Chord Quality, 기능화성, Harmonic Rhythm, Voice Leading, Reharmonization, Tonality/Mode를 실제 곡의 감정 흐름과 연결한다.

## 공부 순서

1. [Lesson 01 — Key와 Scale](lesson-01-key-scale.md)
2. [Lesson 02 — Diatonic Chord](lesson-02-diatonic-chords.md)
3. [Lesson 03 — Chord Function과 Progression](lesson-03-chord-function-progression.md)
4. [Lesson 04 — Harmonic Rhythm, Bass, Inversion](lesson-04-harmonic-rhythm-inversion.md)
5. [Lesson 05 — Reharmonization](lesson-05-reharmonization.md)
6. [Lesson 06 — Melody와 Harmony, DohaStudio 실습](lesson-06-melody-harmony-dohastudio.md)
7. [Lesson 07 — Chord Progression을 MIDI로 변형하기](lesson-07-chord-progression-midi-variation.md)
8. [Lesson 08 — Interval, Scale Gravity, Cadence를 귀로 이해하기](lesson-08-interval-scale-gravity-cadence.md)
9. [Lesson 09 — Tonality, Modes, Special Scales](lesson-09-tonality-modes-special-scales.md)
10. [Lesson 10 — Interval, Chord Quality, Cadence Reference](lesson-10-interval-chord-quality-cadence-reference.md)
11. [Lesson 11 — Voice Leading Fundamentals](lesson-11-voice-leading-fundamentals.md)

## 이 Part에서 익힐 핵심

```text
Key / Scale
   ↓
Interval / Scale Gravity
   ↓
Triad / 7th Chord Quality
   ↓
Diatonic Chord
   ↓
Chord Function / Cadence
   ↓
Chord Progression
   ↓
Harmonic Rhythm + Bass + Inversion
   ↓
Voice Leading
   ↓
Reharmonization
   ↓
Tonality / Mode / Special Scale
   ↓
Melody와의 Tension / Resolution
   ↓
MIDI Variation + Ear Training
   ↓
Candidate Harmony Review
```

코드 진행을 '좋아 보이는 코드 이름의 나열'로 공부하지 않는다. 각 코드가 Key 안에서 어떤 역할을 하고, 언제 바뀌며, Bass와 Inner/Top Voice가 어떻게 움직이고, Melody와 어떤 긴장/해결 관계를 만드는지 듣는다.

## Chord Progression Practice Library

이론을 공부한 뒤 [`examples/chord-progressions/`](../../examples/chord-progressions/README.md)에 직접 만든 Progression을 축적한다. 상업 도서의 부록 MIDI를 복제하거나 재배포하지 않고, 직접 입력한 MIDI와 자신의 분석/Variation을 저장한다.

한 Progression마다 Tempo, Velocity, Duration, Rhythm, Voicing/Inversion, Transpose, Timbre를 바꾸고, Voice Leading Lesson에서는 Root-position과 common-tone/stepwise 연결을 별도로 A/B한다.

## Harmony Ear Training Library

기본 이론을 읽은 뒤 [`examples/harmony-ear-training/`](../../examples/harmony-ear-training/README.md)에서 Cadence, Major/Minor ii–V–I, Guide Tone/Shell Voicing, Tritone Substitution, Altered Dominant, Aeolian/Dorian 비교를 실제 MIDI로 듣는다.

분석 순서는 `먼저 듣기 → 예상 기록 → Piano Roll/Chord 확인 → 다시 듣기`를 유지한다. 체계적인 기초 Ear Training은 Part 14 Lesson 08에서 단계화한다.

## 직접 만들 최종 결과

```text
01-key-scale-analysis.md
02-diatonic-chord-practice.md
03-function-progression.md
04-harmonic-rhythm-inversion.md
05-reharmonization-comparison.md
06-melody-harmony-notes.md
07-midi-progression-variations.md
08-ear-training-review.md
09-voice-leading-comparison.md
10-candidate-harmony-review.md
11-product-gap-notes.md
```

## DohaStudio 연결 원칙

### CURRENT
현재 DohaMusic은 생성된 Audio/Composition을 재생하고 시간 위치를 확인하며 후보와 Artifact 계보를 공부하는 데 사용할 수 있다. 완성형 Chord Editor나 MIDI Piano Roll은 현재 기능으로 설명하지 않는다.

### TARGET
향후 `Key`, `Scale`, `ChordEvent`, `ChordFunction`, `BassNote`, `Voicing`, `HarmonicRhythm`, `SectionHarmony` 같은 음악 정보를 분석·생성·편집 데이터로 연결할 수 있다. Voice Leading을 표현하려면 chord label뿐 아니라 실제 note/register 관계가 필요할 수 있다. 실제 구현 계약은 최신 DohaMusic 코드와 ADR을 우선한다.

## Part 03 완료 기준

- Key와 Scale을 구분한다.
- Interval과 Scale Degree의 긴장/안정을 귀로 비교한다.
- Triad/7th Chord Quality를 직접 구성한다.
- Diatonic Chord를 직접 만든다.
- Tonic/Predominant/Dominant를 진행 안에서 듣는다.
- 기본 Cadence를 구분한다.
- Harmonic Rhythm을 Tempo와 구분한다.
- Inversion으로 Bass movement를 바꾼다.
- Common Tone/Stepwise Motion을 사용해 Voice Leading을 만든다.
- Leading Tone과 Chordal 7th의 대표적인 해결 경향을 설명한다.
- Secondary Dominant와 Modal Interchange를 최소 한 번 적용한다.
- Tonality와 Mode의 차이를 설명한다.
- Melody와 Harmony의 긴장/해결을 설명한다.
- 같은 코드 진행을 MIDI에서 여러 방식으로 변형해 비교한다.
- AI Candidate의 화성을 음악 용어로 비교한다.
