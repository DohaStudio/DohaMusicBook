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
- Part 00/02/03/06/08/09/14/16/17 README에서 새 Lesson 진입 경로가 존재한다.
- Part 17 README가 Lesson 01~16을 모두 가리키며 대상 파일이 존재한다.
- Chord Progression Library의 Starter Set 8개 링크 대상이 존재한다.
- Harmony Ear Training Library README와 6개 Practice directory가 존재한다.
- 상업 도서 companion MIDI를 저장소에 재배포하지 않는 경계가 명시돼 있다.
- 완성형 MIDI/Piano Roll/SoundFont/Mixer를 CURRENT 기능으로 서술하지 않는다.

### Navigation review에서 발견·수정

- Part 03 README가 새 Lesson 08~10 파일을 갖고 있으면서 공부 순서에는 Lesson 07까지만 노출하고 있었다.
- Lesson 08~10 링크를 추가하고 Harmony Ear Training Library 진입 링크도 추가했다.
- Part 03 학습 산출물 번호도 새 Ear Training 단계를 반영해 다시 정렬했다.

### MIDI review에서 발견·수정

Starter progression 06~08에서 study sheet와 초기 MIDI Key가 달랐다.

```text
06 Rock:      C–Bb–F       → E–D–A
07 Dance:     Am–F–C–G     → Fm–Db–Ab–Eb
08 Cinematic: A-minor data  → Dm–Bb–Gm–A
```

각 세트의 original/rhythm/velocity/voicing/transpose-plus3 파일을 다시 생성하고 parse 및 pitch-class를 검증했다. 상세 기록은 [`midi-validation-findings.md`](midi-validation-findings.md)에 남긴다.

### Theory spot-check에서 확인·수정

기본 화성학과 재즈/응용 화성학의 고위험 개념을 우선 검수했다.

검수 항목:
- interval semitone 구조
- triad / seventh chord quality
- cadence 정의
- scale gravity / tonal center
- diminished seventh의 대칭성과 기능
- available-note-scale의 context-sensitive 접근
- guide tones / shell voicing
- altered dominant / altered scale
- tritone substitution
- modal harmony / Dorian characteristic degree

수정 사항:
- Altered Dominant Lesson에서 `#11/b5`, `b13/#5`를 단순 동의어처럼 보일 수 있던 표현을 `b5/#11`, `#5/b13`의 enharmonic/context 관계로 명확히 했다.
- `G7(#9) → C minor`처럼 특정 altered tension을 특정 tonic quality에 고정하는 인상을 제거했다.
- Altered scale을 melodic minor 7th mode / Super-Locrian과 연결하고 실제 pitch collection을 명시했다.
- Upper Structure Triad를 고정 공식이 아니라 lower shell 대비 tension을 계산하는 voicing 도구로 명확히 했다.

현재 spot-check 범위에서 병합을 막는 명백한 이론 오류는 남아 있지 않다.

### Terminology consistency review

Part 03과 Part 17에서 기능화성 용어를 다음 기준으로 정리했다.

```text
Tonic (T)
Predominant (PD)
Dominant (D)
```

재즈 문헌에서 Predominant 영역을 `Subdominant (SD) family`라고 부르는 문맥이 있으므로, Part 17에서 두 용어가 겹치는 관계를 명시했다. `Subdominant Minor`는 고유한 재즈/응용 화성 개념명으로 유지한다.

추가 원칙:
- Key / Scale / Interval / Chord / Cadence 등 기존 핵심 영문 용어는 유지한다.
- 동일 개념을 문서마다 임의로 다른 번역어로 바꾸지 않는다.
- 기능 약어는 `T / PD / D`를 기본값으로 사용한다.
- chord symbol, scale degree, Roman Numeral은 음악 표기이므로 번역하지 않는다.

### Part 03 / Part 17 scope review

Part 03 Lesson 05는 Reharmonization의 입문 범위로 제한했다.

```text
Part 03
- Secondary Dominant의 목표 관계
- Related ii의 기초
- Tritone Substitution의 청감 비교
- Modal Interchange와 Modulation 구분

Part 17
- Guide Tone 기반 분석
- Substitute ii–V
- Altered Dominant / tension
- Subdominant Minor
- Jazz voicing / modal harmony 등 심화 적용
```

Part 03에서 Part 17의 관련 Lesson으로 직접 연결해 같은 설명을 반복하기보다 `기초 → 심화` 관계가 보이도록 정리했다.

