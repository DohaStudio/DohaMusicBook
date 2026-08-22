# Lesson 04 — AI Generation, Candidate Screening, Selection

## 목표
AI를 한 번 실행해 결과를 받는 단계가 아니라, 동일한 Intent를 기준으로 여러 후보를 만들고 선택 근거를 남기는 단계로 사용한다.

## 1. Generation Batch 설계

```text
Batch ID:
Music Intent version:
Lyrics version:
Condition version:
Number of candidates:
Generation date:
```

한 번에 너무 많은 변수를 바꾸지 않는다. 무엇이 결과에 영향을 줬는지 비교할 수 있어야 한다.

## 2. 1차 Screening
명백한 실패 후보를 제거한다.

```text
Candidate:
Audio corruption? yes/no
Genre fit? yes/no
Vocal immediately unusable? yes/no
Intro/hook direction acceptable? yes/no
Keep for full review? yes/no
```

## 3. 2차 Review

| 항목 | 점수(1~10) | 메모 |
|---|---:|---|
| Melody | | |
| Harmony | | |
| Rhythm/Groove | | |
| Song Form | | |
| Arrangement | | |
| Vocal | | |
| Sound Quality | | |
| Intent Fit | | |
| Originality | | |

## 4. Section 단위 판단
후보 전체만 평가하지 않는다.

```text
Best verse:
Best pre-chorus:
Best chorus:
Best arrangement:
Best vocal tone:
Weakest section:
```

한 후보의 Verse가 좋고 다른 후보의 Chorus가 좋을 수 있다. 장기적으로 이런 판단이 partial regeneration/editing 요구로 이어진다.

## 5. Selection Record

```text
Selected candidate:
Why selected:
What must remain:
What must change:
Rejected candidate worth revisiting:
Reason:
```

`그냥 제일 좋다`는 판단을 기록하지 않는다.

## 6. DohaMusic에서 확인
현재 가능한 범위에서는 Generation/Result/History/Project 흐름에서 Job과 결과를 추적하고, 각 후보의 청취 메모를 학습 기록과 연결한다.

## 완료 조건
- [ ] 후보를 2개 이상 동일 기준으로 평가했다.
- [ ] 선택 이유를 음악 용어로 설명했다.
- [ ] 유지할 요소와 수정할 요소를 분리했다.
