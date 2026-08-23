# Lesson — Music Notation Foundation II: Accidentals, Key/Time Signature, Rhythm Notation

## 학습 목표
- Accidentals와 Enharmonic Spelling을 구분한다.
- Key Signature와 Time Signature를 읽는다.
- Dot, Tie, Beam, Tuplet을 실제 시간 구조와 연결한다.
- Dynamics와 기본 Lead Sheet 표기를 읽는다.

## 1. Accidentals
기본 변화표는 다음과 같다.

- Sharp `#`: 음을 반음 올린다.
- Flat `b`: 음을 반음 내린다.
- Natural: 해당 음에 적용된 sharp/flat을 취소한다.

Common-Practice staff notation에서 **마디 안에 붙은 accidental은 일반적으로 그 마디 안에서 같은 staff position의 같은 음이름/옥타브에 효력이 지속**되고, bar line을 지나면 key signature의 상태로 돌아간다. Tie로 bar line을 넘어가는 음, contemporary notation convention, editorial accidental 등에는 예외와 표기 관습이 있으므로 실제 score 문맥을 확인한다.

## 2. Enharmonic Spelling
12-TET 기반 MIDI/피아노에서는 C#과 Db가 같은 sounding pitch로 재생될 수 있지만 이론적 spelling은 scale degree와 harmonic/linear function을 설명한다.

```text
D major의 7th scale degree: C#
Db major의 tonic:           Db
C로 내려가는 chromatic upper approach: Db → C
D로 올라가는 chromatic lower approach: C# → D
```

따라서 `같은 MIDI note number = 항상 같은 음악적 spelling`으로 보지 않는다. Chord와 Scale을 분석할 때는 letter-name 구조와 기능을 함께 본다.

## 3. Key Signature
Key Signature는 반복되는 sharp/flat을 매 음마다 쓰지 않고 조성의 기본 음 집합을 나타낸다.

처음에는 다음 순서로 익힌다.

```text
C major / A minor
G major / E minor
F major / D minor
D major / B minor
Bb major / G minor
```

Major와 Relative Minor가 같은 key signature를 공유할 수 있어도 tonal center와 기능은 다르다. Harmonic/Melodic Minor처럼 실제 minor-key music에서는 key signature 밖의 altered scale degree가 자주 나타날 수 있다.

## 4. Time Signature
Time Signature는 단순히 `한 마디에 숫자가 몇 개 있는가`가 아니라 beat grouping과 notation의 기준을 제공한다.

```text
4/4: quarter-note beat를 네 개로 느끼는 대표적 simple quadruple meter
3/4: quarter-note beat를 세 개로 느끼는 대표적 simple triple meter
6/8: eighth note 여섯 개를 보통 dotted-quarter 두 큰 beat로 묶어 느끼는 compound duple meter
```

실제 음악에서는 tempo와 phrasing에 따라 체감 pulse가 달라질 수 있으므로 표기와 청감을 함께 확인한다.

## 5. Dot과 Tie
Dot은 앞 음가의 절반을 더한다.

```text
dotted quarter = quarter + eighth
```

Tie는 **같은 pitch**의 두 음을 이어 하나의 지속음처럼 만든다. Beat/Bar 경계를 가로지르는 duration과 syncopation을 읽을 때 중요하다. 서로 다른 pitch를 부드럽게 연결하는 slur와 구분한다.

## 6. Beam과 Grouping
Eighth/Sixteenth note의 beam은 단순 장식이 아니라 beat grouping을 읽는 데 도움을 준다. 같은 onset/duration 데이터라도 사람이 읽기 쉬운 notation은 meter 구조를 드러내야 한다.

## 7. Tuplet / Triplet
Tuplet은 정상적인 subdivision과 다른 수로 beat를 나누는 표기다. 가장 흔한 예가 triplet이다.

```text
Straight eighth: 한 beat를 2개로 분할
Eighth-note triplet: 한 beat를 3개로 분할
```

Swing과 triplet은 관련된 청감이 있을 수 있지만 동일한 개념은 아니다. 실제 swing ratio는 연주와 tempo에 따라 달라질 수 있다.

## 8. Dynamics
대표 표기:

```text
pp  very soft
p   soft
mp  moderately soft
mf  moderately loud
f   loud
ff  very loud
<   crescendo
>   diminuendo
```

MIDI Velocity와 dynamics marking은 관련될 수 있지만 동일한 데이터는 아니다. 실제 악기에서는 articulation, register, orchestration도 perceived loudness와 timbre를 바꾼다.

## 9. Lead Sheet 기본 읽기
대중음악에서는 full score뿐 아니라 Lead Sheet를 자주 사용한다.

최소한 다음을 함께 읽는다.

- Melody notation
- Bar / Measure
- Chord Symbol
- Slash Chord
- Repeat mark
- Section label

Chord Symbol은 정확한 voicing 전체를 지정하지 않는 경우가 많다. 연주자는 style과 arrangement에 맞게 실제 음 배치를 결정한다.

## 10. 실습
```text
1. C/G/F/D/Bb major의 key signature를 확인한다.
2. 같은 2마디 rhythm을 4/4와 6/8에서 각각 작성한다.
3. Dot과 Tie를 사용해 syncopated rhythm을 적는다.
4. Straight eighth와 triplet을 MIDI로 입력해 비교한다.
5. 간단한 Melody + Chord Symbol Lead Sheet를 만든다.
6. 같은 sounding pitch가 서로 다른 enharmonic spelling을 가져야 하는 예를 세 개 찾는다.
```

## DohaStudio 연결
MIDI 중심 데이터에서는 pitch number만으로 소리를 재생할 수 있지만 score/analysis 기능에서는 `spelling`, `meter`, `beat grouping`, `notation duration`, `articulation`, `dynamic marking` 같은 정보가 추가로 필요할 수 있다. 현재 score editor가 구현됐다고 가정하지 않는다.

## 완료 체크
- [ ] Sharp/Flat/Natural과 Enharmonic Spelling을 설명한다.
- [ ] 마디 accidental과 Key Signature의 역할을 구분한다.
- [ ] Tie와 Slur를 구분한다.
- [ ] Key Signature와 tonal center를 구분한다.
- [ ] 3/4와 6/8의 기본 grouping 차이를 설명한다.
- [ ] Dot/Tie/Tuplet을 읽고 입력했다.
- [ ] Dynamics와 MIDI Velocity를 동일 개념으로 취급하지 않는다.
- [ ] 기본 Lead Sheet를 읽을 수 있다.
