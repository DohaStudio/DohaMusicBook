# Lesson 04 — DohaAudio: Music Generation과 Audio Analysis 경계 읽기

## 학습 목표
- DohaAudio의 계획된 음악 기능과 현재 Foundation 구현을 구분한다.
- MusicGenerationJob, StemSeparationJob, AudioAnalysisJob을 독립 lifecycle로 본다.
- Dataset/Training governance와 실제 모델 실행을 혼동하지 않는다.

## 1. DohaAudio의 책임
현재 develop README 기준 목표 책임은 다음과 같다.

- Music / Instrumental Generation
- Stem Separation
- BPM / Key / Music Structure / Audio Quality Analysis
- Dataset Pipeline / Training / Fine-tuning / Evaluation
- Model Manifest / Runtime

하지만 실제 Music Generation/Stem 모델은 아직 계획 영역이다.

## 2. CURRENT Foundation
현재 구현된 핵심은 Runtime/Provider API, Job persistence/worker boundary, Dataset Admission/Enrollment/Archive inspection, rights gate, semantic/human review governance, Training preflight/dry-run 등이다.

즉 다음은 같은 뜻이 아니다.

```text
Provider Runtime exists
≠ real music model connected
Training dry-run passes
≠ real training executed
Dataset candidate discovered
≠ approved DatasetVersion exists
```

## 3. Job은 독립적이다
MusicGenerationJob, StemSeparationJob, AudioAnalysisJob은 각각 독립 Job이다. 하나의 성공이 다음 Job을 자동 실행하지 않는다. Product workflow가 필요할 때 DohaMusic이 입력 AssetVersion/Artifact와 사용자 요청을 기준으로 별도 Job을 생성한다.

## 4. 음악 공부와 연결
Part 02~09에서 배운 음악 정보를 Provider 기능 요구로 연결한다.

```text
Rhythm   → BPM / groove-related analysis possibilities
Harmony  → Key / tonal analysis
Song Form → structure analysis
Sound    → audio quality/features
Arrangement → Stem separation
```

자동 분석이 음악적 진실 그 자체라고 가정하지 않고 사람이 청취 결과와 비교한다.

## 5. Dataset/Training 코드 읽기 질문

```text
Dataset candidate는 어디서 발견되는가?
Rights evidence는 어떻게 결합되는가?
Enrollment 조건은 무엇인가?
DatasetVersion은 언제 생성 가능한가?
Training preflight와 실제 training 시작 경계는 어디인가?
Model Manifest는 어떤 identity를 보존하는가?
```

## 6. 실습
Audio 기능 하나를 골라 현재 상태를 작성한다.

```text
Capability: Stem Separation
Music purpose:
Job contract:
CURRENT foundation:
Missing production adapter/model:
Expected result type:
DohaMusic consumer step:
```

## 완료 체크
- [ ] 목표 음악 기능과 현재 Foundation을 구분한다.
- [ ] 세 Job을 독립적으로 설명한다.
- [ ] Dataset admission과 Training 승인을 구분한다.
- [ ] 음악 이론이 Audio analysis requirement로 어떻게 연결되는지 설명한다.
