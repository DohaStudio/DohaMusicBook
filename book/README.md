# DohaMusicBook — Study Map

이 저장소는 **음악을 공부하면서 동시에 DohaStudio의 실제 코드와 프로그램 사용법을 연결하는 개인 학습 교재**다.

각 Part는 항상 세 층으로 작성한다.

1. **음악 공부** — 실제 작곡·편곡·프로덕션에 필요한 개념
2. **코드로 이해하기** — 그 개념이 DohaMusic/DohaLM/DohaAudio/DohaVocal의 어떤 데이터·도메인·Job·Artifact와 연결되는지
3. **내 프로그램으로 해보기** — 현재 구현된 DohaStudio 기능을 직접 실행하고 곡을 만들어 보는 사용법

> `CURRENT`, `FOUNDATION`, `TARGET`을 반드시 구분한다. 아직 구현되지 않은 기능을 사용 가능한 기능처럼 설명하지 않는다.

## 권장 공부 순서

### [Part 00 — 시작하기](00-start-here/README.md)
작곡의 목적, 음악의 핵심 요소, AI 시대에 사람이 맡아야 할 판단, DohaStudio 학습법을 먼저 정리한다.

### [Part 01 — Song Form](01-song-form/README.md)
Intro / Verse / Pre-Chorus / Chorus / Bridge / Outro, Section Contrast, Energy Curve를 공부하고 현재 DohaMusic Timeline에서 실제 곡의 구조를 분석한다.

### [Part 02 — Rhythm](02-rhythm/README.md)
Beat / Tempo / Meter / Straight / Swing / Shuffle / Syncopation / Pickup / Groove를 배우고 AI 후보의 리듬을 비교한다.

### [Part 03 — Harmony](03-harmony/README.md)
Key / Scale / Diatonic Chord / Chord Function / Harmonic Rhythm / Inversion / Reharmonization / Modulation을 공부한다.

### [Part 04 — Melody](04-melody/README.md)
Phrase / Motif / Contour / Range / Stepwise / Leap / Motif Development / Non-Chord Tone / Hook을 배우고 후보 멜로디를 분석한다.

### [Part 05 — Lyrics & Vocal](05-lyrics-vocal/README.md)
Concept / Story / Syllable / Prosody / Rhyme / Breath / Vocal Range / Register / Harmony / Ad-lib을 공부하며 DohaLM·DohaVocal 경계를 연결한다.

### [Part 06 — Arrangement & Sound](06-arrangement-sound/README.md)
Instrument Role / Density / Layering / Timbre / Register / Dynamics / Stereo Image / Virtual Instrument / Sample / SoundFont를 공부한다.

### [Part 07 — AI Music](07-ai-music/README.md)
Reference Analysis → Structured Condition → Candidate Generation → Human Review → Revision의 전체 흐름을 배운다.

### [Part 08 — MIDI & DAW](08-midi-daw/README.md)
MIDI Note / Velocity / Duration / CC / Quantization / Humanization / Track / Clip / Piano Roll / Plugin을 배우고 현재 DohaMusic DAW Foundation과 비교한다.

### [Part 09 — Audio Production](09-audio-production/README.md)
Recording / Editing / EQ / Compression / Reverb / Delay / Panning / Automation / Bus / Mixing / Mastering을 공부한다.

### [Part 10 — Rights](10-rights/README.md)
Copyright / Ownership / License / AI contribution / Sample / SoundFont / Dataset / Model / Voice Consent / Similarity를 분리해서 이해한다.

### [Part 11 — DohaStudio 코드로 음악 이해하기](11-dohastudio-code/README.md)
DohaMusic, DohaLM, DohaAudio, DohaVocal의 실제 `develop` 상태와 역할 경계를 읽고 음악 개념이 코드에서 어떻게 표현되는지 추적한다.

### [Part 12 — 현재 DohaMusic 사용법](12-dohamusic-user-guide/README.md)
Backend/Frontend 실행, `/studio`, `/lyrics`, `/voice`, `/generation/[jobId]`, `/result/[jobId]`, `/history`, `/projects/[id]` 등을 실제 공부 흐름과 연결한다.

### [Part 13 — 하나의 곡 완성하기](13-demo-project/README.md)
Music Intent부터 Reference Analysis, Song Form, Rhythm, Harmony, Melody, Lyrics, Arrangement, AI Candidate, Human Edit, Mix/Master, Rights, Final Review까지 하나의 Demo 제작 기록을 남긴다.

### [Part 14 — 작곡가 훈련 기록](14-composer-training/README.md)
Daily Listening, Weekly Composition Drill, Ear Training, AI Candidate Review, Demo Retrospective, Portfolio Log를 반복한다.

## 한 Chapter의 표준 형식

```text
# Chapter

## 1. 왜 배우는가
## 2. 음악 이론
## 3. 실제 곡에서 듣는 방법
## 4. 직접 작곡하기
## 5. DohaStudio에서는 어떻게 표현되는가
## 6. 현재 구현 상태 (CURRENT / FOUNDATION / TARGET)
## 7. 내 프로그램 사용법
## 8. 실습
## 9. 듣기 체크리스트
## 10. 공부 노트 / 회고
## References
```

## 공부의 순환 구조

```text
이론 읽기
→ 실제 곡 듣기
→ 직접 짧게 작곡하기
→ AI 후보 만들기
→ DohaMusic에서 청취/비교하기
→ 외부 DAW 또는 현재 가능한 기능으로 수정하기
→ DohaStudio 코드에서 개념 위치 확인하기
→ 프로그램에서 부족한 점 기록하기
→ 다시 음악 공부로 돌아가기
```

이 저장소의 목적은 기능 문서를 많이 만드는 것이 아니라 **음악적 판단이 실제로 좋아지고, 그 판단이 DohaStudio 설계와 사용에 다시 반영되는 학습 루프**를 만드는 것이다.
