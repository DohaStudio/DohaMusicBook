# Part 07 — AI Music: 생성보다 설계와 선별이 중요하다

> 학습 목표: AI 음악을 `프롬프트 한 줄 → 완성곡`으로 보지 않고 Reference Analysis, Condition Design, Candidate Generation, Human Review, Revision, Evaluation의 반복 과정으로 이해한다.

## 공부 순서

1. [Lesson 01 — Reference Analysis](lesson-01-reference-analysis.md)
2. [Lesson 02 — Prompt와 Structured Condition](lesson-02-prompt-condition.md)
3. [Lesson 03 — Candidate Generation](lesson-03-candidate-generation.md)
4. [Lesson 04 — Variation, Regeneration, Partial Revision](lesson-04-regeneration-revision.md)
5. [Lesson 05 — Evaluation, Similarity, Originality](lesson-05-evaluation-originality.md)
6. [Lesson 06 — DohaStudio AI Music Pipeline](lesson-06-dohastudio-pipeline.md)

## 이 Part의 핵심 흐름

```text
Music Intent
→ Reference Analysis
→ Prompt / Structured Condition
→ Candidate Generation
→ Screening / Listening Review
→ Select / Reject
→ Variation / Partial Revision
→ Evaluation / Similarity / Originality Review
→ Human Edit
→ Finalize
```

핵심은 생성 횟수가 아니라 **왜 이 후보를 선택했고 무엇을 수정할지 설명할 수 있는 판단 능력**이다.

## AI 음악 공부 원칙

- 특정 아티스트나 곡을 복제하는 대신 음악적 속성으로 분해한다.
- 한 번의 결과를 완성본으로 보지 않는다.
- 후보를 동일한 기준으로 비교한다.
- 좋은 부분과 약한 부분을 Section 단위로 구분한다.
- Similarity 점수를 법적 결론으로 오해하지 않는다.
- AI 산출물에 사람이 어떤 선택·수정·편집을 했는지 기록한다.

## 직접 만들 최종 결과

Part 07을 마칠 때 다음 기록을 만들 수 있다.

```text
study/ai-music/
├─ 01-reference-analysis.md
├─ 02-prompt-condition.md
├─ 03-candidate-batch-review.md
├─ 04-revision-plan.md
├─ 05-similarity-originality-review.md
├─ 06-dohastudio-pipeline-trace.md
├─ 07-final-selection-record.md
└─ 08-product-gap-notes.md
```

## DohaStudio 연결

### DohaMusic
사용자 Intent, Project, Composition, Job, Artifact, 선택 이력, orchestration을 담당하는 중심 애플리케이션이다.

### DohaLM
가사와 언어 기반 Intent/Prompt/Revision 지원 Provider 방향이다.

### DohaAudio
Music Generation, Audio/Reference Analysis, Stem 등 오디오·음악 AI Provider 방향이다.

### DohaVocal
Singing Voice, Voice Conversion, Vocal Correction Provider 방향이다.

Provider끼리 직접 호출하는 구조로 설명하지 않고 DohaMusic이 Workflow를 조정하는 경계를 유지한다.

## CURRENT / FOUNDATION / TARGET

이 Part는 기술 변화가 가장 빠르므로 구현 상태를 반드시 구분한다.

```text
CURRENT     실제 실행·검증 가능한 기능
FOUNDATION  계약·도메인·Mock/Fake 등 기반 존재
TARGET      미구현 또는 장기 목표
```

현재 구현 상태는 책을 읽는 시점의 최신 DohaStudio 저장소와 ADR을 다시 확인한다.

## Part 07 완료 기준

- 레퍼런스를 음악 속성으로 분해한다.
- Prompt와 Structured Condition을 구분한다.
- 같은 Intent에서 여러 Candidate를 평가한다.
- 전체 재생성과 부분 수정의 차이를 설명한다.
- Melody/Harmony/Rhythm/Structure/Sound/Originality 기준으로 후보를 평가한다.
- Similarity 결과의 한계를 이해한다.
- DohaStudio 네 저장소의 역할을 설명한다.
- 음악적 문제를 Product Gap으로 변환해 기록한다.
