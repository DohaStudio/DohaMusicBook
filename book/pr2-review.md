# PR #2 Review — Theory, MIDI Labs, Production, Release, Jazz Harmony

> 상태: Draft 유지. 구조 정리를 끝내고 내용/정합성 검수 단계로 전환한다.

## 1. 현재 범위

```text
Part 00  Music Notation Foundation
Part 02  Drum Beatmaking / Polyrhythm Listening
Part 03  Basic Harmony Deepening + MIDI Variation
Part 06  Sampling / Synthesis / Layering
Part 08  MIDI Customization
Part 09  Vocal Correction / Creative Effects
Part 14  Integrated Listening
Part 16  Release & Distribution
Part 17  Applied & Jazz Harmony
Examples Chord Progression MIDI Library
Examples Harmony Ear Training MIDI Library
```

## 2. 구조 정리에서 수정한 사항

- [x] PR 제목/설명을 실제 확장 범위에 맞게 갱신
- [x] Part 00에서 Music Notation Foundation 연결
- [x] Part 02에서 Lesson 07~08 연결
- [x] Part 03에서 Lesson 07~10 연결
- [x] Part 03의 `Lesson 11` 번호 공백을 `Lesson 10`으로 정규화
- [x] Part 06에서 Lesson 07 연결
- [x] Part 08에서 MIDI Customization 연결
- [x] Part 09에서 Lesson 07~08 연결
- [x] Part 14에서 Integrated Listening 연결
- [x] Part 16을 Study Map에 연결
- [x] Part 17 Lesson 01~16 navigation 완성
- [x] Curriculum Audit을 Part 17까지 갱신
- [x] branch가 `main`보다 behind가 아님을 확인

## 3. 1차 구조 검수 결과

### 정상

- 새 Part 16/17의 진입점이 `book/README.md`에 존재한다.
- 새 Harmony Lesson의 파일 번호와 README 순서가 연속적이다.
- Chord Progression Library와 Harmony Ear Training Library의 README가 존재한다.
- 상업 도서 companion MIDI를 저장소에 재배포하지 않는 경계가 명시돼 있다.
- 완성형 MIDI/Piano Roll/SoundFont/Mixer를 CURRENT 기능으로 서술하지 않는다.

### 추가 검수가 필요한 항목

- [ ] 전체 Markdown 상대 링크를 최종 확인
- [ ] Starter progression study-sheet naming과 MIDI folder naming 규칙 확인
- [ ] 57개 MIDI(original/variation/ear-training)의 실제 parse/readability 재확인
- [ ] 각 MIDI의 note content가 문서의 chord symbol과 일치하는지 대조
- [ ] 기본 화성학 용어의 한글/영문 표기 일관성 검수
- [ ] Jazz Harmony의 chord-scale / altered tension 설명 정확성 검수
- [ ] Part 03과 Part 17의 중복 범위를 최소화
- [ ] Part 16의 Rights 설명이 Part 10과 충돌하지 않는지 검수
- [ ] CURRENT / FOUNDATION / TARGET 문장을 최신 DohaStudio source와 대조

## 4. 내용 검수 우선순위

### P0 — 병합 전 반드시 확인

1. Broken navigation/link
2. MIDI binary 손상 또는 잘못된 chord/note
3. 명백한 음악 이론 오류
4. CURRENT/TARGET 오기록
5. Rights/provenance 모순

### P1 — 병합 전 가능하면 정리

1. 용어 표기 통일
2. Lesson 간 중복 설명 축소
3. Progression 파일/폴더 이름 규칙 통일
4. 학습 순서와 prerequisite 명확화

### P2 — 병합 후 실제 공부하면서 확장

1. 실제 기성곡 분석
2. MIDI/Piano Roll screenshot
3. Audio render / A-B example
4. 실제 DohaMusic screen walkthrough
5. DohaStudio source permalink code lab
6. 첫 Demo Song 학습 기록

## 5. Merge Gate

다음 조건을 만족할 때 Draft 해제를 검토한다.

```text
[ ] P0 findings = 0
[ ] navigation checked
[ ] MIDI checked
[ ] theory spot-check passed
[ ] CURRENT/FOUNDATION/TARGET checked
[ ] rights/provenance checked
[ ] main behind = 0
[ ] GitHub mergeability rechecked on final head
```

PR #2는 새 이론을 계속 추가하는 단계에서 벗어나 이제 이 Gate를 통과시키는 검수 단계로 관리한다.
