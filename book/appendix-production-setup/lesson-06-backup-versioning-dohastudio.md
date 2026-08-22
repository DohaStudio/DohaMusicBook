# Lesson 06 — Backup, Versioning, DohaStudio 연동

## 목표
음악 파일과 코드 저장소를 같은 방식으로 관리하지 않고, 작업 결과를 다시 재현할 수 있는 Version/Backup 흐름을 만든다.

## 1. Git과 Binary Asset
Git은 코드·문서·설정에 적합하지만 대용량 WAV, Sample library, Dataset, Model weight, Checkpoint를 일반 소스처럼 관리하는 도구가 아니다.

DohaStudio에서는 각 저장소의 외부 데이터/Artifact 경계를 우선한다.

## 2. Version 전략

```text
song-v0-idea
song-v1-arrangement
song-v2-vocal-edit
song-v3-mix
song-v4-master
```

파일명만이 아니라 변경 이유도 함께 남긴다.

```text
Version:
Parent:
Changed:
Why:
A/B result:
Approved:
```

## 3. Backup
최소한 작업 PC 하나에만 유일한 원본이 존재하지 않게 한다. Backup 주기, 외부 저장장치/별도 위치, 복구 테스트 여부를 기록한다.

## 4. DohaStudio Artifact와 외부 DAW Project
DohaMusic의 AssetVersion/Artifact/CompositionSnapshot과 외부 DAW Project 파일은 같은 엔티티가 아니다.

예:

```text
DohaMusic generated artifact
→ external DAW import
→ manual edit/mix
→ rendered WAV
→ trusted ingestion / new AssetVersion candidate
→ Composition selection
```

실제 ingestion 절차는 최신 DohaMusic 계약을 따른다.

## 5. Reproducibility Note
완성곡마다 다음을 남긴다.

```text
DohaMusic Project:
Source Artifact:
External DAW:
DAW version:
Plugins/versions:
Sample/SoundFont sources:
Project file location:
Final render:
Rights record:
Backup locations:
```

## 6. 복구 Drill
가끔은 새 폴더나 다른 환경에서 Project를 열어 missing file/plugin이 있는지 확인한다. Backup은 실제 복구가 가능해야 의미가 있다.

## 완료 기준
- [ ] Git과 Audio asset 관리 경계를 설명한다.
- [ ] 중요한 곡에 Version history가 있다.
- [ ] Backup 위치가 둘 이상이거나 별도 복구 경로가 있다.
- [ ] DohaMusic Artifact와 외부 DAW Project 관계를 기록한다.
