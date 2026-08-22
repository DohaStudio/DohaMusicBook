# Lesson 05 — Artifact Lineage, Similarity, 발매 전 Rights Check

## 학습 목표
- 최종 파일이 어떤 입력과 수정 과정을 거쳤는지 추적한다.
- Similarity 결과를 법률 판정이 아니라 검토 신호로 사용한다.
- 상업 발매 전에 권리 체크리스트를 통과한다.

## 1. Artifact Lineage
최종 WAV 하나만 남기지 않는다.

```text
Source Asset
→ Generation Job
→ Candidate Artifact
→ Human Edit
→ Mix Version
→ Master Version
→ Final Release Artifact
```

각 단계가 무엇을 참조했는지 기록하면 문제 발생 시 근거를 다시 확인할 수 있다.

## 2. Provenance
다음 정보를 가능한 한 남긴다.

```text
source asset/version
provider/model
prompt/condition
human edits
sample/soundfont used
voice source/consent
mix/master version
rights evidence
review/approval
```

## 3. Similarity
Similarity score 하나로 표절을 자동 판정하지 않는다. 높은 유사성이 나오면 어떤 요소가 유사한지 다시 듣는다.

- Melody
- Rhythm
- Harmony
- Lyrics
- Arrangement
- Timbre/Sound

그 후 수정·재생성·인간 검토 여부를 결정한다.

## 4. Release Check
```text
[ ] 모든 Sample/Loop의 상업 사용 범위를 확인했다.
[ ] SoundFont/Virtual Instrument 라이선스를 확인했다.
[ ] 외부 AI 서비스의 현재 약관을 확인했다.
[ ] 사람의 창작/편집 기여를 기록했다.
[ ] Voice consent 범위를 확인했다.
[ ] Dataset/Model 권리를 작품 이용권과 혼동하지 않았다.
[ ] Reference 원본 Audio를 무단 포함하지 않았다.
[ ] Similarity review가 필요한 부분을 확인했다.
[ ] Final artifact가 어떤 source/version에서 파생됐는지 추적 가능하다.
```

## 5. 공부 기록
```text
Release candidate:
Rights blockers:
Unknown items:
Similarity concerns:
Evidence complete?:
Human review:
Decision: RELEASE / HOLD / REVISE
```

## 6. DohaStudio 연결
DohaStudio에서 rights/similarity/approval은 부가 메모가 아니라 실제 소비를 막거나 허용하는 Gate로 다루는 것이 중요하다. 책에서도 `UNKNOWN`을 임의로 `ALLOWED`로 바꾸지 않는다.

## 완료 체크
- [ ] Final Artifact의 lineage를 그릴 수 있다.
- [ ] Similarity와 법률 판정을 구분한다.
- [ ] 발매 전 Rights Checklist를 사용할 수 있다.
