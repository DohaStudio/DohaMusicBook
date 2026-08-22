# Lesson 04 — Generation과 Result 읽기

## 학습 목표
- `/generation/[jobId]`에서 비동기 생성 Job의 상태를 이해한다.
- `/result/[jobId]`에서 결과를 음악적으로 평가한다.
- Pipeline 상태와 Audio Analysis 상태를 혼동하지 않는다.

## 1. Generation Progress
Generation 화면은 단순 Progress bar가 아니라 현재 Job lifecycle을 확인하는 위치다.

공부할 항목:

```text
Job id:
Started from:
Current state:
Cancel available:
Retry available:
Error category:
Next action:
```

새로고침 후에도 Job context가 복원되는지 확인한다.

## 2. Cancel과 Retry
Cancel은 결과가 마음에 들지 않는다는 뜻만이 아니라 실행 중인 Job을 중단하는 상태 전이다. Retry는 기존 실패와 새 시도를 구분해 기록한다.

```text
Attempt 1: failed
Reason:
Retry:
Attempt 2: completed
```

실패 기록도 학습 자료로 보존한다.

## 3. Result 화면
현재 Result에서는 생성 결과 metadata와 WAV, 품질 분석 정보를 확인할 수 있다. 분석 항목은 구현 상태에 따라 일부 없을 수 있다.

현재 문서상 다루는 예:
- duration
- sample rate
- mono/stereo
- dBFS
- clipping
- LUFS
- 예상 BPM과 confidence/error
- Hook 후보 정보가 있는 경우 해당 요약

분석값이 없는 구형 결과를 임의로 추정해 표시하지 않는다.

## 4. Pipeline 상태와 Analysis 상태
곡 생성이 완료됐다고 모든 분석이 완료된 것은 아니다.

```text
Generation: COMPLETED
Audio analysis: PENDING / completed / partial / failed / unsupported
```

이 둘을 별도 상태로 읽는다.

## 5. 음악적 청취 평가
숫자보다 먼저 곡을 듣는다.

```text
Song form:
Hook:
Melody:
Harmony:
Groove:
Arrangement:
Vocal:
Audio quality:
Intent fit:
Main defect:
```

그 다음 분석값이 귀로 들은 판단과 일치하는지 확인한다.

## 6. 결과를 바로 최종본으로 보지 않는다
결과는 다음 행동을 결정하는 Candidate다.

```text
Keep
Regenerate
Revise lyrics
Change generation settings
External DAW edit
Reject
```

결정 이유를 한 문장 이상 남긴다.

## 완료 체크
- [ ] Job lifecycle을 확인했다.
- [ ] Cancel/Retry 의미를 구분한다.
- [ ] Pipeline과 Analysis 상태를 구분한다.
- [ ] Result를 음악 용어로 평가했다.
- [ ] 다음 행동을 근거와 함께 선택했다.
