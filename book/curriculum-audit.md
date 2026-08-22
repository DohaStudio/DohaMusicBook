# DohaMusicBook Curriculum Audit

> 목적: 참고한 여러 작곡·미디·AI 음악 교재의 목차를 그대로 복제하지 않고, DohaStudio의 실제 목표에 필요한 학습 주제가 빠졌는지 점검한다.

## 1. 현재 충분히 다루는 영역

| 학습 영역 | DohaMusicBook |
|---|---|
| 작곡 목적과 학습법 | Part 00 |
| Song Form | Part 01 |
| Rhythm / Tempo / Meter / Groove | Part 02 |
| Key / Scale / Chord / Reharmonization | Part 03 |
| Motif / Melody / Hook | Part 04 |
| Lyrics / Prosody / Vocal | Part 05 |
| Arrangement / Timbre / Virtual Instrument | Part 06 |
| AI Prompt / Candidate / Human Review | Part 07 |
| MIDI / DAW / Piano Roll 개념 | Part 08 |
| Editing / Mix / Master | Part 09 |
| Copyright / AI / Sample / Dataset / Voice rights | Part 10 |
| DohaStudio source code | Part 11 |
| 현재 DohaMusic 사용법 | Part 12 |
| 한 곡 End-to-End 제작 | Part 13 |
| 반복 작곡 훈련 | Part 14 |

## 2. 기존 목차를 대조했을 때 보강이 필요한 영역

### A. 협업과 전달
여러 교재에서 별도 설명하는 `협업할 때`, `녹음할 때`, `믹싱 맡길 때`, `마스터링 맡길 때`는 현재 각 Part에 흩어져 있지만 실제 업무용 전달 절차로는 부족하다.

따라서 Part 15에서 다음을 추가한다.

- 공동작업 시작 전 합의
- Session/File naming과 Version 관리
- Recording Session 준비와 Take 관리
- Mix Engineer에게 전달할 자료
- Mastering Engineer에게 전달할 자료
- Stem/Instrumental/Acapella 등의 Deliverable
- Credit, Split, Rights 기록

### B. 컴퓨터와 작업 환경
CPU/RAM/SSD/Audio Interface 같은 PC 기초는 음악 공부의 핵심 이론은 아니므로 본문 Part를 크게 늘리기보다 향후 Appendix/Setup Guide로 다루는 것이 적절하다.

### C. 유튜브 채널·수익화·썸네일
AI Playlist 운영 교재의 큰 비중을 차지하지만 DohaMusicBook의 핵심 목표는 음악 제작 능력과 DohaStudio 사용/개발이다. 따라서 핵심 Curriculum에서는 제외하고, 실제 음원 공개·Portfolio 운영이 필요해질 때 별도 `Release & Distribution` Appendix로 추가한다.

### D. 특정 아티스트 '스타일 프롬프트'
특정 아티스트를 그대로 모사하는 프롬프트 모음 대신 다음을 학습한다.

```text
Reference song
→ musical features
→ abstract production vocabulary
→ structured condition
→ originality review
```

즉 이름을 넣어 스타일을 복제하기보다 분석 가능한 음악 요소로 역설계한다.

### E. Pattern
리듬/멜로디/코드 Pattern 개념은 Part 02~04에 포함돼 있지만 추후 실습이 누적되면 `Pattern Library`를 별도 Lab으로 만들 수 있다.

## 3. 공부 순서 점검

현재 순서는 기초 음악 문법에서 실제 제작과 코드로 자연스럽게 이동한다.

```text
Start Here
→ Form
→ Rhythm
→ Harmony
→ Melody
→ Lyrics/Vocal
→ Arrangement/Sound
→ AI Music
→ MIDI/DAW
→ Audio Production
→ Rights
→ DohaStudio Code
→ DohaMusic User Guide
→ Demo Project
→ Composer Training
→ Collaboration & Delivery
```

Part 11~12는 음악 이론이 아니라 '내 도구를 이해하는 단계'이므로, 처음 공부할 때 Part 00~10을 먼저 진행하고 개발 작업 중에는 Part 11~12를 병행해도 된다.

## 4. 앞으로 추가할 때의 기준

새 Chapter는 다음 중 하나를 만족해야 한다.

1. 실제 작곡 판단력을 높인다.
2. 실제 음원 제작/협업에 필요하다.
3. DohaStudio의 음악 데이터 구조를 이해하는 데 필요하다.
4. 현재 DohaMusic을 안전하고 정확하게 사용하는 데 필요하다.
5. 프로그램의 미래 기능 요구를 음악적 근거에서 도출하는 데 필요하다.

단순 서비스 사용 팁이나 일시적인 유행은 핵심 본문에 넣지 않는다.
