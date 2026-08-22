# Part 11 — DohaStudio 코드로 음악 이해하기

> 기준 확인: 2026-08-22, 각 저장소 `develop` README. 구현 상태는 계속 변하므로 Chapter 작성 시 원본 저장소를 다시 확인한다.

## 공부 순서

1. [Lesson 01 — Repository Map](lesson-01-repository-map.md)
2. [Lesson 02 — DohaMusic Domain Flow](lesson-02-dohamusic-domain-flow.md)
3. [Lesson 03 — DohaLM Provider](lesson-03-dohalm-provider.md)
4. [Lesson 04 — DohaAudio Provider](lesson-04-dohaaudio-provider.md)
5. [Lesson 05 — DohaVocal Provider](lesson-05-dohavocal-provider.md)
6. [Lesson 06 — End-to-End Code Trace](lesson-06-end-to-end-code-trace.md)

## 전체 관계

```text
User
  ↓
DohaMusic — AI-native DAW / Workspace / Orchestrator
  ├─→ DohaLM    — LLM model & inference provider
  ├─→ DohaAudio — music/audio AI provider
  └─→ DohaVocal — vocal AI provider
        ↓
AssetVersion / Artifact / CompositionSnapshot / 사용자 선택
```

핵심 규칙은 Provider끼리 직접 호출하지 않는 것이다. 사용자 요청과 Project 상태, Job, Artifact lineage, 최종 선택은 DohaMusic이 관리한다.

## 현재 코드 상태를 읽는 기준

### DohaMusic
현재 `develop` 기준 Composition Read Workspace, Timeline Playback, Master/Mix Waveform·Playhead Foundation, Workspace/Project/AssetVersion/Artifact/CompositionSnapshot/Job 기반이 있다. WorkingComposition Track/Clip schema/API와 완성형 편집 UI, MIDI/Piano Roll, SoundFont integration, 실제 DohaLM·DohaAudio production transport 등은 CURRENT로 쓰지 않는다.

### DohaLM
재사용 가능한 LLM 모델·추론 Provider다. REST/Streaming MVP와 Runtime 코드 이력이 있어도 승인된 model artifact 및 DohaMusic production integration 상태를 별도로 확인한다. Audio/MIDI 생성은 책임 범위가 아니다.

### DohaAudio
Runtime/Provider API, Job lifecycle/persistence, Dataset admission/governance, training preflight/dry-run foundation이 존재한다. 실제 Music Generation·Stem·Analysis production model과 실제 Training은 완료 상태로 취급하지 않는다.

### DohaVocal
Provider API, Vocal Job 계약, lifecycle, metadata-only Fake Runtime foundation이 존재한다. 실제 Singing Voice, Voice Conversion, Vocal Correction production model은 미구현 상태다.

## 코드 공부 루프

```text
음악 개념 이해
→ 저장소 owner 찾기
→ authority 문서 확인
→ API/router entry 찾기
→ service/orchestrator
→ domain identity
→ persistence
→ provider transport/runtime
→ result ingestion
→ frontend consumer
→ tests
→ 음악 품질 평가
→ product gap 기록
```

코드를 읽는 목적은 구현 세부를 외우는 것이 아니라 `음악 개념이 어떤 identity와 lifecycle로 시스템에 보존되는가`를 이해하는 것이다.

## 상태 표기 규칙

- `CURRENT` — 현재 기준 브랜치에서 실제 확인한 기능
- `FOUNDATION` — 계약/도메인/runtime 골격은 있으나 실제 모델·payload·UI가 완성되지 않은 기능
- `TARGET` — 제품 방향에 있으나 아직 사용할 수 없는 기능
- `STUDY` — 책에서 배우지만 아직 DohaStudio 구현과 직접 연결되지 않은 음악 지식

## 최종 학습 기록

```text
study/code-trace/
├─ 01-feature-definition.md
├─ 02-repository-ownership.md
├─ 03-request-flow.md
├─ 04-domain-identity-map.md
├─ 05-provider-status.md
├─ 06-artifact-lineage.md
├─ 07-music-quality-review.md
└─ 08-product-gaps.md
```

## Part 11 완료 기준

- 네 저장소의 책임과 금지 경계를 설명한다.
- DohaMusic의 Project/Job/Artifact/Composition 흐름을 추적한다.
- DohaLM의 언어 작업과 Audio/MIDI 생성을 구분한다.
- DohaAudio의 Foundation과 실제 music model을 구분한다.
- DohaVocal의 보컬 엔티티와 derived lineage를 구분한다.
- 실제 음악 요청 하나를 end-to-end로 코드/도메인/권리/사용자 선택까지 추적한다.
