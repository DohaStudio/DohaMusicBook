# Lesson 01 — DohaStudio Repository Map: 음악 기능의 책임을 찾는다

## 학습 목표
- DohaMusic, DohaLM, DohaAudio, DohaVocal의 책임을 구분한다.
- 음악 기능을 어느 저장소에서 찾아야 하는지 판단한다.
- Provider 간 직접 호출 금지 원칙을 이해한다.

## 1. 전체 구조

```text
User
  ↓
DohaMusic
  ├─→ DohaLM
  ├─→ DohaAudio
  └─→ DohaVocal
        ↓
DohaMusic가 결과를 회수하고 Project/Composition/Artifact에 연결
```

DohaMusic은 AI-native DAW / Workspace / Orchestrator다. 사용자 요청, Project, Job, AssetVersion, Artifact, CompositionSnapshot, 최종 선택과 Export 흐름을 소유한다.

DohaLM은 LLM 모델·추론 Provider다. 음악 앱 UI나 Audio/MIDI 생성을 소유하지 않는다.

DohaAudio는 Music Generation, Stem Separation, Audio/Music Analysis, Dataset/Training/Evaluation 계열 Provider 경계다.

DohaVocal은 Singing Voice, Voice Conversion, Vocal Correction 계열 Provider 경계다.

## 2. Provider끼리 직접 호출하지 않는다

```text
Wrong: DohaAudio → DohaVocal
Wrong: DohaLM → DohaAudio
Right: Provider → DohaMusic → another Provider if product workflow requires it
```

이 규칙 덕분에 사용자 권리, Project 상태, Job history, Artifact lineage, 사용자 선택을 하나의 제품 authority에서 관리할 수 있다.

## 3. 음악 개념에서 저장소 찾기

| 음악 개념/기능 | 먼저 볼 저장소 |
|---|---|
| Project, Composition, Track, Clip, Timeline | DohaMusic |
| Lyrics prompt, text revision, intent language | DohaLM |
| Music Generation, Stem, BPM/Key/Structure 분석 | DohaAudio |
| Singing/VC/Pitch/Timing correction | DohaVocal |
| 최종 Mix/Export와 사용자 선택 | DohaMusic |

## 4. 코드 읽기 전에 문서 Authority 확인
각 저장소에서 README → roadmap/current status → architecture → ADR 순으로 읽는다. 문서가 목표와 현재 구현을 섞어 쓰는지 확인하고 `CURRENT / FOUNDATION / TARGET` 표기를 먼저 붙인다.

## 5. 실습
음악 기능 다섯 개를 골라 owner를 적는다.

```text
Feature:
Musical purpose:
Repository owner:
Input:
Output:
Current status:
Evidence document/code path:
```

## 완료 체크
- [ ] 네 저장소의 책임을 설명한다.
- [ ] Provider direct-call 금지 이유를 설명한다.
- [ ] 음악 기능을 올바른 저장소에 매핑할 수 있다.
