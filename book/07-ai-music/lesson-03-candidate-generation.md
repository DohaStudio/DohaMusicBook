# Lesson 03 — Candidate Generation: 한 번의 생성으로 끝내지 않는다

## 학습 목표
- AI 결과 하나를 정답으로 보지 않는다.
- 같은 Intent에서 여러 Candidate를 만든다.
- 1차 Screening과 2차 Listening Review를 분리한다.

## 1. 왜 여러 후보가 필요한가
AI 생성은 같은 조건에서도 결과가 달라질 수 있다. 따라서 좋은 Workflow는 `한 번 생성 → 즉시 채택`이 아니라 `여러 후보 → 비교 → 선택`이다.

## 2. Candidate Batch
```text
Intent A
Condition A
→ Candidate 01
→ Candidate 02
→ Candidate 03
→ Candidate 04
```

처음에는 4개 정도의 후보를 비교해도 충분하다.

## 3. 1차 Screening
첫 10~20초에서 명백한 실패만 제거한다.

- 깨짐/Artifact가 심한가?
- 장르 방향이 완전히 다른가?
- Vocal이 즉시 부자연스러운가?
- Intro가 Intent에서 크게 벗어나는가?

## 4. 2차 Listening Review
남은 후보를 전체 청취한다.

```text
Melody       /10
Harmony      /10
Rhythm       /10
Structure    /10
Arrangement  /10
Sound        /10
Vocal        /10
Intent Fit   /10
Originality  /10
```

숫자는 절대 점수가 아니라 동일한 Batch 안에서 비교하기 위한 도구다.

## 5. 선택 이유를 문장으로 남기기
`C가 제일 좋다`로 끝내지 않는다.

```text
Choice: Candidate C
Reason:
- hook motif가 가장 명확함
- pre→chorus energy lift가 큼
- verse density가 적절함
- vocal pronunciation이 가장 자연스러움
```

## 6. DohaStudio 연결
DohaMusic 관점에서는 Candidate를 단순 파일 목록이 아니라 Job/Artifact/선택 이력과 연결된 결과로 보는 것이 중요하다. 선택과 폐기 이유는 향후 학습 데이터나 Revision 의사결정에도 도움이 될 수 있다.

## 완료 체크
- [ ] 같은 Intent로 최소 4개 후보를 비교했다.
- [ ] 1차/2차 Screening을 나눴다.
- [ ] 최종 선택 이유를 음악 용어로 작성했다.
