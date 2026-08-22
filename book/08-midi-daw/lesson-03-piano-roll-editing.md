# Lesson 03 — Piano Roll: 멜로디·코드·리듬을 눈으로 편집한다

## 학습 목표
- Piano Roll의 시간축과 Pitch축을 이해한다.
- Note 입력, 이동, 길이 수정, Velocity 편집을 수행한다.
- Melody, Chord, Drum MIDI의 편집 관점이 다름을 이해한다.

## 1. Piano Roll 구조
```text
X축 = 시간
Y축 = Pitch
Note 폭 = Duration
Velocity lane = 연주 강도
```

Piano Roll은 악보와 다르게 시간 길이와 배치를 직접 시각화하기 때문에 MIDI 제작에서 핵심 편집 화면이다.

## 2. Melody Editing
멜로디에서는 다음을 확인한다.
- Phrase 시작과 끝
- Step/Leap
- Range
- Motif 반복
- Chord Tone과 Non-Chord Tone
- Breath 가능성

## 3. Chord Editing
Chord는 단순히 여러 Note를 세로로 쌓는 것이 아니다. Voicing, Inversion, Register, Voice Leading을 조절한다.

## 4. Drum Editing
Drum MIDI는 Pitch축이 음높이라기보다 Kick, Snare, Hi-hat 등 서로 다른 타격음을 선택하는 Map으로 사용되는 경우가 많다.

## 5. 실습
8마디 MIDI Clip에서:
1. Melody Motif를 2마디 만든다.
2. Bars 3–4에 Sequence를 만든다.
3. Chord Voicing을 두 가지로 비교한다.
4. Drum pattern의 4마디째에 Fill을 추가한다.

## DohaStudio 연결
### CURRENT
현재 DohaMusic에는 Piano Roll이 없다.

### TARGET
향후 Note-level 편집이 생기면 `Clip → NoteEvent[]` 구조와 selection, drag, resize, velocity lane, snapping, undo/redo 같은 상호작용이 필요하다. 실제 Domain 계약은 구현 당시 최신 코드와 ADR을 따른다.

## 완료 체크
- [ ] Piano Roll의 축을 설명할 수 있다.
- [ ] Melody/Chord/Drum 편집 관점의 차이를 이해한다.
- [ ] 8마디 MIDI Clip을 직접 수정했다.
