# Lesson 07 — Phrase Structure: Motif, Phrase, Period, Sentence

## 학습 목표
- Section보다 작은 시간 구조를 분석한다.
- Phrase의 시작, 지속, 종결을 Cadence와 Melody/Harmony 변화로 찾는다.
- Period와 Sentence를 작곡 도구로 이해한다.
- 4+4, 2+2+4 같은 비율을 공식이 아니라 출발점으로 사용한다.

## 1. Macro Form과 Micro Form
Part 01 앞 Lesson에서는 Verse, Chorus, Bridge 같은 Section을 분석했다. 그러나 한 Section 안에도 더 작은 문법이 있다.

```text
Song
→ Section
→ Phrase
→ Subphrase / Motif
→ Note / Rhythm event
```

모든 음악이 이 계층을 동일하게 따르지는 않지만, 긴 시간 구조와 짧은 아이디어를 연결하는 데 유용하다.

## 2. Phrase
Phrase는 하나의 음악적 생각으로 들리는 시간 단위다. 길이는 반드시 4마디일 필요가 없다.

Phrase 경계의 단서:
- Melody의 호흡/쉼
- Cadence 또는 harmonic arrival
- 반복/변형의 종료
- Rhythm pattern의 reset
- Lyrics 문장/구절의 종료
- Register 또는 texture 변화

## 3. Antecedent와 Consequent
Period에서는 앞 Phrase가 질문처럼 열리고 뒤 Phrase가 더 강하게 닫히는 관계를 만들 수 있다.

```text
Antecedent: 상대적으로 열린 종결
Consequent: 상대적으로 강한 종결
```

전형적으로 같은 시작 Motif를 공유할 수 있지만, 모든 Pop phrase를 Period라고 부르지는 않는다. 핵심은 `앞의 기대 → 뒤의 더 강한 completion` 관계를 듣는 것이다.

## 4. Period
대표적인 8마디 모델:

```text
Bars 1–4  Antecedent
Bars 5–8  Consequent
```

두 Phrase가 비슷한 시작을 공유하고 서로 다른 cadence strength를 가질 수 있다.

Pop에서는 exact classical period보다 `question/answer`, `call/response`, `open/closed`라는 청감 관계로 응용하는 것이 실용적이다.

## 5. Sentence
Sentence의 대표적 사고는 `작은 아이디어 제시 → 반복/변형 → 더 긴 continuation → cadence`다.

```text
2 bars: basic idea
2 bars: repetition / variation
4 bars: continuation + fragmentation + cadence
```

이것을 고정 공식으로 쓰지 않는다. 중요한 것은 **초반의 명확한 아이디어가 후반에서 더 빠르게 분해·진행되며 종결을 향하는 에너지**다.

## 6. Fragmentation과 Continuation
Motif 전체를 반복하지 않고 일부만 짧게 반복하면 사건 밀도가 올라갈 수 있다.

```text
Original motif: A B C D
Fragment:        C D
Fragment:        C D
Sequence:        D E
Cadence
```

Pre-Chorus나 Phrase 후반의 추진력을 만드는 데 사용할 수 있다.

## 7. Phrase Extension과 Elision
실제 곡에서는 4+4가 항상 정확히 유지되지 않는다.

- Extension: 종결을 늦추거나 후속 material을 붙여 phrase를 늘린다.
- Elision/Overlap: 한 phrase의 종결이 다음 phrase의 시작과 겹친다.
- Truncation: 예상보다 짧게 닫아 긴장이나 놀라움을 만든다.

비대칭은 오류가 아니다. 예상 길이와 실제 길이의 차이가 표현 효과를 만든다.

## 8. Hypermeter의 직관
여러 마디가 더 큰 강약 주기를 만들 수 있다. 예를 들어 4마디 단위에서 1번째 마디가 큰 기준점처럼 느껴질 수 있다.

정밀한 분석 용어보다 먼저 `왜 이 마디가 큰 1박처럼 느껴지는가`를 듣는다. Drum fill, chord arrival, lyric start, bass change, section accent가 단서가 될 수 있다.

## 9. 작곡 실습
같은 2마디 Motif로 두 구조를 만든다.

```text
A. Question / Answer형 4+4
B. Basic Idea → Repetition → Continuation형 2+2+4
```

비교:
- 어디에서 completion이 느껴지는가
- Cadence strength
- Motif repetition 정도
- 후반 event density
- Lyrics breath와 맞는가
- Chorus hook으로 연결되는가

## 10. Part 04 Melody와 연결
Part 04의 Motif Development는 `무엇을 변형하는가`를 다루고, 이 Lesson은 `그 변형을 시간 구조 안에 어떻게 배치하는가`를 다룬다.

```text
Motif
→ Phrase
→ Phrase relation
→ Section
→ Song Form
```

## DohaStudio 연결
향후 구조 분석/편집에서 Section만 저장하면 phrase-level musical grammar를 놓칠 수 있다. `Phrase.start/end`, `role`, `cadence`, `motif relation`, `energy`, `lyrics span` 같은 정보가 학습/분석 후보가 될 수 있다. 현재 구현 기능으로 가정하지 않는다.

## 완료 체크
- [ ] Section과 Phrase를 구분한다.
- [ ] 실제 곡에서 Phrase 경계를 표시했다.
- [ ] Question/Answer형 Period를 만들었다.
- [ ] Basic Idea–Continuation형 Sentence를 만들었다.
- [ ] Fragmentation으로 후반 밀도를 바꿨다.
- [ ] 비대칭 Phrase를 오류가 아니라 표현 선택으로 분석한다.
