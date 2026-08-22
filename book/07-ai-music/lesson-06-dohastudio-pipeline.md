# Lesson 06 — DohaStudio AI Music Pipeline

## 학습 목표
- DohaMusic, DohaLM, DohaAudio, DohaVocal의 역할을 구분한다.
- AI 음악 생성 흐름을 Job/Artifact/Composition 관점에서 이해한다.
- 현재 구현과 목표 기능을 섞지 않는다.

## 1. 역할 분리
### DohaMusic
사용자 Intent, Project, Composition, Job, Artifact, 선택 이력과 orchestration을 담당한다.

### DohaLM
가사, 언어 기반 Intent, Prompt, Revision 같은 언어 작업을 지원하는 Provider 방향이다.

### DohaAudio
Music Generation, Audio/Reference Analysis, Stem 등의 Provider 방향이다.

### DohaVocal
Singing Voice, Voice Conversion, Vocal Correction Provider 방향이다.

Provider끼리 직접 연결하기보다 DohaMusic이 Workflow를 조정하는 경계를 유지한다.

## 2. 학습용 전체 흐름
```text
Music Intent
→ Reference Analysis
→ Prompt / Structured Condition
→ Generation Job
→ Candidate Artifacts
→ Human Listening Review
→ Select / Reject
→ Revision Plan
→ Regenerate / Edit
→ Composition update
→ Audio/Vocal processing
→ Evaluation / Similarity / Rights review
→ Final Artifact
```

이 흐름은 학습 모델이며 각 단계의 실제 API/Entity는 최신 코드와 ADR을 우선한다.

## 3. CURRENT / FOUNDATION / TARGET
```text
CURRENT
실제로 실행·검증 가능한 기능

FOUNDATION
도메인·계약·Mock/Fake 등 기반은 있으나 Production 기능은 아님

TARGET
아직 구현되지 않은 목표 기능
```

책을 업데이트할 때 이 셋을 반드시 다시 확인한다.

## 4. 현재 프로그램으로 실습
동일한 목표로 생성한 결과를 `/history`, `/result/[jobId]`, Project/Composition 화면에서 비교한다.

```text
Intent:
Job IDs:
Candidate Artifacts:
Selected:
Rejected:
Selection reason:
Revision plan:
What the current UI could not edit:
Desired future capability:
```

## 5. Product Gap을 음악 용어로 기록하기
`기능이 불편하다`로 끝내지 않는다.

예:
```text
Problem: Chorus melody가 약한데 전체 곡만 다시 생성해야 함
Musical need: preserve Verse, regenerate Chorus only
Product gap: section-range regeneration + before/after audition
```

이 방식으로 음악 공부가 제품 요구사항으로 연결된다.

## 6. Part 07 최종 과제
하나의 Music Intent로 다음을 모두 수행한다.

1. Reference Analysis
2. Prompt와 Condition 작성
3. Candidate 여러 개 비교
4. 하나 선택
5. Revision Plan 작성
6. Similarity/Originality 메모
7. DohaStudio에서 가능한 작업과 불가능한 작업 분리
8. Product Gap 기록

## 완료 체크
- [ ] 네 저장소의 역할을 설명한다.
- [ ] Candidate가 Job/Artifact/Composition과 어떻게 연결되는지 이해한다.
- [ ] CURRENT/FOUNDATION/TARGET을 구분한다.
- [ ] 음악적 문제를 제품 요구사항으로 변환했다.
