# DohaMusicBook Curriculum Audit

> 목적: 참고한 여러 작곡·미디·AI 음악 교재의 목차를 그대로 복제하지 않고, DohaStudio의 실제 목표에 필요한 학습 주제가 빠졌는지 점검한다.

## 1. 현재 충분히 다루는 영역

| 학습 영역 | DohaMusicBook |
|---|---|
| 작곡 목적과 학습법 / 최소 악보 문법 | Part 00 |
| Song Form | Part 01 |
| Rhythm / Tempo / Meter / Groove / Drum Beatmaking / Polyrhythm | Part 02 |
| Key / Scale / Interval / Chord Quality / Function / Cadence / Reharmonization / Modes | Part 03 |
| Motif / Melody / Hook | Part 04 |
| Lyrics / Prosody / Vocal | Part 05 |
| Arrangement / Timbre / Virtual Instrument / Sampling / Synthesis / Layering | Part 06 |
| AI Prompt / Candidate / Human Review | Part 07 |
| MIDI / DAW / Piano Roll 개념 / MIDI Customization | Part 08 |
| Recording / Vocal Correction / Editing / Mix / Master / Creative FX | Part 09 |
| Copyright / AI / Sample / Dataset / Voice rights | Part 10 |
| DohaStudio source code | Part 11 |
| 현재 DohaMusic 사용법 | Part 12 |
| 한 곡 End-to-End 제작 | Part 13 |
| 반복 작곡 훈련 / Integrated Ear Reading | Part 14 |
| Collaboration / Recording / Mix-Master Handoff / Delivery | Part 15 |
| Release / Distribution / Revenue Flow / Release Package | Part 16 |
| Applied & Jazz Harmony / Voicing / Altered Dominant / Modal Harmony | Part 17 |

## 2. 이번 확장에서 보강한 영역

### A. MIDI로 직접 듣는 화성학
기본 화성 개념을 글로만 읽지 않고 코드 진행을 MIDI로 열어 Tempo, Velocity, Duration, Rhythm, Voicing/Inversion, Transpose를 한 변수씩 바꾸어 비교한다.

- `examples/chord-progressions/`
- Basic Major / Minor
- Pop / Ballad / R&B / Rock / Dance / Cinematic starter set
- 원본 + Variation MIDI

상업 도서의 부록 MIDI는 재배포하지 않는다. 저장소에는 독립적으로 만든 학습용 MIDI와 자신의 분석만 둔다.

### B. Ear Training 계층
`귀로 먼저 추정 → MIDI/Piano Roll 확인 → 이론 이름 붙이기` 순서를 추가했다.

- Cadence
- Major / Minor ii–V–I
- Guide Tone / Shell Voicing
- Tritone Substitution
- Altered Dominant
- Aeolian / Dorian

실습 자료는 `examples/harmony-ear-training/`에서 관리한다.

### C. 기본 화성학 체계 보강
Part 03에서 다음을 명시적으로 다룬다.

- Interval
- Triad / Seventh Chord Quality
- Scale Gravity
- Cadence
- Tonality / Modes / Special Scales
- MIDI Progression Variation

### D. Applied & Jazz Harmony 분리
기본 화성학을 배우기도 전에 심화 이론 때문에 학습이 막히지 않도록 Part 17을 선택적 심화 과정으로 분리했다.

```text
Part 03 Basic / Practical Harmony
        ↓
Part 17 Applied & Jazz Harmony
```

Part 17에는 Substitution, Subdominant Minor, Diminished, Minor Harmony, Tension, Extended Dominant, Available Note Scale, Pedal Point, Slash Chord, Turnaround, Blues, Guide Tone/Voicing, Altered Dominant, Tritone Substitution, Modal Harmony를 둔다.

### E. Beatmaking / Sampling / Production
비트메이킹 교재에서 유효한 일반 원리를 특정 DAW 버튼 설명 없이 흡수했다.

- Drum Beatmaking / Swing / Velocity
- Sampling / Chopping / Synthesis / Layering
- Vocal Recording / Comping / Pitch-Timing Correction
- Distortion / Saturation / Creative FX

### F. Release & Distribution
발매를 단순 서비스 사용법이 아니라 Rights/Credits → Metadata → Master/Artwork → Distributor/DSP → Reporting/Revenue 흐름으로 분리했다. 가격·정산 단가·약관처럼 빠르게 변하는 수치는 실제 발매 시점에 공식 소스로 다시 확인한다.

## 3. 의도적으로 핵심 Curriculum에서 제외하거나 제한하는 것

### 특정 DAW의 UI 매뉴얼
Ableton/REAPER 등의 버튼 위치는 버전에 따라 바뀌므로 핵심 이론으로 고정하지 않는다. 특정 DAW 실습이 필요하면 Lab/Walkthrough로 추가한다.

### 유튜브 채널·썸네일·수익화 운영
DohaMusicBook의 중심은 음악 제작 능력과 DohaStudio다. 음악 외 채널 운영은 핵심 Curriculum을 비대하게 만들지 않는다.

### 특정 아티스트 스타일 복제 프롬프트
특정 아티스트명을 그대로 모사하는 방식 대신 다음을 사용한다.

```text
Reference song
→ musical features
→ abstract production vocabulary
→ structured condition
→ originality review
```

## 4. 현재 권장 공부 순서

```text
Start Here / Notation
→ Form
→ Rhythm
→ Basic Harmony
→ Melody
→ Lyrics/Vocal
→ Arrangement/Sound
→ AI Music
→ MIDI/DAW
→ Audio Production
→ Rights
→ DohaStudio Code / User Guide
→ Demo Project
→ Composer Training
→ Collaboration & Delivery
→ Release & Distribution

선택 심화:
Basic Harmony → Applied & Jazz Harmony
```

Part 17은 첫 Demo의 필수 선행 과정이 아니다. Part 03의 기본 화성을 실제로 사용할 수 있게 된 뒤 필요한 부분부터 들어간다.

## 5. 다음 Deep Dive에서 필요한 실제 증거

현재 구조와 이론 범위는 충분히 넓다. 새 Part를 계속 늘리기보다 다음 실제 학습 증거를 채우는 것이 우선이다.

1. 실제 기성곡 Song Form/Rhythm/Harmony 분석
2. 직접 만든 Drum MIDI와 Groove A/B
3. Chord Progression Variation 학습 기록
4. Harmony Ear Training 결과와 오답 기록
5. Melody/Motif MIDI 예제
6. Sampling/Synthesis 실습 결과
7. Vocal Recording/Correction 전후 비교
8. 첫 Demo Song End-to-End 기록
9. 실제 DohaMusic 화면 기반 walkthrough
10. 실제 DohaStudio source permalink 기반 code lab

## 6. 앞으로 추가할 때의 기준

새 Chapter는 다음 중 하나를 만족해야 한다.

1. 실제 작곡 판단력을 높인다.
2. 실제 음원 제작/협업/발매에 필요하다.
3. DohaStudio의 음악 데이터 구조를 이해하는 데 필요하다.
4. 현재 DohaMusic을 안전하고 정확하게 사용하는 데 필요하다.
5. 프로그램의 미래 기능 요구를 음악적 근거에서 도출하는 데 필요하다.

단순 서비스 사용 팁이나 일시적인 유행은 핵심 본문에 넣지 않는다.
