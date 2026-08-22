# Lesson 01 — MIDI Data: 소리가 아니라 연주 정보를 다룬다

## 학습 목표
- MIDI와 Audio를 구분한다.
- Note, Velocity, Duration, Channel, CC, Pitch Bend를 설명한다.
- 작곡 정보와 음색을 분리해서 생각한다.

## 1. MIDI의 핵심
MIDI는 파형이 아니라 **연주 이벤트와 제어 정보**다.

```text
Note On / Note Off
Pitch
Start Time
Duration
Velocity
Channel
Control Change
Pitch Bend
```

같은 MIDI 파일도 어떤 Virtual Instrument를 연결하느냐에 따라 Piano, Strings, Synth 등 전혀 다른 소리가 날 수 있다.

## 2. MIDI와 Audio

```text
MIDI = 무엇을 언제 어떻게 연주할지
Audio = 실제로 발생한 소리의 파형
```

MIDI 단계에서는 음높이·길이·악기 교체가 쉽고, Audio 단계에서는 녹음된 질감과 실제 사운드를 직접 다룬다.

## 3. Note / Velocity / Duration
Velocity는 단순 Volume 값으로만 보지 않는다. 악기에 따라 Attack, Timbre, Sample Layer가 달라질 수 있다. Duration 역시 Staccato/Legato와 Phrase의 인상을 바꾼다.

## 4. CC와 Pitch Bend
Sustain pedal, Modulation, Expression 같은 연속 제어는 특히 Orchestra나 표현력이 큰 Virtual Instrument에서 중요하다.

## 5. 실습
4마디 멜로디 하나를 MIDI로 입력하고:
- Pitch만 바꾼 버전
- Velocity만 바꾼 버전
- Duration만 바꾼 버전
- Instrument만 바꾼 버전
을 비교한다.

## DohaStudio 연결
### CURRENT
현재 DohaMusic을 Note-level MIDI editor로 설명하지 않는다.

### TARGET
향후 편집 가능한 MIDI Track이 존재한다면 NoteEvent와 CC 같은 구조화된 이벤트가 Composition의 일부가 될 수 있다.

## 완료 체크
- [ ] MIDI와 Audio 차이를 설명할 수 있다.
- [ ] Velocity와 Volume을 동일시하지 않는다.
- [ ] 같은 MIDI에 다른 악기를 연결해 보았다.
