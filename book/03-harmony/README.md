# Part 03 — Harmony: 코드로 긴장과 해결을 설계한다

> 학습 목표: 코드 이름을 외우는 데서 끝나지 않고 Key, Scale, Diatonic Chord, 기능화성, Harmonic Rhythm, Reharmonization을 실제 곡의 감정 흐름과 연결한다.

## 공부 순서

1. [Lesson 01 — Key와 Scale](lesson-01-key-scale.md)
2. [Lesson 02 — Diatonic Chord](lesson-02-diatonic-chords.md)
3. [Lesson 03 — Chord Function과 Progression](lesson-03-chord-function-progression.md)
4. [Lesson 04 — Harmonic Rhythm, Bass, Inversion](lesson-04-harmonic-rhythm-inversion.md)
5. [Lesson 05 — Reharmonization](lesson-05-reharmonization.md)
6. [Lesson 06 — Melody와 Harmony, DohaStudio 실습](lesson-06-melody-harmony-dohastudio.md)

## 이 Part에서 익힐 핵심

```text
Key / Scale
   ↓
Diatonic Chord
   ↓
Chord Function
   ↓
Chord Progression
   ↓
Harmonic Rhythm + Bass + Inversion
   ↓
Reharmonization
   ↓
Melody와의 Tension / Resolution
   ↓
Candidate Harmony Review
```

코드 진행을 '좋아 보이는 코드 이름의 나열'로 공부하지 않는다. 각 코드가 Key 안에서 어떤 역할을 하고, 언제 바뀌며, Bass가 어떻게 움직이고, Melody와 어떤 긴장/해결 관계를 만드는지 듣는다.

## 직접 만들 최종 결과

Part 03을 끝낼 때 `study/harmony/`에 다음 기록을 만들 수 있다.

```text
01-key-scale-analysis.md
02-diatonic-chord-practice.md
03-function-progression.md
04-harmonic-rhythm-inversion.md
05-reharmonization-comparison.md
06-melody-harmony-notes.md
07-candidate-harmony-review.md
08-product-gap-notes.md
```

실제 학습 기록은 정답지가 아니다. 틀린 채보도 나중에 다시 듣고 수정한 과정을 남기는 것이 중요하다.

## DohaStudio 연결 원칙

### CURRENT
현재 DohaMusic은 생성된 Audio/Composition을 재생하고 시간 위치를 확인하며 후보와 Artifact 계보를 공부하는 데 사용할 수 있다. 완성형 Chord Editor나 MIDI Piano Roll은 현재 기능으로 설명하지 않는다.

### TARGET
향후 `Key`, `Scale`, `ChordEvent`, `ChordFunction`, `BassNote`, `Voicing`, `HarmonicRhythm`, `SectionHarmony` 같은 음악 정보를 분석·생성·편집 데이터로 연결할 수 있다. 이 목록은 학습 관점의 목표 표현이며 실제 구현 계약은 최신 DohaMusic 코드와 ADR을 우선한다.

## Part 03 완료 기준

- Key와 Scale을 구분한다.
- Diatonic Chord를 직접 만든다.
- Tonic/Predominant/Dominant를 진행 안에서 듣는다.
- Harmonic Rhythm을 Tempo와 구분한다.
- Inversion으로 Bass movement를 바꾼다.
- Secondary Dominant와 Modal Interchange를 최소 한 번 적용한다.
- Melody와 Harmony의 긴장/해결을 설명한다.
- AI Candidate의 화성을 음악 용어로 비교한다.
