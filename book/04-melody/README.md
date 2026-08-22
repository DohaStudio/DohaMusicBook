# Part 04 — Melody: 기억되는 선율을 만든다

> 학습 목표: 멜로디를 감으로만 쓰지 않고 Rhythm, Pitch, Phrase, Motif, Contour, Range, Tension/Resolution으로 분석하고 발전시킨다.

## 1. Melody = Rhythm + Pitch

멜로디는 음높이만의 문제가 아니다. 같은 음을 사용해도 리듬이 달라지면 전혀 다른 멜로디가 된다. 먼저 리듬을 만들고 음높이를 붙이는 연습도 도움이 된다.

## 2. Phrase와 호흡

Phrase는 하나의 음악적 문장이다. Vocal Melody에서는 사람이 실제로 숨을 쉴 수 있는 길이와 발음 흐름을 고려해야 한다. 너무 긴 Phrase를 만들면 이론적으로 가능해도 부르기 불편할 수 있다.

## 3. Motif

Motif는 곡의 정체성을 만드는 짧은 음악 아이디어다. 좋은 곡은 서로 무관한 멜로디를 계속 새로 만드는 대신 한두 개의 강한 Motif를 발전시키는 경우가 많다.

예시:

```text
원형: C - E - G - E
```

이 짧은 패턴을 여러 방법으로 변형할 수 있다.

## 4. Motif Development

### Repetition

같은 Motif를 그대로 반복한다. 기억에는 잘 남지만 과도하면 지루해질 수 있다.

### Sequence

형태는 유지한 채 시작 음을 이동한다.

### Inversion

상행을 하행으로, 하행을 상행으로 뒤집는다.

### Variation

리듬이나 음 일부를 바꾼다.

### Addition / Omission

음을 더하거나 생략한다.

### Augmentation / Diminution

음가를 늘리거나 줄여 시간적 크기를 바꾼다.

## 5. Melody Contour

멜로디는 크게 세 방향을 반복한다.

- 상행
- 하행
- 반복

이 흐름을 선으로 그려보면 곡의 형태를 눈으로 볼 수 있다.

```text
Verse:      _/\__/
Pre:       __/\/\/
Chorus:   ___/^^\__
```

정확한 그래프가 아니라 Section별 방향성과 Climax를 찾는 것이 목적이다.

## 6. Stepwise와 Leap

가까운 음으로 움직이는 순차진행은 자연스럽고 부르기 쉽다. 큰 도약은 강한 인상을 줄 수 있다. 대부분 순차 진행을 유지하다 중요한 Hook이나 Climax에서 도약을 사용하면 대비를 만들기 쉽다.

## 7. Range와 Climax

Verse, Pre-Chorus, Chorus가 모두 같은 음역에 머무르면 Section 대비가 약해질 수 있다. Chorus의 최고음을 반드시 가장 높게 만들어야 하는 것은 아니지만, 음역 설계는 Energy Curve와 밀접하다.

기록 예시:

```text
Verse range: A3–E4
Pre range:    C4–G4
Chorus range: E4–B4
Climax note:  B4
```

## 8. Chord Tone과 Non-Chord Tone

코드톤은 안정감을 만든다. 비화성음은 긴장을 만들고 다음 안정음으로 향하게 할 수 있다.

공부할 대표적인 비화성음:

- Passing Tone
- Neighbor Tone
- Suspension
- Anticipation
- Appoggiatura
- Escape Tone

중요한 것은 이름을 암기하는 것보다 실제로 `긴장 → 해결`을 귀로 듣는 것이다.

## 9. Hook

Hook은 반드시 Chorus 전체를 의미하지 않는다. 짧은 Melody Motif, Rhythm, Vocal Phrase, Instrumental line도 Hook이 될 수 있다. 좋은 Hook은 보통 반복 가능하고 구별되며 기억하기 쉽다.

## 10. 듣기 실습

좋아하는 곡의 Chorus를 듣고 다음을 적는다.

```text
First note:
Highest note:
Lowest note:
Main motif:
Repeated rhythm:
Largest leap:
Where tension occurs:
Where it resolves:
Hook length:
```

가능하면 피아노나 MIDI Keyboard로 따라 친다.

## 11. 직접 작곡 실습

### Exercise A — 2마디 Motif

4~6개의 음만 사용해 2마디 Motif를 만든다. 음정보다 리듬이 먼저 기억되는지 확인한다.

### Exercise B — 8마디 발전

같은 Motif로 8마디를 만든다.

```text
Bars 1–2: original
Bars 3–4: sequence
Bars 5–6: variation
Bars 7–8: climax + resolution
```

### Exercise C — Verse와 Chorus

Verse에서는 원형을 낮은 음역에 두고 Chorus에서는 리듬 또는 음역을 확장한다. 두 Section이 같은 곡이라는 연결감과 충분한 대비를 동시에 확인한다.

## 12. DohaStudio와 연결

### CURRENT

현재 DohaMusic의 Target 방향에는 AI Music Director, 후보 비교/선택, Composition Evaluation이 포함되어 있지만 MIDI Track/Piano Roll은 아직 미구현이다. 따라서 현재 프로그램에서 Melody를 세밀하게 Note 단위 수정하는 사용법을 작성하면 안 된다.

### TARGET

Melody를 구조화해 다룬다면 다음 정보가 필요하다.

```text
Motif
Phrase
NoteEvent
Pitch
Start
Duration
Velocity
Contour
Range
Climax
TensionPoint
SectionRole
```

AI Generation은 한 번의 결과를 정답으로 보기보다 여러 Melody Candidate를 만든 뒤 비교하고 수정하는 방식으로 연결할 수 있다.

## 13. 현재 DohaMusic으로 공부하기

1. 같은 조건으로 생성된 후보 여러 개를 듣는다.
2. Chorus의 첫 10~20초만 반복해서 듣는다.
3. 가장 기억나는 Candidate를 고른다.
4. '왜 기억나는가'를 Motif/Contour/Range/Rhythm 용어로 적는다.

```text
Candidate A
- wide range
- hook begins with leap
- rhythm changes too often

Candidate B
- 4-note motif repeats three times
- final repetition rises
- clearer resolution

Choice: B
```

이 기록은 향후 Candidate Ranking 기준을 설계할 때도 음악적 근거가 된다.

## 14. 이 장을 끝냈다면

- Melody를 Rhythm과 Pitch로 분해해서 볼 수 있다.
- Motif를 만들고 최소 세 가지 방식으로 발전시킬 수 있다.
- Contour, Range, Leap, Climax를 분석할 수 있다.
- 비화성음의 긴장과 해결을 들을 수 있다.
- AI 생성 후보를 Melody 관점으로 비교할 수 있다.
