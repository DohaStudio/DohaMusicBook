# DohaMusicBook — Study Map

이 저장소는 **음악을 공부하면서 동시에 DohaStudio의 실제 코드와 프로그램 사용법을 연결하는 개인 학습 교재**다.

각 Part는 항상 세 층으로 작성한다.

1. **음악 공부** — 실제 작곡·편곡·프로덕션에 필요한 개념
2. **코드로 이해하기** — 그 개념이 DohaMusic/DohaLM/DohaAudio/DohaVocal의 어떤 데이터·도메인·Job·Artifact와 연결되는지
3. **내 프로그램으로 해보기** — 현재 구현된 DohaStudio 기능을 직접 실행하고 곡을 만들어 보는 사용법

> `CURRENT`, `FOUNDATION`, `TARGET`을 반드시 구분한다. 아직 구현되지 않은 기능을 사용 가능한 기능처럼 설명하지 않는다.

전체 참고 목차 대비 누락/중복 점검은 [Curriculum Audit](curriculum-audit.md)에서 관리한다.

## 권장 공부 순서

### [Part 00 — 시작하기](00-start-here/README.md)
작곡의 목적, 음악의 핵심 요소, AI 시대에 사람이 맡아야 할 판단, DohaStudio 학습법을 먼저 정리한다.

### [Part 01 — Song Form](01-song-form/README.md)
Intro / Verse / Pre-Chorus / Chorus / Bridge / Outro, Section Contrast, Energy Curve를 공부한다.

### [Part 02 — Rhythm](02-rhythm/README.md)
Beat / Tempo / Meter / Straight / Swing / Shuffle / Syncopation / Pickup / Groove를 배우고 실제 Drum Beatmaking으로 연결한다.

### [Part 03 — Harmony](03-harmony/README.md)
Key / Scale / Diatonic Chord / Chord Function / Harmonic Rhythm / Inversion / Reharmonization / Modulation을 공부하고 MIDI Progression Variation으로 직접 듣는다.

### [Part 04 — Melody](04-melody/README.md)
Phrase / Motif / Contour / Range / Stepwise / Leap / Motif Development / Non-Chord Tone / Hook을 배운다.

### [Part 05 — Lyrics & Vocal](05-lyrics-vocal/README.md)
Concept / Story / Syllable / Prosody / Rhyme / Breath / Vocal Range / Register / Harmony / Ad-lib을 공부한다.

### [Part 06 — Arrangement & Sound](06-arrangement-sound/README.md)
Instrument Role / Density / Layering / Timbre / Register / Dynamics / Stereo Image / Virtual Instrument / Sample / SoundFont와 Sampling/Synthesis를 공부한다.

### [Part 07 — AI Music](07-ai-music/README.md)
Reference Analysis → Structured Condition → Candidate Generation → Human Review → Revision의 전체 흐름을 배운다.

### [Part 08 — MIDI & DAW](08-midi-daw/README.md)
MIDI Note / Velocity / Duration / CC / Quantization / Humanization / Track / Clip / Piano Roll / Plugin을 배우고 Chord Progression MIDI Practice를 수행한다.

### [Part 09 — Audio Production](09-audio-production/README.md)
Recording / Vocal Correction / Editing / EQ / Compression / Distortion / Reverb / Delay / Panning / Automation / Bus / Mixing / Mastering을 공부한다.

### [Part 10 — Rights](10-rights/README.md)
Copyright / Ownership / License / AI contribution / Sample / SoundFont / Dataset / Model / Voice Consent / Similarity를 분리해서 이해한다.

### [Part 11 — DohaStudio 코드로 음악 이해하기](11-dohastudio-code/README.md)
DohaMusic, DohaLM, DohaAudio, DohaVocal의 실제 구현 경계를 읽고 음악 개념이 코드에서 어떻게 표현되는지 추적한다.

### [Part 12 — 현재 DohaMusic 사용법](12-dohamusic-user-guide/README.md)
현재 프로그램의 제작/생성/결과/History/Project 흐름을 실제 공부와 연결한다.

### [Part 13 — 하나의 곡 완성하기](13-demo-project/README.md)
Music Intent부터 Final Review까지 하나의 Demo 제작 기록을 남긴다.

### [Part 14 — 작곡가 훈련 시스템](14-composer-training/README.md)
Daily Listening, Weekly Composition Drill, Ear Training, AI Candidate Review, Monthly Demo, Portfolio Review를 반복한다.

### [Part 15 — Collaboration & Delivery](15-collaboration-delivery/README.md)
협업 Brief, Recording Take, Mix/Master Handoff, Stem/Deliverable, Credit·Rights·Version 관리를 배운다.

### [Part 16 — Release & Distribution](16-release-distribution/README.md)
완성된 Master를 실제 발매 단위로 준비하면서 Rights/Credits, Metadata, Distributor/DSP 흐름, Revenue 구조와 Release Package를 공부한다.

### [Part 17 — Applied & Jazz Harmony](17-applied-jazz-harmony/README.md)
Part 03 이후의 심화 화성 과정이다. Subdominant Minor, Tonic Substitute, Diminished, Minor ii–V–i, Extended Dominant, Deceptive Cadence, Available Note Scale, Pedal Point, Slash Chord, Turnaround, Blues/Blue Note를 실제 MIDI·Melody·AI Candidate 평가와 연결한다.

## Appendix — 작업 환경

### [Music Production Setup](appendix-production-setup/README.md)
PC 성능, Storage, Audio Interface, Driver/Buffer, Monitoring, Recording Setup, DAW/Plugin 관리, Backup/Versioning을 실제 음악 제작 환경과 연결한다.

## 추천 학습 방식

```text
00~06  작곡·편곡 문법
07     AI와 후보 생성/평가
08~09  실제 MIDI/Audio 제작
10     Rights
11~12  내 프로그램/코드 이해
13     한 곡 완성
14     반복 훈련
15     협업과 전달
16     발매와 유통
17     심화 실용·재즈 화성
Appendix 작업 환경 참고
```

Part 17은 필수 선행 과정이 아니다. 첫 Demo를 만들기 전에 재즈 화성을 완주하려고 하지 않는다. Part 03의 기본 화성을 실제로 사용할 수 있게 된 뒤, 곡에서 더 정교한 harmony/voice-leading/melody 선택이 필요할 때 들어간다.

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
→ MIDI/Audio로 구현하기
→ AI 후보 만들기/비교하기
→ DohaMusic에서 청취/기록하기
→ 외부 DAW 또는 현재 가능한 기능으로 수정하기
→ DohaStudio 코드에서 개념 위치 확인하기
→ 프로그램에서 부족한 점 기록하기
→ 다시 음악 공부로 돌아가기
```

이 저장소의 목적은 기능 문서를 많이 만드는 것이 아니라 **음악적 판단이 실제로 좋아지고, 그 판단이 DohaStudio 설계와 사용에 다시 반영되는 학습 루프**를 만드는 것이다.
