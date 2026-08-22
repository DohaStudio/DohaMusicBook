# Lesson 02 — Storage와 Project File 구조

## 목표
음악 작업 파일, Sample library, Export, AI Artifact를 구분하고 재현 가능한 폴더 구조를 만든다.

## 1. 한 폴더에 다 넣지 않는다

권장 예시:

```text
Music/
├─ Projects/
├─ Samples/
├─ SoundFonts/
├─ Presets/
├─ Exports/
└─ References/

DohaData/
DohaArtifacts/
DohaTemp/
```

실제 DohaStudio의 authority 경계와 충돌하지 않도록 Repository 문서를 우선한다.

## 2. Project 내부 구조

```text
MySong/
├─ project/
├─ audio-original/
├─ audio-edited/
├─ midi/
├─ stems/
├─ bounces/
├─ references/
├─ notes/
└─ deliverables/
```

DAW가 모든 파일을 자동으로 수집한다고 가정하지 않는다. 외부 Sample 경로가 끊기면 Project 재현이 어려워질 수 있다.

## 3. 원본과 파생본
원본 Audio를 덮어쓰지 않는다.

```text
vocal_take_01.wav
vocal_take_01_tuned.wav
vocal_take_01_tuned_comped.wav
```

파일명만으로 모든 lineage를 해결하려 하지 말고 Project note와 DohaStudio metadata를 함께 사용한다.

## 4. Sample/SoundFont 관리
다음 항목을 함께 기록한다.

```text
Name:
Version:
Source:
Installed path:
License file/path:
Commercial use checked:
Redistribution restriction:
```

## 5. Git 경계
Git에는 코드, 문서, 설정 예제, 작은 텍스트 manifest를 넣는다. 대용량 WAV, Dataset, Model weight, Checkpoint, 상용 Sample library는 기본적으로 넣지 않는다.

## 완료 기준
- [ ] Project와 Sample library가 분리되어 있다.
- [ ] 원본/편집본/Export를 구분한다.
- [ ] Sample/SoundFont 출처와 라이선스를 찾을 수 있다.
