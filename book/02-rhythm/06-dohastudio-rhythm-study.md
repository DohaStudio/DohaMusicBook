# Lesson 06 — DohaStudio로 Rhythm 공부하기

> 목표: 현재 구현된 DohaMusic 기능만 사용해 생성 결과를 Rhythm 관점으로 비교하고, 아직 없는 편집 기능은 TARGET으로 분리한다.

## 1. 현재 사용할 수 있는 흐름

현재 공부 흐름은 다음처럼 잡는다.

```text
생성 결과 선택
→ playback
→ BPM/박자 추정
→ Section별 리듬 밀도 기록
→ Kick/Bass/Vocal timing 비교
→ 후보 간 Listening Review
→ Product gap 기록
```

## 2. 화면별 활용

### `/history`

비교할 후보 두 개 이상을 고른다. 가능하면 비슷한 Music Intent나 유사한 Tempo의 결과를 선택한다.

### `/result/[jobId]`

처음 30초, Chorus 진입 전후, Bridge/후반부를 반복 청취한다.

### `/projects/[id]`

Composition Read Workspace의 playhead와 Timeline을 이용해 Section 경계와 리듬 변화 시점을 메모한다.

## 3. Rhythm Review 양식

```text
Candidate:
Estimated BPM:
Meter guess:
Feel: Straight / Swing / Shuffle / Other
Kick character:
Snare/backbeat:
Hi-hat subdivision:
Bass interaction:
Vocal placement:
Main syncopation point:
Best section transition:
Weakest rhythm section:
Overall groove score (1-5):
Reason:
```

## 4. 후보 비교

두 후보를 비교할 때 '더 좋다'로 끝내지 않는다.

```text
A
- 안정적인 backbeat
- Bass가 너무 grid-like
- Chorus에서도 density 변화가 적음

B
- Vocal pickup이 자연스러움
- Bass off-beat가 forward motion을 만듦
- Pre→Chorus에서 hat subdivision이 증가

Choice: B
Reason: stronger groove and clearer section lift
```

## 5. CURRENT / TARGET 구분

### CURRENT

- 생성 WAV playback
- Timeline/playhead 기반 시간 확인
- 생성 결과/이력 비교
- 현재 제공되는 Tempo/Hook 분석 기반 활용

### TARGET

- MIDI Track
- Piano Roll
- 직접 Note start/duration/velocity 편집
- Quantization
- Swing amount
- Humanization
- Tempo map / Meter editing
- Drum grid editor

TARGET 기능은 '프로그램 사용법'으로 쓰지 않고 향후 요구사항으로만 기록한다.

## 6. Product Gap 기록

공부 중 불편한 점은 기능 요구사항으로 연결한다.

```text
Music problem:
Chorus groove가 약하다.

What I want to edit:
Bass note timing and velocity.

Current limitation:
Audio playback only; no MIDI note editing.

Possible DohaMusic capability:
Piano Roll + velocity lane + quantize/humanize comparison.
```

## 7. Part 02 최종 산출물

Part 02를 끝내면서 다음 파일을 자신의 study 기록으로 만든다.

```text
01-bpm-meter-analysis.md
02-straight-swing-comparison.md
03-syncopation-pickup-notes.md
04-groove-part-interaction.md
05-section-rhythm-map.md
06-candidate-rhythm-review.md
07-product-gap-notes.md
```

## 8. 완료 체크

- 생성 결과의 Rhythm을 구조적으로 리뷰할 수 있다.
- 후보 선택 이유를 BPM, subdivision, accent, syncopation, groove, density 관점으로 쓸 수 있다.
- 현재 기능과 향후 편집 기능을 구분할 수 있다.
- 음악 공부에서 발견한 문제를 DohaStudio 기능 요구사항으로 변환할 수 있다.
