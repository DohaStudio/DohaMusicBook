# Lesson 02 — Prompt와 Structured Condition

## 학습 목표
- 자연어 Prompt와 구조화된 Music Condition을 구분한다.
- 장르명만 입력하는 방식의 한계를 이해한다.
- 시간에 따라 변하는 Section 정보를 Condition으로 설계한다.

## 1. Prompt와 Condition
Prompt는 사람이 음악 의도를 설명하는 자연어다. Condition은 모델 또는 시스템이 다루기 쉬운 구조화된 제약·속성이다.

```text
Prompt: energetic emotional K-pop with a restrained verse and explosive chorus

Condition:
genre: k-pop
tempo: 126
verse_energy: 4
pre_energy: 7
chorus_energy: 9
vocal: powerful mixed voice
instrumentation: synth+bass+drums
```

구체적인 실제 field 이름은 시스템 구현에 따라 달라질 수 있다.

## 2. 포함할 요소
- Genre
- Mood
- Tempo / Feel
- Meter
- Song Form
- Instrumentation
- Vocal character
- Melody direction
- Energy curve
- Production texture
- Negative constraints

## 3. 시간적 변화 쓰기
좋은 Condition은 곡 전체에 하나의 형용사만 붙이지 않는다.

```text
Verse: sparse, low register, restrained
Pre: rising register, faster harmonic rhythm
Chorus: wider range, denser drums, stronger hook
```

## 4. Negative Constraint
원하지 않는 결과도 명시할 수 있다.

예:
```text
avoid overly busy fills
avoid long ambient intro
avoid excessive vocal ad-libs
```

단, 특정 아티스트나 곡의 복제를 직접 지시하는 방식보다 음악 속성으로 요구사항을 표현하는 습관을 들인다.

## 5. 실습
같은 Music Intent를 두 방식으로 작성한다.

A. 자연어 Prompt
B. Structured Condition 표

두 버전에서 빠진 정보가 무엇인지 비교한다.

## 6. DohaStudio 연결
DohaLM은 언어적 Intent/Prompt/Revision을 지원하는 방향이고, DohaMusic은 Project와 Composition 관점에서 작업 흐름을 소유한다. 실제 Condition contract가 어디에 존재하는지는 최신 저장소와 ADR을 확인한다.

## 완료 체크
- [ ] Prompt와 Condition 차이를 설명한다.
- [ ] Section별 Energy 차이를 작성했다.
- [ ] Negative Constraint를 최소 세 개 만들었다.
