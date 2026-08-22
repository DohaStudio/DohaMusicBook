# Part 08 — MIDI & DAW: 음악 아이디어를 편집 가능한 데이터로 바꾼다

> 학습 목표: MIDI와 Audio의 차이를 이해하고, DAW에서 사람이 실제로 수정할 수 있는 정보가 무엇인지 배운다.

## 공부 순서

1. [Lesson 01 — MIDI Data](lesson-01-midi-data.md)
2. [Lesson 02 — Quantization과 Humanization](lesson-02-quantization-humanization.md)
3. [Lesson 03 — Piano Roll Editing](lesson-03-piano-roll-editing.md)
4. [Lesson 04 — Track, Clip, Timeline, Transport](lesson-04-track-clip-timeline.md)
5. [Lesson 05 — Virtual Instrument, Plugin, Sample, SoundFont](lesson-05-virtual-instrument-soundfont.md)
6. [Lesson 06 — AI 결과를 사람이 수정하는 DAW Workflow](lesson-06-ai-human-editing-dohastudio.md)
7. [Lesson 07 — MIDI Customization Workflow](lesson-07-midi-customization-workflow.md)

## 이 Part의 핵심 흐름

```text
MIDI Data
→ Quantize / Humanize
→ Piano Roll
→ Track / Clip / Timeline
→ Virtual Instrument / SoundFont
→ MIDI Customization
→ Audio Render
→ Human Editing Decision
→ Version / Evaluation
```

MIDI는 소리가 아니라 연주 정보다. DAW 학습의 목표는 버튼 위치를 외우는 것이 아니라 `어떤 음악 정보가 어디에서 수정되는지` 이해하는 것이다.

## MIDI와 Audio를 구분한다

| MIDI | Audio |
|---|---|
| 연주 이벤트 | 실제 파형 |
| Pitch/Duration 수정 용이 | 파형 편집 중심 |
| 악기 교체 용이 | 녹음된 음색 보존 |
| Virtual Instrument 필요 | 바로 재생 가능 |

실제 제작에서는 둘을 경쟁 관계로 보지 않고 단계별로 함께 사용한다.

## Chord Progression 실습과 연결
Part 03에서 배운 Harmony를 [`examples/chord-progressions/`](../../examples/chord-progressions/README.md) Starter Set으로 옮겨 실제 MIDI에서 수정한다.

```text
Harmony 이해
→ MIDI 입력
→ Tempo / Velocity / Duration
→ Voicing / Inversion / Transpose
→ Timbre
→ A/B Listening
```

## 직접 만들 최종 결과

Part 08을 끝낼 때 `study/midi-daw/`에 다음 기록을 만들 수 있다.

```text
01-midi-event-practice.md
02-quantize-humanize-comparison.md
03-piano-roll-exercise.md
04-track-clip-timeline-map.md
05-instrument-render-comparison.md
06-sound-source-license-log.md
07-midi-customization-log.md
08-ai-editing-decision-record.md
09-product-gap-notes.md
```

## DohaStudio 연결 원칙

### CURRENT
현재 DohaMusic에는 읽기 전용 Timeline, Track lane, WAV playback, Playhead, Seek, Zoom 기반이 있다. 이 기능을 이용해 Composition의 시간 구조와 생성 결과를 공부한다.

### FOUNDATION / TARGET
완전한 Track/Clip Editing, MIDI Track, Piano Roll, Mixer/Automation, SoundFont Engine, Virtual Instrument hosting 등은 실제 구현 상태를 확인하기 전까지 현재 사용 가능 기능으로 적지 않는다.

향후 중요한 데이터 흐름은 다음과 같다.

```text
Generated Artifact
→ Editable Composition
→ Track / Clip
→ MIDI or Audio edit
→ New Version / Snapshot
→ Evaluation
→ Final Artifact
```

AI 생성 결과를 사람이 수정하더라도 원본과 수정본의 Lineage를 보존하는 것이 중요하다.

## Part 08 완료 기준

- MIDI와 Audio를 구분한다.
- Note/Velocity/Duration/CC를 설명한다.
- Quantize와 Humanize를 실제로 비교한다.
- Piano Roll에서 Melody/Chord/Drum MIDI를 수정한다.
- Track/Clip/Timeline/Transport 관계를 설명한다.
- 동일 MIDI를 여러 Virtual Instrument로 Render한다.
- Tempo/Velocity/Duration/Transpose/Voicing을 한 변수씩 바꾸어 A/B한다.
- SoundFont/Sample Library의 라이선스를 기록한다.
- AI 결과에 MIDI edit, Audio edit, Regenerate 중 무엇이 필요한지 판단한다.
- 현재 DohaMusic과 목표 DAW 기능을 구분한다.
