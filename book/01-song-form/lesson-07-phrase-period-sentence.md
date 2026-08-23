# Lesson 07 — Phrase Structure: Motif, Phrase, Period, Sentence

## 학습 목표
- Section보다 작은 시간 구조를 분석한다.
- Phrase의 시작, 지속, 종결을 Cadence와 Melody/Harmony 변화로 찾는다.
- Period와 Sentence를 전통적 정의와 현대 Pop 응용으로 구분해 이해한다.
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
전통적인 Period에서는 두 Phrase가 기능적으로 짝을 이룬다.

```text
Antecedent: 상대적으로 약하거나 열린 cadence
Consequent: 상대적으로 더 강한 cadence
```

전형적인 **parallel period**에서는 두 Phrase가 유사한 basic idea로 시작한다. 그러나 모든 period가 같은 시작을 공유하는 것은 아니며 contrasting period도 가능하다.

따라서 `같은 Motif가 두 번 나오면 Period`라고 판단하지 않고, 두 Phrase의 시작 관계와 cadence strength를 함께 본다.

## 4. Period
대표적인 8마디 모델:

```text
Bars 1–4  Antecedent
Bars 5–8  Consequent
```

Period의 핵심은 단순한 4+4 길이보다 **두 Phrase가 question/answer에 가까운 종결 관계를 만든다**는 점이다.

Pop에서는 classical cadence label이 분명하지 않아도 `open → more closed`, `setup → answer` 관계로 응용해 들을 수 있다. 다만 모든 8마디 question/answer를 엄밀한 classical period라고 부르지는 않는다.

## 5. Sentence
Classical sentence의 대표적 모델은 8마디 안에서 **Presentation + Continuation** 기능으로 설명할 수 있다.

```text
Presentation
2 bars: basic idea
2 bars: repetition / varied repetition

Continuation
4 bars: fragmentation / acceleration / sequence / harmonic motion + cadence
```

중요한 것은 2+2+4 숫자 자체보다 초반에 아이디어를 확립하고, 후반에 material을 압축·분해·진행시켜 cadence를 향하는 기능적 대비다.

Pop에서는 정확한 classical sentence가 아니더라도 이 `establish → intensify/fragment → arrive` 원리를 Phrase 설계 도구로 사용할 수 있다.

## 6. Fragmentation과 Continuation
Motif 전체를 반복하지 않고 일부만 짧게 반복하면 사건 밀도가 올라갈 수 있다.

```text
Original motif: A B C D
Fragment:        C D
Fragment:        C D
Sequence:        D E
Cadence
```

Continuation에서는 fragmentation 외에도 harmonic rhythm 증가, sequence, shorter unit, melodic acceleration 등이 함께 나타날 수 있다.

## 7. Phrase Extension과 Elision
실제 곡에서는 4+4가 항상 정확히 유지되지 않는다.

- Extension: 예상된 종결 뒤 또는 종결을 향하는 과정에 material을 더해 phrase를 늘린다.
- Elision/Overlap: 한 formal function의 종결 지점이 다음 unit의 시작과 겹친다.
- Truncation: 예상보다 짧게 닫아 긴장이나 놀라움을 만든다.

비대칭은 오류가 아니다. 예상 길이와 실제 길이의 차이가 표현 효과를 만든다.

## 8. Hypermeter의 직관
여러 마디가 더 큰 강약 주기를 만들 수 있다. 예를 들어 4마디 단위에서 1번째 마디가 큰 기준점처럼 느껴질 수 있다.

정밀한 분석 용어보다 먼저 `왜 이 마디가 큰 1박처럼 느껴지는가`를 듣는다. Drum fill, chord arrival, lyric start, bass change, section accent가 단서가 될 수 있다.

## 9. 작곡 실습
같은 2마디 Motif로 두 구조를 만든다.

```text
A. Question / Answer형 4+4
B. Presentation → Continuation형 2+2+4
```

비교:
- 어디에서 completion이 느껴지는가
- Cadence strength
- Motif repetition 정도
- 후반 event density
- Harmonic rhythm 변화
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
- [ ] Antecedent/Consequent의 cadence-strength 관계를 설명한다.
- [ ] Parallel Period와 단순 반복을 구분한다.
- [ ] Presentation/Continuation형 Sentence를 만들었다.
- [ ] Fragmentation으로 후반 밀도를 바꿨다.
- [ ] 비대칭 Phrase를 오류가 아니라 표현 선택으로 분석한다.
