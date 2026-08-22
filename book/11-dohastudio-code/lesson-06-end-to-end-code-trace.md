# Lesson 06 — End-to-End Code Trace: 음악 요청 하나를 네 저장소로 추적한다

## 학습 목표
- 음악 요청 하나가 DohaMusic과 각 Provider를 어떻게 오가는지 추적한다.
- 음악 개념, API/Job, Artifact lineage를 한 장의 기록으로 연결한다.
- 구현 Gap을 음악 요구사항과 분리해 기록한다.

## 1. 예제 요청

```text
목표: 감정적인 K-pop Chorus 후보를 만들고,
가사를 다듬고, 보컬 후보를 만들고,
최종 결과를 Project에서 비교한다.
```

## 2. 예상 orchestration

```text
User
→ DohaMusic: Music Intent / Project context
→ DohaLM: Lyrics/Revision language task
→ DohaMusic: validated result + user choice
→ DohaAudio: Music generation request
→ DohaMusic: candidate Artifact ingestion + comparison
→ DohaVocal: approved vocal operation if needed
→ DohaMusic: derived Vocal Artifact + user choice
→ Composition / Snapshot / Export
```

Provider끼리 직접 연결하지 않는다.

## 3. Trace Template
각 단계마다 다음을 기록한다.

```text
Step:
Repository:
Musical purpose:
Input identity:
API/Job/Service:
Provider/model status:
Output identity:
Rights/eligibility gate:
Human decision:
Next step:
Evidence path:
```

## 4. CURRENT/FOUNDATION/TARGET 표시
예를 들어 Music Generation이 목표 capability라고 해도 실제 DohaAudio production model이 미구현이라면 `TARGET` 또는 해당 Foundation 상태로 적는다. DohaMusic에 Mock/legacy/local adapter 흐름이 존재한다고 해서 DohaAudio production transport가 완료된 것으로 바꾸지 않는다.

## 5. 음악 품질과 소프트웨어 상태를 분리한다

```text
Music problem: Chorus hook is weak
Software observation: no note-level MIDI editing yet
Product gap: Piano Roll / section melody editing
Temporary study method: external DAW + listening notes
```

이 세 층을 한 문장으로 섞지 않는다.

## 6. 코드 읽기 순서
실제 기능을 추적할 때 추천 순서는 다음과 같다.

```text
README / authority docs
→ API/router entry
→ service/orchestrator
→ domain DTO/entity
→ repository/persistence
→ provider client/transport
→ result ingestion
→ frontend consumer
→ tests
```

테스트는 구현 의도를 확인하는 데 유용하지만 테스트 fixture가 실제 운영 capability를 증명한다고 보지 않는다.

## 7. Part 11 최종 과제
하나의 실제 DohaMusic workflow를 고르고 다음 문서를 만든다.

```text
study/code-trace/
01-feature-definition.md
02-repository-ownership.md
03-request-flow.md
04-domain-identity-map.md
05-provider-status.md
06-artifact-lineage.md
07-music-quality-review.md
08-product-gaps.md
```

## Part 완료 체크
- [ ] 음악 요청 하나를 네 저장소 책임으로 분리했다.
- [ ] Job과 Artifact identity를 따라갔다.
- [ ] Rights/Human decision 지점을 표시했다.
- [ ] CURRENT/FOUNDATION/TARGET을 붙였다.
- [ ] 음악 문제와 제품 Gap을 분리해 기록했다.
