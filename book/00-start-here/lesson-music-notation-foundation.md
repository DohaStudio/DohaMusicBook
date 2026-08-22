# Lesson — Music Notation Foundation

## 목표
DAW/Piano Roll만 보는 학습에 치우치지 않고 악보에서 시간·음높이·연주 정보를 읽는 최소 문법을 익힌다.

## 1. Clef
Treble/Bass clef를 중심으로 staff의 음높이 기준을 읽는다. Clef는 소리를 바꾸는 기호가 아니라 오선에서 음 위치를 해석하는 기준이다.

## 2. Staff와 Ledger Line
5개의 선과 4개의 칸을 기본으로 읽고 범위를 벗어난 음은 ledger line으로 확장한다. MIDI note number와 staff position을 서로 연결해 본다.

## 3. Note와 Rest Duration
Whole, half, quarter, eighth, sixteenth note/rest의 상대 길이를 박과 연결한다. 기호 이름을 외운 뒤 반드시 metronome과 함께 소리 내거나 MIDI로 입력한다.

## 4. Repeat Sign
반복 기호가 form/time flow를 어떻게 압축해서 표기하는지 이해한다. DAW loop와 악보 반복 기호는 목적이 비슷한 부분이 있지만 동일한 데이터 모델은 아니다.

## 5. Articulation
Accent, staccato, tenuto 등 기본 articulation을 같은 pitch/duration의 기계적 재생과 비교한다. Virtual Instrument에서는 articulation이 keyswitch, velocity, CC, preset 등 다른 방식으로 구현될 수 있다.

## 실습
```text
1. Treble/Bass staff에 C major scale 적기
2. 4마디 rhythm을 note/rest로 표기
3. 같은 phrase를 staccato/tenuto/accent 버전으로 연주 또는 MIDI 입력
4. 악보와 Piano Roll을 나란히 비교
```

## DohaStudio 연결
향후 score view를 구현할지 여부와 별개로 `pitch`, `onset`, `duration`, `articulation`은 편집 가능한 음악 데이터 설계에서 구분할 가치가 있다. 현재 score editor가 있다고 가정하지 않는다.
