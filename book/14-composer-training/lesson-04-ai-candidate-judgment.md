# Lesson 04 — AI Candidate를 고르는 귀 훈련

## 목표
AI 생성 횟수를 늘리는 대신 좋은 결과와 나쁜 결과를 빠르고 구체적으로 구분하는 능력을 훈련한다.

## 1. 최소 두 후보 비교
한 Candidate만 들으면 판단 기준이 약해진다. 같은 Intent에서 최소 두 개 이상을 비교한다.

## 2. 1차 Screening
명백한 실패만 빠르게 제거한다.

- 깨진 Audio
- 목표 장르와 큰 불일치
- 심한 Vocal artifact
- 구조 붕괴
- 명백한 Prompt/Intent 미충족

## 3. 2차 Review

```text
Candidate A / B / C
Melody:
Harmony:
Groove:
Song form:
Section contrast:
Arrangement:
Vocal:
Sound quality:
Originality:
Intent fit:
```

## 4. Winner만 고르지 않는다
후보마다 살릴 부분을 기록한다.

```text
A: best verse groove
B: best pre-chorus lift
C: best chorus hook
```

이 기록은 이후 partial revision 또는 human editing 계획이 된다.

## 5. AI 편향 피하기
새로 생성된 결과라는 이유로 더 좋다고 판단하지 않는다. 레퍼런스와 비슷하다는 이유만으로 좋은 결과라고 판단하지도 않는다.

## 6. DohaMusic 학습 연결
현재 가능한 History/Result/Project 청취 흐름에서 후보와 Job을 추적한다. 향후 A/B Candidate UI가 추가되더라도 음악적 평가 기준 자체는 이 기록을 유지한다.

## 완료 기준
- [ ] 동일 Intent의 후보를 최소 3개 비교했다.
- [ ] Winner와 이유를 기록했다.
- [ ] 탈락 후보에서 살릴 요소도 찾았다.
- [ ] regenerate/edit/keep 판단을 구분했다.
