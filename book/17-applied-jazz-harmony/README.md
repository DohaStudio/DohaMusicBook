# Part 17 — Applied & Jazz Harmony

> 목표: Part 03의 기초·중급 화성을 기반으로 대리화음, 확장 도미넌트, 디미니쉬드, 텐션, 어베일러블 노트 스케일, 페달 포인트, 턴어라운드, 블루스 등을 실제 작곡과 편곡에 적용한다.

## 선행 학습
Part 03 Harmony를 먼저 공부한다. 특히 다음 내용을 이해한 뒤 시작한다.

- Key / Scale
- Diatonic Chord
- Chord Function
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
→ section role
```

이 순서로 듣고 판단한다.

## 실습 원칙
각 Lesson에서 최소 한 번은 다음을 한다.

```text
1. 건반 또는 MIDI로 직접 입력
2. 원형과 변형을 A/B 비교
3. Melody note와 충돌/해결 확인
4. Bass movement 기록
5. 실제 곡의 Section 역할과 연결
```

## DohaStudio 연결
이 Part는 향후 `ChordEvent`, `ChordFunction`, `BassNote`, `Voicing`, `Tension`, `AvailableScale`, `MelodyCandidateEvaluation` 같은 structured music data를 설계할 때 음악적 근거가 된다. 현재 구현된 schema라고 가정하지 않는다.
