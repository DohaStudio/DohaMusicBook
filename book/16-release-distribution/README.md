# Part 16 — Release & Distribution: 완성곡을 실제 발매 단위로 준비한다

> 목표: 음악을 만드는 단계와 배포하는 단계를 구분하고, 발매 전 권리·메타데이터·파일·수익 흐름을 이해한다.

## 선행 학습
Part 10 Rights를 먼저 완료한다. Part 10은 `무엇을 사용할 수 있는가`, `어떤 증거가 필요한가`, `어떤 경우 BLOCKED인가`를 판단하는 권리·증거 체계다. Part 16은 그 판단 결과를 실제 발매 직전 Release Gate에 적용한다.

```text
Part 10 Rights
Rights evidence / license / consent / lineage / similarity review
        ↓
Part 16 Release & Distribution
credits / metadata / master / artwork / delivery / distributor / reporting
```

Part 16에서 권리 문제를 새로 판정하지 않는다. Part 10의 evidence와 unresolved issue를 소비해 `release ready / blocked`를 결정한다.

## 공부 순서
1. [Lesson 01 — Music Rights와 Credits](lesson-01-rights-credits.md)
2. [Lesson 02 — Distribution과 Revenue Flow](lesson-02-distribution-revenue.md)
3. [Lesson 03 — Release Package와 Delivery](lesson-03-release-package.md)

## 전체 흐름
```text
Final Master
→ Part 10 Rights Evidence 확인
→ Rights / Credits Check
→ Metadata
→ Artwork / Release Assets
→ Distributor
→ DSP / Store Delivery
→ Release
→ Reporting / Revenue
```

## 원칙
- Distributor가 저작권 자체를 만들어 주는 것은 아니다.
- Master/Composition 권리와 서비스 계약을 구분한다.
- Part 10에서 `UNKNOWN/BLOCKED`인 권리 항목은 Part 16에서 임의로 허용하지 않는다.
- 수익 배분은 플랫폼, 유통사, 계약 구조에 따라 달라질 수 있으므로 고정 비율을 교재의 영구 사실처럼 쓰지 않는다.
- 실제 발매 시점에는 각 서비스의 최신 공식 약관/요건을 다시 확인한다.

## DohaStudio 연결
장기적으로 Final Artifact의 release readiness에는 Part 10에서 축적한 rights evidence와 lineage, 그리고 credits, metadata, master version, artwork reference, delivery history 등이 연결될 수 있다. 현재 구현 상태와 목표 schema를 구분한다.