### Progression naming review

Starter progression의 study sheet와 MIDI folder는 같은 `prog-00N` ID를 공유하도록 규칙을 고정했다.

```text
<category>/prog-00N-<roman-slug>.md   # study sheet
<category>/prog-00N/                  # MIDI folder
```

MIDI starter variation 이름은 다음을 기본값으로 사용한다.

```text
original.mid
variation-rhythm.mid
variation-velocity.mid
variation-voicing.mid
variation-transpose-plus3.mid
```

README의 오래된 `prog-001/README.md`, `variation-tempo.mid`, `variation-groove.mid` 예시를 실제 현재 구조에 맞게 수정했다. Starter Set 8개는 study sheet ID와 MIDI folder ID가 일치한다.

### Rights / Release boundary review

Part 10과 Part 16은 다음 책임으로 분리한다.

```text
Part 10 Rights
- Copyright / Ownership / License 구분
- Sample / SoundFont / Plugin / Dataset / Model / Voice 권리
- License / consent evidence
- Artifact lineage / similarity review
- UNKNOWN / BLOCKED 판단

Part 16 Release & Distribution
- Part 10 evidence 소비
- Credits / metadata / master / artwork 확인
- Distributor / DSP delivery
- Reporting / revenue flow
- Release ready / blocked 결정
```

Part 16에서 권리 자체를 새로 판정하지 않으며, Part 10에서 `UNKNOWN/BLOCKED`인 항목을 임의로 허용하지 않는다고 명시했다. 따라서 현재 범위에서 Part 10과 Part 16 사이의 rights/provenance 모순은 발견되지 않았다.

### CURRENT / FOUNDATION / TARGET review

2026-08-23 기준 DohaMusic, DohaLM, DohaAudio, DohaVocal의 `develop` README와 authority를 대조했다. 상세 기록은 [`current-foundation-target-validation.md`](current-foundation-target-validation.md)에 남겼다.

핵심 판정:
- DohaMusic의 Composition Read Workspace/Timeline/Track lane/WAV playback을 CURRENT로 설명한 부분은 일치한다.
- WorkingComposition Track/Clip은 설계/Foundation이며 schema/API/UI가 구현된 것으로 쓰지 않는다.
- MIDI Track/Piano Roll, SoundFont engine, Mixer/Automation은 CURRENT가 아니다.
- DohaLM REST/SSE MVP와 runtime 이력은 존재하지만 approved artifact와 DohaMusic production integration은 CURRENT가 아니다.
- DohaAudio는 Runtime/API와 Dataset/Training governance foundation은 있으나 실제 production music/stem/analysis model과 실제 Training은 CURRENT가 아니다.
- DohaVocal은 metadata-only Fake Runtime foundation이며 실제 Singing/Conversion/Correction model은 CURRENT가 아니다.
- Provider 책임 경계와 DohaMusic orchestration 원칙은 원본 저장소와 일치한다.

현재 범위에서 P0 수준의 구현 상태 오기록은 발견되지 않았다.

### 추가 검수가 필요한 항목

- [x] 전체 변경 범위의 README/Study Map/Starter Set Markdown navigation 확인
- [x] Starter progression study-sheet naming과 MIDI folder naming 규칙 확인
- [x] 57개 MIDI(original/variation/ear-training)의 생성/parse/readability 검증
- [x] 각 MIDI의 note content와 문서 chord/harmonic intent 대조 및 발견된 불일치 수정
- [x] 기본 화성학 용어의 한글/영문 표기 일관성 검수
- [x] Jazz Harmony의 chord-scale / altered tension 핵심 설명 정확성 spot-check
- [x] Part 03과 Part 17의 중복 범위를 최소화
- [x] Part 16의 Rights 설명이 Part 10과 충돌하지 않는지 검수
- [x] CURRENT / FOUNDATION / TARGET 문장을 최신 DohaStudio source와 대조

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
[x] P0 findings = 0
[x] navigation checked
[x] MIDI checked
[x] theory spot-check passed
[x] CURRENT/FOUNDATION/TARGET checked
[x] rights/provenance checked
[x] main behind = 0
[ ] GitHub mergeability rechecked on final head
```

현재 문서/콘텐츠 검수 기준으로 P0 finding은 0이다. 마지막 단계는 final HEAD에서 GitHub mergeability와 CI/status를 다시 확인하는 것이다.
