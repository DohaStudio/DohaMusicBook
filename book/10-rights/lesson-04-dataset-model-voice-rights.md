# Lesson 04 — Dataset, Model, Voice 권리

## 학습 목표
- Dataset 사용권과 Model 사용권을 분리한다.
- Recording consent와 AI training consent를 구분한다.
- 권리 Evidence가 부족하면 사용하지 않는 fail-closed 사고방식을 익힌다.

## 1. Dataset을 받을 수 있다는 것의 한계
다운로드 가능하다는 사실만으로 다음을 의미하지 않는다.

```text
commercial training allowed
redistribution allowed
derivative dataset allowed
raw audio redistribution allowed
model weight publication allowed
```

Dataset마다 허용 scope를 확인한다.

## 2. Model License
Code license, model weight license, hosted API terms가 서로 다를 수 있다. 공개 저장소에서 코드를 볼 수 있다고 Model weight를 상업적으로 재배포할 수 있는 것은 아니다.

## 3. Voice Rights
음성은 특별히 조심해서 다룬다.

```text
consent to record ≠ consent to train
consent to train ≠ consent to clone/convert
consent to generate ≠ consent to publish
consent to publish ≠ consent to redistribute model
```

## 4. Voice Asset 구분
- Enrollment Sample
- Recording Take
- Training Dataset
- Generated/Converted Vocal
- Final Published Vocal

각 자산의 목적과 consent scope를 따로 기록한다.

## 5. Evidence
권리 판단에는 근거가 필요하다.

```text
Source:
License/consent document:
Scope:
Territory:
Commercial use:
Training:
Publication:
Revocation/expiry if any:
Checked date:
Reviewer:
Decision: ALLOWED / BLOCKED / UNKNOWN
```

## 6. DohaStudio 연결
DohaAudio/DohaVocal에서 Dataset Admission이나 Voice Enrollment가 존재하더라도 '등록됨'과 '학습 가능'은 다르다. Evidence와 approval을 통과하지 못하면 training/production 소비를 차단하는 방향이 맞다.

## 완료 체크
- [ ] Dataset와 Model license를 분리한다.
- [ ] Voice consent 범위를 구분한다.
- [ ] Evidence가 없을 때 UNKNOWN/BLOCKED로 남길 수 있다.
