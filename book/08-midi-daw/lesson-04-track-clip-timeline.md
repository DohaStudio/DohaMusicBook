# Lesson 04 — Track, Clip, Timeline, Transport

## 학습 목표
- DAW의 핵심 편집 단위를 구분한다.
- Track과 Clip의 역할을 설명한다.
- Timeline, Playhead, Transport, Automation의 관계를 이해한다.

## 1. Track
Track은 역할별 작업 공간이다. Vocal, Drum, Bass, Keys처럼 음악적 역할이나 신호 흐름에 따라 나눌 수 있다.

## 2. Clip
Clip은 Timeline 위에 놓이는 구체적인 Audio/MIDI 단위다. 같은 Track에 여러 Clip이 존재할 수 있고, 위치와 길이가 다를 수 있다.

## 3. Timeline과 Playhead
Timeline은 곡의 시간 구조를 보여주고 Playhead는 현재 재생 위치를 나타낸다. Seek, Zoom, Loop Range는 편집과 청취의 기본 도구다.

## 4. Transport
Play, Pause, Stop, Record, Loop, Metronome 같은 재생/녹음 제어를 Transport로 본다.

## 5. Automation
Volume, Pan, Effect Parameter 등을 시간에 따라 변화시킨다. Automation은 Mix 기능이면서 Arrangement Energy를 만드는 도구이기도 하다.

## 6. 실습
외부 DAW에서 다음 구조를 만든다.

```text
Drum Track  — 2 MIDI Clips
Bass Track  — 1 MIDI Clip
Keys Track  — 2 MIDI Clips
Vocal Track — 1 Audio Clip
```

Clip을 복사·이동·길이 조절하고 원본 Audio/MIDI 파일과 Timeline 배치가 별개라는 점을 확인한다.

## DohaStudio 연결
### CURRENT
DohaMusic에는 읽기 전용 Timeline, Track lane, Playhead, Seek, Zoom, WAV playback 기반이 존재한다.

### TARGET
완전한 Clip move/trim/split, Track editing, Automation, Loop editing 등은 구현 상태를 확인한 뒤 문서화한다. 책에서는 현재 사용할 수 있는 기능과 목표 기능을 분리한다.

## 완료 체크
- [ ] Track과 Clip을 구분한다.
- [ ] Timeline/Playhead/Transport 역할을 설명한다.
- [ ] Clip 배치와 원본 Asset이 별개임을 이해한다.
