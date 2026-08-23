# Lesson 08 — Systematic Ear Training & Audiation

## 학습 목표
- 이론 이름을 보기 전에 소리를 내부적으로 듣고 재현하는 습관을 만든다.
- Rhythm, Scale Degree, Interval, Chord, Bass, Progression을 단계적으로 훈련한다.
- `guess → sing/play → transcribe → verify → correct` 루프를 사용한다.
- 절대음감이 아니라 관계적 청취와 기억을 훈련한다.

## 1. Audiation
Audiation은 실제 소리가 나지 않아도 음악의 pitch/rhythm 관계를 내부적으로 예상하고 들을 수 있는 능력을 가리킨다.

이 책에서는 다음 루프를 사용한다.

```text
Hear
→ Guess
→ Sing / Tap / Play
→ Write
→ Verify with instrument/MIDI
→ Correct
→ Hear again
```

처음부터 정답률을 높이는 것보다 오답을 수정하는 과정이 중요하다.

## 2. Level 1 — Pulse와 Subdivision
먼저 pitch 없이 시간 구조를 훈련한다.

- 일정한 pulse 유지
- 2 subdivision
- 3 subdivision
- 4 subdivision
- accent 위치 모방
- 짧은 rhythm dictation

Metronome을 모든 beat에 두는 것에서 시작해 점차 sparse click으로 바꾼다.

## 3. Level 2 — Scale Degree Singing
고정된 tonic을 들은 뒤 scale degree의 관계를 노래한다.

```text
1 2 3 4 5 6 7 1
1 3 5 3 1
1 2 3 2 1
5 4 3 2 1
```

숫자, movable-do 등 한 체계를 선택해 일관되게 사용한다. 특정 syllable 자체보다 tonic에 대한 관계를 듣는 것이 목적이다.

## 4. Level 3 — Interval
두 음의 거리 이름만 맞히지 않는다.

훈련 순서:
1. 기준음을 듣는다.
2. 목표 interval을 내부적으로 예상한다.
3. 직접 노래한다.
4. 악기/MIDI로 확인한다.
5. 실제 melody 안에서 같은 interval을 찾는다.

Ascending/Descending과 harmonic/melodic interval을 모두 비교한다.

## 5. Level 4 — Triad Quality
Root를 먼저 찾고 다음을 구분한다.

```text
Major
Minor
Diminished
Augmented
```

처음에는 root-position block chord로 시작하고 이후 inversion으로 확장한다. Voicing이 달라도 quality의 핵심 interval 관계를 듣는다.

## 6. Level 5 — Bass Transcription
Harmony 전체를 맞히기 전에 Bass line을 먼저 적는다.

```text
Tonic reference
→ bass pitch / scale degree
→ rhythm
→ repeated / moving bass
→ inversion 가능성
```

Bass는 harmonic function을 추정하는 강한 단서지만 Bass note 하나만으로 Chord Symbol을 확정하지 않는다.

## 7. Level 6 — Functional Progression
처음에는 제한된 vocabulary로 시작한다.

```text
I
IV / ii
V
vi
```

다음 질문을 사용한다.

- Home처럼 들리는가?
- Away / preparation인가?
- Dominant pull이 있는가?
- Cadence가 닫히는가?

이후 diatonic chord 전체와 inversion으로 확장한다.

## 8. Level 7 — Seventh Chord와 Guide Tone
Triad가 안정되면 Major7, Dominant7, Minor7, Half-Diminished 등을 추가한다.

특히 Dominant7의 3rd/7th와 resolution을 노래해 본다.

```text
G7 → C
B → C
F → E
```

Part 03 Voice Leading과 Part 17 Guide Tone을 귀훈련으로 연결한다.

## 9. Level 8 — Chromatic Harmony
기초 기능이 안정된 뒤 다음으로 확장한다.

- Secondary Dominant
- Modal Interchange
- Diminished approach
- Tritone Substitution
- Altered Dominant
- Modal color

현재 `examples/harmony-ear-training/`의 Jazz 예제는 이 단계에서 사용한다.

## 10. Melody Dictation
2~4마디의 짧은 melody를 다음 순서로 적는다.

```text
1. meter/pulse
2. rhythm only
3. tonic/key guess
4. phrase ending
5. scale degree contour
6. exact pitch
7. chord relation
```

처음부터 모든 음을 동시에 맞히려 하지 않는다.

## 11. Harmonic Dictation
```text
1. Bass
2. Cadence
3. Harmonic rhythm
4. Function
5. Chord quality
6. Inversion/voicing
7. Non-diatonic detail
```

Chord Symbol부터 찍는 습관을 피한다.

## 12. Daily 20-Minute Routine
```text
5 min  rhythm / subdivision
5 min  scale degree + interval singing
5 min  chord / bass / cadence
5 min  real-song transcription
```

주 1회는 같은 자료를 다시 풀어 improvement를 확인한다.

## 13. 오답 기록
```text
Source:
First guess:
Confidence:
Actual:
What fooled me:
Could I sing it before checking?:
Correction drill:
Retest date:
```

오답은 삭제하지 않는다. 반복되는 착각이 자신의 청취 약점이다.

## DohaStudio 연결
자동 Key/Chord/BPM 분석이 생기더라도 먼저 사람의 추정을 기록한다. Tool output을 정답지로 즉시 소비하면 ear training이 되지 않는다.

```text
Human estimate
→ Tool estimate
→ Source/MIDI verification when possible
→ Difference analysis
```

## 완료 체크
- [ ] Scale Degree를 tonic 기준으로 노래한다.
- [ ] 주요 Interval을 듣고 노래한 뒤 확인한다.
- [ ] Major/Minor/Diminished/Augmented triad를 비교한다.
- [ ] 짧은 Bass line을 먼저 채보한다.
- [ ] I/IV/V/vi 중심 진행을 기능으로 듣는다.
- [ ] Melody/Harmony dictation에서 오답 기록을 남긴다.
- [ ] Jazz Ear Training을 기초 단계를 건너뛰지 않고 수행한다.
