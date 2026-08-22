# Lesson 05 — DohaVocal: 보컬 처리와 권리 경계를 코드로 읽는다

## 학습 목표
- DohaVocal의 planned capability와 현재 Fake Runtime foundation을 구분한다.
- Voice Enrollment Sample, Recording Take, Training Dataset, AI/Processed Vocal을 분리한다.
- 원본 불변과 파생 Asset lineage를 이해한다.

## 1. DohaVocal의 책임
현재 develop 기준 목표 책임은 다음과 같다.

- AI Singing Voice Generation
- Voice Conversion
- Pitch / Timing Correction
- Beat Alignment / Auto-Tune
- Noise Reduction / Breath / Silence Cleanup
- Vocal Enhancement / Analysis
- Vocal Dataset / Training / Evaluation

현재는 Provider API, Job contract, lifecycle, metadata-only Fake Runtime foundation이 중심이며 실제 Production 모델은 미구현이다.

## 2. 서로 다른 엔티티

```text
Voice Enrollment Sample
Recording Take
Vocal Training Dataset
AI Generated Vocal
Voice Converted Vocal
Processed Vocal Asset
Final Selected Vocal
```

이들을 하나의 `voice file`로 뭉뚱그리지 않는다. 특히 Enrollment Sample과 Recording Take는 자동으로 Training Dataset이 되지 않는다.

## 3. Job 독립성
VocalGenerationJob, VoiceConversionJob, PitchCorrectionJob, TimingCorrectionJob 등은 독립 lifecycle이다. 한 Job 성공이 다음 Job 실행을 의미하지 않는다.

## 4. 원본을 덮어쓰지 않는다
보컬 처리는 원본을 변경하는 대신 새 derived Artifact/AssetVersion 후보를 만든다. 공부할 때 다음 lineage를 따라간다.

```text
source_asset_version_id
parent_asset_version_id
processing_chain_id
model_manifest_id
settings snapshot
checksum / scope
```

최종 Workspace 선택은 DohaMusic이 수행한다.

## 5. 음악 공부와 연결
Part 05에서 배운 Vocal Range, Register, Timing, Harmony, Ad-lib을 제품 기능 요구와 연결한다.

예를 들어 Pitch Correction은 `음정을 전부 완벽하게 맞추기`가 목표가 아니라 원래 표현과 장르를 고려한 교정이어야 한다. Timing Correction도 Groove를 죽이지 않아야 한다.

## 6. 코드 읽기 질문

```text
어떤 Job type인가?
입력은 어떤 AssetVersion/Artifact인가?
Consent/rights가 어디서 검증되는가?
Provider는 payload를 실제로 처리하는가, metadata만 반환하는가?
새 결과는 어떤 lineage를 남기는가?
사용자 최종 선택은 어디서 이루어지는가?
```

## 7. 실습
하나의 Lead Vocal 처리 사례를 가정한다.

```text
Source take:
Problem: timing late in pre-chorus
Requested operation:
Provider job:
Derived result:
Human listening result:
Keep/reject:
Final selected version:
Rights/consent evidence:
```

## 완료 체크
- [ ] 보컬 엔티티들을 구분한다.
- [ ] Fake Runtime과 실제 Production 모델을 구분한다.
- [ ] 원본 불변과 derived lineage를 설명한다.
- [ ] Vocal correction을 음악적 판단과 연결한다.
