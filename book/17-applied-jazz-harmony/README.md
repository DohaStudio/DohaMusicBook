# Part 17 — Applied & Jazz Harmony

> 목표: Part 03의 기초·중급 화성을 기반으로 대리화음, 확장 도미넌트, 디미니쉬드, 텐션, 어베일러블 노트 스케일, 페달 포인트, 턴어라운드, 블루스, 보이싱, 모달 화성 등을 실제 작곡과 편곡에 적용한다.

## 용어 기준
Part 03과의 연결을 위해 기본 기능 표기는 `Tonic (T) / Predominant (PD) / Dominant (D)`를 기준으로 한다. 재즈 화성학 문헌에서 Predominant 영역을 넓게 `Subdominant (SD) family`라고 부르는 문맥이 있으므로, 그런 경우에는 두 용어의 관계를 명시한다.

## 선행 학습
Part 03 Harmony를 먼저 공부한다. 특히 다음 내용을 이해한 뒤 시작한다.

- Key / Scale / Interval
- Triad / Seventh Chord Quality
- Diatonic Chord
- Chord Function / Cadence
- Secondary Dominant
- ii–V
- Tritone Substitution
- Modal Interchange
- Inversion / Bass movement

## 공부 순서
1. [Lesson 01 — Functional Harmony Review & Chord Substitution](lesson-01-functional-review-substitution.md)
2. [Lesson 02 — Subdominant Minor & Tonic Substitution](lesson-02-subdominant-minor-tonic-substitute.md)
3. [Lesson 03 — Diminished Chord](lesson-03-diminished-chord.md)
4. [Lesson 04 — Minor Harmony](lesson-04-minor-harmony.md)
5. [Lesson 05 — Tension, Non-Chord Tone, Line Cliché](lesson-05-tension-nonchord-line-cliche.md)
6. [Lesson 06 — Extended Dominants & Progression Development](lesson-06-extended-dominants-progression.md)
7. [Lesson 07 — Deceptive Cadence & Modulation](lesson-07-deceptive-cadence-modulation.md)
8. [Lesson 08 — Available Note Scale](lesson-08-available-note-scale.md)
9. [Lesson 09 — Pedal Point, Slash Chord, Turnaround](lesson-09-pedal-slash-turnaround.md)
10. [Lesson 10 — Blues & Blue Notes](lesson-10-blues-blue-notes.md)
11. [Lesson 11 — Applied Harmony Analysis](lesson-11-applied-harmony-analysis.md)
12. [Lesson 12 — AI Harmony Candidate Evaluation](lesson-12-ai-harmony-evaluation.md)
13. [Lesson 13 — Guide Tones와 Jazz Voicing](lesson-13-guide-tones-voicing.md)
14. [Lesson 14 — Altered Dominant와 Upper Structure](lesson-14-altered-dominant-upper-structures.md)
15. [Lesson 15 — Tritone Substitution과 Substitute ii–V](lesson-15-tritone-sub-ii-v.md)
16. [Lesson 16 — Modal Harmony와 Modal Jazz](lesson-16-modal-jazz.md)

## 핵심 원칙
재즈 화성학을 `복잡한 코드 이름 암기`로 공부하지 않는다.

```text
기능
→ 목표 chord
→ bass movement
→ guide tones
→ tension
→ melody compatibility
→ voice leading
→ voicing / register
→ section role
```

이 순서로 듣고 판단한다.

## Ear Training과 연결
[`examples/harmony-ear-training/`](../../examples/harmony-ear-training/README.md)에서 다음을 실제 MIDI로 비교한다.

- Cadence
- Major / Minor ii–V–I
- Block / Guide Tone / Shell Voicing
- Tritone Substitution
- Altered Dominant
- Aeolian / Dorian

## 실습 원칙
각 Lesson에서 최소 한 번은 다음을 한다.

```text
1. 건반 또는 MIDI로 직접 입력
2. 원형과 변형을 A/B 비교
3. Melody note와 충돌/해결 확인
4. Bass movement 기록
5. Guide tone / tension / voicing 확인
6. 실제 곡의 Section 역할과 연결
```

## 학습 완료 기준
- Substitution을 기능과 Bass movement로 설명한다.
- Minor ii–V–i와 Diminished 사용을 설명한다.
- Guide Tone과 Shell/Drop/Open Voicing을 비교한다.
- Altered Dominant tension을 resolution target과 연결한다.
- Tritone Substitution의 guide-tone 공유와 chromatic bass를 설명한다.
- Modal Harmony와 Functional Harmony를 구분한다.
- Available Note Scale을 Melody context에서 판단한다.
- AI Harmony Candidate를 KEEP / EDIT / REHARM / REGENERATE로 평가한다.

## DohaStudio 연결
이 Part는 향후 `ChordEvent`, `ChordFunction`, `BassNote`, `Voicing`, `GuideTone`, `Tension`, `AvailableScale`, `MelodyCandidateEvaluation` 같은 structured music data를 설계할 때 음악적 근거가 된다. 현재 구현된 schema라고 가정하지 않는다.
