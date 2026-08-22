# Lesson 06 — DohaStudio Audio Production Workflow

## 학습 목표
- 음악 제작의 Audio 단계를 DohaStudio 책임 경계에 연결한다.
- CURRENT/FOUNDATION/TARGET을 구분한다.
- 원본과 처리 결과의 lineage를 학습 기록에 남긴다.

## 1. 학습용 전체 흐름

```text
Composition / Generated Audio
→ Editing
→ Balance
→ EQ / Dynamics
→ Space / Automation
→ Mix
→ Master
→ Evaluation
→ Final Export
```

각 단계에서 '무엇을 바꿨는가'와 '왜 바꿨는가'를 기록한다.

## 2. DohaMusic
DohaMusic은 Project/Composition/Artifact/Job과 최종 Workspace 흐름을 소유하는 Orchestrator다. Audio Provider 내부 모델 구현을 직접 소유하는 것으로 설명하지 않는다.

## 3. DohaAudio
DohaAudio는 음악·오디오 AI Provider 경계다. Music Generation, Stem/Analysis 등 장기 기능과 연결되지만 현재 실제 Production 기능인지 Foundation인지 최신 저장소를 확인한 뒤 책을 갱신한다.

## 4. DohaVocal
Vocal 전용 Correction/Enhancement/Singing 관련 책임은 DohaVocal 경계와 연결한다. 일반 Mix 처리와 보컬 모델 책임을 섞지 않는다.

## 5. CURRENT
현재 학습에서는 DohaMusic의 생성 결과와 Project playback을 청취하고 외부 DAW 후처리 결과와 비교할 수 있다. 완성형 Mixer/Automation/Plugin host가 이미 제품에 있다고 기록하지 않는다.

## 6. TARGET
장기적으로 다음 편집 정보가 필요할 수 있다.

```text
Track gain / pan
Effect chain
Plugin parameter
Automation event
Bus routing
Mix snapshot
Master settings
Export profile
Source lineage
```

이 목록은 학습용 목표 모델이며 현재 구현 계약이 아니다.

## 7. Part 09 최종 리뷰 양식

```text
Source artifact:
Composition/snapshot:
Editing changes:
Balance changes:
EQ decisions:
Compression decisions:
Space/automation:
Mix version:
Master version:
Reference used:
A/B result:
Remaining problem:
Final decision:
```

## 8. Product Gap 기록
음악을 공부하다 필요한 기능을 발견하면 곧바로 구현됐다고 가정하지 말고 별도 기록한다.

```text
Need: automate chorus width
Music reason: chorus lacks contrast
Current capability: TARGET
Possible owner: DohaMusic workspace/mixer
Provider dependency: none or TBD
```

## Part 완료 체크
- [ ] Editing→Mix→Master 흐름을 설명한다.
- [ ] 실제 Audio 후보를 분석했다.
- [ ] 외부 DAW 수정본과 원본을 A/B했다.
- [ ] DohaStudio 책임 경계를 구분했다.
- [ ] 필요한 미구현 기능을 Product Gap으로 남겼다.
