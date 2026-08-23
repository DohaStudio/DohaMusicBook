# Lesson 09 — Meter Deep Dive: Simple, Compound, Tuplet, Hemiola

## 학습 목표
- Simple Meter와 Compound Meter를 beat subdivision 관점에서 구분한다.
- 3/4와 6/8을 단순한 note count가 아니라 pulse grouping으로 듣는다.
- Tuplet, Hemiola, Cross-Rhythm을 구분한다.
- Odd/Additive Meter를 기초 수준에서 이해한다.

## 1. Meter는 Grouping이다
Time Signature를 읽을 때 숫자만 세지 않는다. 중요한 질문은 다음이다.

```text
큰 beat는 몇 개인가?
각 beat는 몇 subdivision으로 나뉘는가?
accent는 어디에서 반복되는가?
```

## 2. Simple Meter
Simple Meter에서는 큰 beat가 기본적으로 2개 subdivision으로 나뉜다.

```text
2/4  simple duple
3/4  simple triple
4/4  simple quadruple
```

예: 3/4

```text
ONE & TWO & THREE &
```

## 3. Compound Meter
Compound Meter에서는 큰 beat가 기본적으로 3개 subdivision으로 나뉜다.

```text
6/8  compound duple
9/8  compound triple
12/8 compound quadruple
```

대표적인 6/8 체감:

```text
ONE-la-li TWO-la-li
1  2  3  4  5  6
^        ^
```

따라서 6/8은 보통 `eighth note 여섯 박`으로만 느끼기보다 dotted-quarter 두 큰 beat의 흐름으로 듣는다.

## 4. 3/4와 6/8
둘 다 한 마디에 eighth-note 단위 여섯 개를 포함할 수 있지만 기본 accent hierarchy가 다르다.

```text
3/4:  ONE & | TWO & | THREE &
6/8:  ONE la li | TWO la li
```

같은 note onset을 accent만 바꾸어 3/4와 6/8처럼 들리게 해 본다.

## 5. Tuplet
Tuplet은 정상 subdivision과 다른 수로 시간을 나눈다.

가장 기본적인 triplet:

```text
한 quarter-note beat
Straight eighth: 2 divisions
Triplet:          3 divisions
```

Quintuplet/Septuplet도 가능하지만 처음에는 triplet과 duplet-in-compound-meter를 확실히 듣는 것이 우선이다.

## 6. Swing과 Triplet은 동일하지 않다
Swing을 교육할 때 triplet grid로 근사하는 경우가 있지만 실제 swing ratio는 tempo, performer, genre에 따라 달라진다.

따라서

```text
Swing = 반드시 정확한 2:1 triplet ratio
```

로 고정하지 않는다.

## 7. Hemiola
Hemiola는 기존 meter 위에서 accent grouping이 잠시 다른 큰 묶음으로 들리는 현상이다. 대표적으로 triple 계열 문맥에서 3+3 대신 2+2+2 같은 accent 관계가 부각될 수 있다.

핵심은 time signature가 반드시 바뀌지 않아도 **청감상의 grouping이 재해석될 수 있다**는 것이다.

## 8. Cross-Rhythm과 Polyrhythm
Cross-Rhythm은 기존 meter와 충돌하거나 가로지르는 accent pattern을 강조하는 관점이다. Polyrhythm은 서로 다른 rhythmic division/grouping이 동시에 유지되는 더 넓은 상황을 가리킬 수 있다.

용어 경계는 문헌마다 다소 다르게 사용될 수 있으므로, 실제 분석에서는 각 layer의 cycle과 realignment 지점을 구체적으로 기록한다.

## 9. Odd / Additive Meter 입문
5/4, 7/8 같은 meter를 `이상한 박자`로 외우지 않고 내부 grouping으로 읽는다.

```text
5/4 = 3+2 또는 2+3 등
7/8 = 2+2+3 / 3+2+2 / 2+3+2 등
```

같은 7/8이라도 grouping에 따라 groove가 달라진다.

## 10. 실습
```text
1. 같은 6개의 eighth note를 3/4와 6/8 accent로 각각 만든다.
2. Straight eighth와 eighth-note triplet을 A/B한다.
3. 6/8 위에 3+3과 2+2+2 accent를 만들어 hemiola 느낌을 비교한다.
4. 7/8을 2+2+3과 3+2+2 두 버전으로 만든다.
5. Kick은 기본 pulse, 다른 percussion은 cross-rhythm으로 배치한다.
```

## DohaStudio 연결
향후 Rhythm/MIDI 구조에서는 `time_signature`만으로 groove를 완전히 설명할 수 없다. `beat grouping`, `subdivision`, `accent`, `tuplet ratio`, `microtiming` 같은 정보가 분석에 필요할 수 있다. 현재 기능으로 가정하지 않는다.

## 완료 체크
- [ ] Simple/Compound Meter를 설명한다.
- [ ] 3/4와 6/8을 청감과 grouping으로 구분한다.
- [ ] Tuplet과 Swing을 동일시하지 않는다.
- [ ] Hemiola의 accent regrouping을 만들었다.
- [ ] 7/8을 두 grouping으로 연주/입력했다.
