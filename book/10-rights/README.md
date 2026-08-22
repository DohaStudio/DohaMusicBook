# Part 10 — Rights: 음악을 만들 권리와 사용할 권리를 구분한다

> 학습 목표: 저작권, 소유권, 사용 허가, Dataset/Model/Sample/Voice 권리를 분리해서 이해하고 DohaStudio의 권리 Gate가 왜 필요한지 배운다.

## 1. Copyright와 Ownership은 같은 말이 아니다

서비스 약관에서 결과물의 Ownership을 준다고 해도 해당 결과가 법률상 인간 저작물로 인정되는지와는 별개의 문제다. 반대로 저작권이 있다고 해도 사용한 Sample, Voice, Dataset, 외부 Model의 권리가 모두 자동으로 해결되는 것은 아니다.

따라서 항상 질문을 분리한다.

```text
누가 만들었는가?
누가 소유하는가?
누가 사용할 수 있는가?
어떤 범위에서 사용할 수 있는가?
상업 이용이 가능한가?
재배포가 가능한가?
학습에 사용할 수 있는가?
```

## 2. 저작인격권, 저작재산권, 저작인접권

### 저작인격권

창작자의 인격과 연결되는 권리 영역이다.

### 저작재산권

복제, 배포 등 경제적 이용과 관련된 권리 영역이다.

### 저작인접권

실연자, 음반제작자 등 저작물을 전달하고 제작하는 주체와 관련된 권리다.

세부 법적 적용은 국가와 상황에 따라 달라질 수 있으므로 실제 발매·계약 전에는 최신 법률과 전문가 검토가 필요하다.

## 3. AI 산출물

AI가 거의 전부 생성한 결과와 사람이 선택·편집·재구성한 결과는 인간 창작 기여 정도가 다르다. 단순 Prompt 입력만으로 충분한 저작자성이 인정된다고 가정하지 않는다.

공부용으로는 다음을 기록한다.

```text
Human contribution:
- lyrics edited by human
- section order changed
- melody notes manually revised
- instrument replaced
- mix/master performed
```

이 기록은 법적 결론을 자동으로 만들지는 않지만 창작 과정의 provenance를 남긴다.

## 4. AI 서비스 약관

Suno, Udio 등 외부 서비스의 플랜과 상업 이용 조건은 변경될 수 있다. 책에 고정된 사실처럼 적지 않고 다음 정보를 확인 날짜와 함께 기록한다.

```text
Service:
Plan:
Checked date:
Commercial use:
Ownership wording:
Training/data terms:
Official source:
```

## 5. Sample과 Loop

Royalty-free가 copyright-free를 뜻하지는 않는다. 구매한 Sample Pack도 재배포 제한, 단독 판매 금지, Content ID 제한 등이 있을 수 있다.

특히 원본 Sample 자체를 그대로 판매하거나 Dataset에 넣는 행위는 음악 작품에 사용하는 것과 다른 권리 문제다.

## 6. Virtual Instrument와 SoundFont

Plugin 프로그램의 라이선스와 그 안의 Sample content 라이선스가 다를 수 있다. SoundFont 역시 파일을 무료로 내려받을 수 있다는 사실만으로 상업 이용이 허용된다고 판단하지 않는다.

확인 항목:

- commercial music release
- redistribution
- sample extraction
- derivative sample pack
- AI training use
- attribution requirement

## 7. Voice와 Consent

본인 음성 또는 명시적으로 동의받은 음성만 사용한다. Voice Enrollment Sample과 실제 작품 Recording Take, Training Dataset은 서로 다르다.

```text
Consent to record ≠ consent to train
Consent to convert ≠ consent to publish
Consent to publish ≠ consent to redistribute model
```

## 8. Dataset Rights

Dataset을 내려받을 수 있다는 사실은 다음을 의미하지 않는다.

- 상업적 학습 허용
- 파생 Dataset 재배포 허용
- 원본 Audio 재배포 허용
- Model weight 공개 허용

DatasetVersion을 만들기 전에 권리 Evidence와 scope를 확인한다.

## 9. Model Rights

외부 Model에도 License가 있다. Code License와 Model Weight License가 다를 수 있으며 학습 Dataset의 권리 문제도 별도로 존재할 수 있다.

## 10. DohaStudio의 Rights 관점

DohaMusic은 사용자 요청과 Workspace 권리 흐름을 관리하고, Provider는 허용된 입력만 처리하도록 fail-closed하는 방향을 유지한다.

DohaAudio의 현재 Dataset Admission/Enrollment/Human Review Foundation은 실제 Dataset이 자동 승인됐다는 뜻이 아니다. 현재 실제 후보들은 권리나 증거가 부족하면 `BLOCKED` 상태를 유지한다.

DohaVocal에서도 Enrollment Sample, Recording Take, Training Dataset을 분리한다.

DohaMusic의 `RightsMetadata`, Asset lineage, Artifact provenance는 이런 구분을 시스템 안에서 잃지 않기 위한 기반이다.

## 11. Similarity

SimilarityReport는 자동 법률 판정이 아니다. 음악적으로 비슷한 부분을 검토하라는 신호로 사용한다.

높은 유사성이 발견되면:

1. 어떤 요소가 유사한지 확인
2. Melody/Chord/Rhythm/Sound 중 무엇인지 분리
3. 레퍼런스 의존도를 다시 평가
4. 필요한 경우 수정/재생성
5. 최종 Human Review

## 12. 발매 전 체크

```text
[ ] 내가 사용한 모든 Sample의 상업 이용 조건을 확인했다.
[ ] Virtual Instrument/SoundFont의 사용 조건을 확인했다.
[ ] 외부 AI 서비스 약관의 현재 조건을 확인했다.
[ ] Voice consent 범위를 확인했다.
[ ] Reference audio를 무단 재사용하지 않았다.
[ ] Human editing/creation history를 기록했다.
[ ] Dataset/Model 권리를 작품 사용권과 혼동하지 않았다.
[ ] 유사도 검토가 필요하면 별도로 확인했다.
```

## 13. 이 장을 끝냈다면

- Copyright, Ownership, License를 구분해서 질문할 수 있다.
- Sample/Plugin/SoundFont/Dataset/Model 권리를 별개로 확인할 수 있다.
- Voice consent scope를 구분할 수 있다.
- DohaStudio의 fail-closed Rights Gate가 필요한 이유를 설명할 수 있다.
