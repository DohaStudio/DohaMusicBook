# DohaMusicBook — Study Map

이 저장소는 **내가 음악을 공부하면서 동시에 DohaStudio를 이해하고 실제로 사용하는 개인 학습 교재**다.

각 Part는 항상 세 층으로 작성한다.

1. **음악 공부** — 실제 작곡·편곡·프로덕션에 필요한 개념
2. **코드로 이해하기** — 그 개념이 DohaMusic/DohaLM/DohaAudio/DohaVocal에서 어떤 데이터·도메인·Job·Artifact와 연결되는지
3. **내 프로그램으로 해보기** — 현재 구현된 DohaStudio 기능을 직접 실행하고 곡을 만들어 보는 사용법

> `CURRENT`와 `TARGET`을 반드시 구분한다. 아직 구현되지 않은 기능을 사용 가능한 기능처럼 설명하지 않는다.

## 권장 공부 순서

### Part 00 — 시작하기
- 작곡의 목적과 듣는 사람
- 작곡을 시작하는 방법: 리듬 / 멜로디 / 코드 / 가사
- AI 시대의 작곡가가 해야 하는 판단
- DohaStudio 전체 제작 흐름

### Part 01 — Song Form과 곡의 설계
- Intro / Verse / Pre-Chorus / Chorus / Post-Chorus / Bridge / Outro
- 장르별 Song Form
- Section contrast와 Energy curve
- Hook과 초반 청취 유지
- **실습:** 한 곡의 Music Intent와 Section Map 작성

### Part 02 — Rhythm
- Beat / Tempo / BPM / Meter
- Straight / Swing / Shuffle
- 강박·약박 / Syncopation / Pickup
- Groove와 Rhythm Pattern
- 장르별 리듬과 Section별 변화
- **실습:** 레퍼런스 곡의 BPM·박자·Groove 기록

### Part 03 — Harmony
- Key / Scale / Major / Minor
- Diatonic Chord와 Chord Tone
- Tonic / Subdominant / Dominant
- Chord Progression과 Harmonic Rhythm
- Inversion / 7th / Extension
- Secondary Dominant / Related IIm7 / Tritone Substitution / Modal Interchange / Modulation
- **실습:** Verse–Pre-Chorus–Chorus 코드 진행 작성 및 리하모니

### Part 04 — Melody
- Melody = Rhythm + Pitch
- Phrase / Breath / Range
- Motif와 Hook
- Ascending / Descending / Repetition
- Stepwise / Leap
- Motif 발전: 반복·동형진행·반전·변주·추가/생략·확대/축소
- Chord Tone / Non-Chord Tone
- Tension & Resolution
- **실습:** 하나의 Motif로 Verse와 Chorus 만들기

### Part 05 — Lyrics & Vocal
- Concept / Story / 장면
- 음절 / 강세 / Prosody / Rhyme
- Melody–Lyrics alignment
- AI 가사의 클리셰 수정
- Vocal range / register / expression / harmony / ad-lib
- **실습:** 가사 초안 → 음절 점검 → 보컬 Phrase 설계

### Part 06 — Arrangement & Sound
- Instrument role
- Rhythm section / Bass / Harmony / Lead / Pad / FX
- Pattern / Layering / Density
- Timbre / Register / Dynamics / Stereo Image
- Sample / Synth / Virtual Instrument / SoundFont
- **실습:** Section별 악기 배치표와 Sound Palette 작성

### Part 07 — AI Music
- Reference를 복제하지 않고 음악 요소로 분석하기
- Genre / Mood / BPM / Instrumentation / Vocal / Structure를 condition으로 표현하기
- Prompt와 structured condition
- N개 Candidate 생성과 선별
- Variation / Regeneration / Section 수정
- Melody·Harmony·Groove·Structure·Sound Quality·Originality 평가
- **실습:** 같은 Music Intent로 여러 후보를 만들고 Listening Review 작성

### Part 08 — MIDI & DAW
- MIDI Note / Velocity / Duration / CC
- Quantization / Humanization
- Piano Roll과 MIDI 편집
- VST / Virtual Instrument / SoundFont
- Track / Clip / Timeline / Playhead
- Split / Trim / Move / Fade / Gain / Mixer
- **실습:** AI 결과를 사람이 수정 가능한 Composition으로 바꾸는 과정 이해

