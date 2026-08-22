# Lesson 06 — AI 결과를 사람이 수정하는 DAW Workflow

## 학습 목표
- AI 생성 결과를 완성본이 아니라 편집 재료로 본다.
- MIDI와 Audio 수정의 장단점을 비교한다.
- DohaMusic의 CURRENT/TARGET 경계를 유지하며 실제 학습 절차를 만든다.

## 1. AI 생성 후 무엇을 고치는가
AI 결과가 전체적으로 좋더라도 일부 Section, Melody, Chord, Rhythm, Instrument, Vocal, Mix가 약할 수 있다.

```text
Generate
→ Select candidate
→ Find weakest section
→ Decide MIDI-level / Audio-level / Regenerate
→ Edit
→ Compare A/B
→ Preserve lineage
```

## 2. MIDI-level 수정이 유리한 경우
- Melody note 교체
- Chord voicing 변경
- Rhythm timing 수정
- Instrument 교체
- Velocity/CC 수정

## 3. Audio-level 수정이 유리한 경우
- Trim / Fade
- Gain
- Timing correction
- EQ / Compression
- FX
- 이미 좋은 performance의 보존

## 4. Regeneration이 유리한 경우
구조나 성능이 근본적으로 어긋나 있고 수정 비용이 과도할 때는 전체 또는 Section 단위 재생성이 더 효율적일 수 있다.

## 5. Editing Decision Record
매 수정마다 이유를 남긴다.

```text
Source candidate:
Problem:
Musical reason:
Chosen action: MIDI edit / audio edit / regenerate
Change:
A/B result:
Keep or revert:
```

## 6. DohaStudio CURRENT
현재 DohaMusic에서는 생성 결과, Project/Composition/Artifact 계보, Timeline playback과 후보 비교를 중심으로 공부한다. MIDI/Piano Roll 및 완전한 Clip Editing을 이미 사용할 수 있는 것처럼 쓰지 않는다.

## 7. DohaStudio TARGET
장기적으로는 다음 흐름이 중요하다.

```text
Generated Artifact
→ Editable Composition
→ Track / Clip
→ MIDI or Audio edit
→ New Version / Snapshot
→ Evaluation
→ Selected Final Artifact
```

원본을 덮어쓰기보다 Version/Lineage를 보존해야 AI 생성과 Human Editing의 관계를 추적할 수 있다.

## 8. Part 08 최종 실습
하나의 AI 생성 결과를 골라 다음을 기록한다.

```text
Best section:
Weakest section:
What I would edit in MIDI:
What I would edit in Audio:
What I would regenerate:
Required future DohaMusic feature:
```

외부 DAW에서 실제로 가능한 수정 하나를 수행하고 Before/After를 비교한다.

## 완료 체크
- [ ] MIDI edit / Audio edit / Regenerate를 구분한다.
- [ ] 하나의 AI 결과에 Editing Decision Record를 작성했다.
- [ ] 현재 DohaMusic 기능과 미래 DAW 기능을 구분한다.
