# Part 10 — Rights: 음악을 만들 권리와 사용할 권리를 구분한다

> 학습 목표: 저작권, 소유권, 라이선스, Sample/SoundFont/Plugin, Dataset/Model, Voice, AI 서비스 약관을 서로 다른 권리 문제로 구분하고 발매 전까지 증거와 lineage를 남긴다.

## 공부 순서

1. [Lesson 01 — Copyright, Ownership, License](lesson-01-copyright-ownership-license.md)
2. [Lesson 02 — AI 산출물과 서비스 약관](lesson-02-ai-output-terms.md)
3. [Lesson 03 — Sample, Plugin, Virtual Instrument, SoundFont](lesson-03-samples-plugins-soundfonts.md)
4. [Lesson 04 — Dataset, Model, Voice Rights](lesson-04-dataset-model-voice-rights.md)
5. [Lesson 05 — Artifact Lineage, Similarity, Release Check](lesson-05-lineage-similarity-release-check.md)

## 이 Part의 전체 흐름

```text
Asset / Dataset / Voice / Model / Service
→ License & Consent Evidence
→ Allowed Scope
→ Generation / Editing
→ Artifact Lineage
→ Similarity / Human Review
→ Release Decision
```

핵심은 `파일을 가지고 있음`, `무료임`, `구매함`, `AI가 생성함` 같은 사실만으로 사용 권한을 추론하지 않는 것이다.

## 핵심 구분

```text
Copyright ≠ Ownership ≠ License
Commercial use ≠ Redistribution
Music release use ≠ AI training use
Recording consent ≠ Training consent
Similarity score ≠ Legal infringement decision
Registered/ingested asset ≠ Approved-for-use asset
```

## 최종 학습 기록

```text
study/rights/
├─ 01-copyright-ownership-license.md
├─ 02-ai-service-terms-log.md
├─ 03-sample-soundfont-license-log.md
├─ 04-dataset-model-rights.md
├─ 05-voice-consent-log.md
├─ 06-human-contribution-log.md
├─ 07-artifact-lineage-review.md
├─ 08-release-rights-checklist.md
└─ 09-rights-product-gap-notes.md
```

## DohaStudio 연결 원칙

### Rights Evidence
권리 판단은 근거와 확인 날짜를 남긴다. 정보가 부족하면 `UNKNOWN/BLOCKED`로 둔다.

### Fail-closed
학습·생성·배포가 가능한지 확실하지 않을 때 자동으로 허용하지 않는다.

### Lineage
최종 음악이 어떤 AssetVersion, Dataset, Provider, Model, Voice, Human Edit, Mix/Master를 거쳤는지 추적 가능해야 한다.

### CURRENT / FOUNDATION / TARGET
Rights Gate, Dataset Admission, Voice Enrollment, Similarity 등은 각 원본 저장소의 최신 실제 구현 상태를 확인한 뒤 표시한다. Book의 개념 모델을 구현 완료 상태로 오해하지 않는다.

## Part 10 완료 기준

- Copyright/Ownership/License를 구분한다.
- AI 서비스의 상업 이용 약관을 확인 날짜와 함께 기록한다.
- Sample/SoundFont/Plugin의 작품 사용권과 재배포/학습권을 분리한다.
- Dataset/Model/Voice 권리를 별도로 검토한다.
- 인간의 창작/편집 기여를 기록한다.
- Final Artifact lineage를 추적한다.
- Similarity를 검토 신호로 사용한다.
- 발매 전 Rights Checklist를 통과하지 못하면 RELEASE하지 않는다.