### Part 09 — Audio Production
- Sample Rate / Bit Depth / WAV
- Recording / Trimming / Fade / Alignment
- EQ / Compression / Reverb / Delay / Saturation
- Pan / Stereo Image / Automation / Bus
- Loudness / LUFS / True Peak / Limiter
- Mix / Master / Export
- **실습:** 생성 WAV를 듣고 문제점을 기록한 뒤 후처리 계획 작성

### Part 10 — Rights & Provenance
- 저작인격권 / 저작재산권 / 저작인접권
- Copyright와 서비스 Ownership 구분
- AI 산출물과 인간의 창작 기여
- Dataset / Sample / SoundFont / Plugin / Model license
- Voice consent
- Asset lineage / provenance / checksum
- SimilarityReport의 한계
- **실습:** 한 곡의 입력부터 Final Artifact까지 권리·출처 표 작성

### Part 11 — DohaStudio 코드로 음악 이해하기
- DohaMusic: AI-native DAW, Workspace·Project·Composition·AssetVersion·Artifact·Job·Snapshot·Orchestration
- DohaLM: 재사용 LLM Provider, 가사·의도·prompt/analysis 지원 경계
- DohaAudio: Music Generation·Stem·Audio Analysis Provider와 Dataset/Training 기반
- DohaVocal: Singing Voice·Voice Conversion·Correction Provider
- Provider는 서로 직접 호출하지 않고 DohaMusic이 orchestration한다.
- **실습:** 음악 개념 하나가 요청 → Job → Provider → Artifact → 선택/Composition으로 돌아오는 경로 추적

### Part 12 — 현재 DohaMusic 사용법
- 로컬 Backend/Frontend 실행
- `/studio`, `/lyrics`, `/voice`, `/generation/[jobId]`, `/result/[jobId]`
- `/history`, `/projects`, `/projects/[id]`, `/settings`, `/about`
- Project와 생성 이력 확인
- WAV 재생·다운로드
- Pipeline cancel/retry
- Guided Voice Enrollment
- Composition Read Workspace / Timeline Playback / Waveform / Playhead
- **주의:** WorkingComposition Track/Clip 편집, MIDI/Piano Roll, SoundFont engine, 실제 DohaLM/DohaAudio transport 등은 현재 미구현 상태를 별도 표시

### Part 13 — 하나의 곡 완성하기
1. Music Intent 작성
2. Reference 분석
3. Song Form 설계
4. Rhythm/Groove 설계
5. Chord Progression
6. Motif와 Melody
7. Lyrics/Prosody
8. Arrangement/Sound Palette
9. AI Candidate 생성
10. Listening Review와 후보 선택
11. MIDI/Audio/Vocal 수정
12. Mix/Master
13. Rights/Similarity 확인
14. Final Export
15. 무엇을 직접 만들었고 무엇을 AI가 생성했는지 제작 기록 남기기

### Part 14 — 작곡가 훈련 기록
- 매일/매주 레퍼런스 분석
- Melody·Chord·Rhythm 귀 훈련
- Demo 제작 회고
- 실패한 Candidate에서 배운 점
- 프로그램에서 불편했던 점을 기능 요구사항으로 연결
- 완성곡 Portfolio 기록

## 한 Chapter의 표준 형식

```text
# Chapter

## 1. 왜 배우는가
## 2. 음악 이론
## 3. 실제 곡에서 듣는 방법
## 4. 직접 작곡하기
## 5. DohaStudio에서는 어떻게 표현되는가
## 6. 현재 구현 상태 (CURRENT / TARGET)
## 7. 내 프로그램 사용법
## 8. 실습
## 9. 듣기 체크리스트
## 10. 공부 노트 / 회고
## References
```

이 형식을 사용해 이 저장소가 단순한 개발 문서가 아니라 **음악 공부 → 직접 작곡 → 코드 이해 → DohaStudio 사용 → 다시 음악적 판단 향상**으로 순환하는 교재가 되도록 한다.
