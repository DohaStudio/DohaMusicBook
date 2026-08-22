# Part 08 — MIDI & DAW: 음악 아이디어를 편집 가능한 데이터로 바꾼다

> 학습 목표: MIDI와 Audio의 차이를 이해하고, DAW에서 사람이 실제로 수정할 수 있는 정보가 무엇인지 배운다.

## 1. MIDI는 소리가 아니다

MIDI는 연주 정보를 기록하는 데이터다. 대표적으로 다음 정보를 가진다.

```text
note number
start time
duration
velocity
channel
control change
pitch bend
```

실제 소리는 Virtual Instrument나 외부 악기가 이 데이터를 받아 만들어낸다.

## 2. Audio와 MIDI의 차이

| MIDI | Audio |
|---|---|
| 연주 정보 | 실제 파형 |
| 음높이/길이 수정 쉬움 | 직접적인 파형 편집 |
| 악기 교체 쉬움 | 악기 분리 어려움 |
| Virtual Instrument 필요 | 바로 재생 가능 |

둘 중 하나가 더 좋은 것이 아니라 제작 단계에 따라 역할이 다르다.

## 3. Note, Velocity, Duration

### Note

Pitch를 결정한다.

### Velocity

연주 강도를 표현한다. Virtual Instrument에 따라 음량뿐 아니라 음색도 달라질 수 있다.

### Duration

Note가 얼마나 오래 유지되는지 결정한다. 같은 멜로디라도 Note length가 짧으면 Staccato, 길면 Legato 느낌이 강해질 수 있다.

## 4. Quantization

연주 타이밍을 Grid에 맞추는 기능이다. 모든 음을 완벽하게 맞추면 정확하지만 기계적으로 들릴 수 있다. 장르와 악기에 따라 Quantize 강도를 다르게 사용할 수 있다.

## 5. Humanization

Timing, Velocity, Duration 등에 작은 변화를 줘 사람 연주처럼 들리게 하는 방법이다. 무작위로 흔드는 것이 목적이 아니라 Groove를 유지하면서 지나친 기계성을 줄이는 것이 목적이다.

## 6. Control Change

CC는 Modulation, Expression, Sustain 같은 연속적인 연주 정보를 제어할 수 있다. 특히 Orchestra/Virtual Instrument에서는 Note 정보만큼 중요할 수 있다.

## 7. DAW란 무엇인가

DAW는 MIDI와 Audio를 배치·편집·녹음·믹싱하는 제작 환경이다. 일반적인 핵심 구성은 다음과 같다.

- Timeline
- Track
- Clip/Item
- Piano Roll
- Mixer
- Plugin
- Automation
- Transport

## 8. Track과 Clip

Track은 역할별 작업 공간이고 Clip은 Timeline 위에 놓이는 구체적인 MIDI 또는 Audio 단위로 볼 수 있다.

```text
Vocal Track
  └─ Audio Clips
Drum Track
  └─ MIDI Clips
Bass Track
  └─ MIDI Clips
```

## 9. Piano Roll

Piano Roll은 MIDI Note를 시간과 Pitch 축으로 보는 편집기다.

- 가로: 시간
- 세로: Pitch
- Note 길이: Duration
- 별도 lane: Velocity 등

Melody, Chord, Drum programming을 수정하는 핵심 화면이다.

## 10. Virtual Instrument / Plugin

Virtual Instrument는 MIDI를 소리로 바꾸며, Effect Plugin은 Audio를 처리한다.

예:

```text
MIDI → Piano VST → EQ → Compressor → Reverb → Audio Output
```

상업적으로 사용할 때는 Plugin/Instrument뿐 아니라 Sample Library와 SoundFont의 라이선스도 따로 확인한다.

## 11. 직접 실습

외부 DAW를 사용할 수 있다면 4마디 MIDI를 만든다.

1. C Major chord 4개 입력
2. Melody 1개 입력
3. Velocity를 모두 같은 값으로 들어본다.
4. Velocity를 다르게 조절한다.
5. Quantize 100%와 느슨한 버전을 비교한다.
6. Virtual Instrument를 교체한다.

'작곡 정보'와 '음색'이 서로 독립적으로 바뀔 수 있다는 점을 듣는다.

## 12. DohaStudio와 연결

### CURRENT

현재 DohaMusic에는 읽기 전용 Timeline, Track lane, WAV playback, playhead/seek/zoom 기반이 존재한다.

### FOUNDATION/TARGET

Canonical WorkingComposition, Track, Clip 경계는 설계가 진행되어 있으나 완전한 Track/Clip Editing UI는 아직 구현 완료 상태가 아니다. MIDI Track, Piano Roll, SoundFont Engine 역시 현재 `NOT IMPLEMENTED / NOT INTEGRATED` 영역이다.

따라서 이 책에서는 MIDI/Piano Roll을 음악 공부 대상으로 자세히 다루되, DohaMusic 사용법에는 미래 기능처럼 적는다.

## 13. 프로그램 설계 관점에서 볼 것

음악 개념을 코드로 표현할 때는 다음 질문을 한다.

```text
Track identity는 언제부터 언제까지 유지되는가?
Clip은 원본 AssetVersion을 참조하는가?
편집 시 원본 파일을 덮어쓰는가?
Snapshot은 어떤 시점의 Composition을 고정하는가?
Undo/Redo는 mutable state와 어떻게 연결되는가?
```

이 질문은 DAW 사용법과 소프트웨어 설계를 연결하는 핵심이다.

## 14. 현재 프로그램으로 공부하기

`/projects/[id]`에서 Track lane과 Timeline을 보며 실제 DAW 개념과 비교한다.

```text
Current UI concept:
- Timeline: 있음
- Track lane: 읽기 기반 있음
- Playhead: 있음
- Seek: 있음
- Clip editing: 없음/Target
- Piano Roll: 없음
- MIDI Track: 없음
```

기능이 추가될 때마다 이 표를 갱신한다.

## 15. 이 장을 끝냈다면

- MIDI와 Audio 차이를 설명할 수 있다.
- Note/Velocity/Duration/CC가 무엇인지 안다.
- Quantization과 Humanization의 역할을 이해한다.
- Track/Clip/Piano Roll/Mixer의 기본 관계를 설명할 수 있다.
- DohaMusic의 현재 Timeline과 목표 DAW 구조를 구분할 수 있다.
