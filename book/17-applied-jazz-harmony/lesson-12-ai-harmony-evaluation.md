# Lesson 12 — AI Harmony Candidate Evaluation

## 목표
AI가 만든 화성을 '복잡해서 좋다/단순해서 나쁘다'로 평가하지 않고 실제 음악 기능과 편집 가능성으로 판단한다.

## 1. Candidate Review 기준
```text
Key / tonal center
Functional clarity
Bass movement
Voice leading
Harmonic rhythm
Tension / resolution
Melody compatibility
Section contrast
Originality / cliché balance
Editability
```

## 2. Non-Diatonic Chord 판정
AI가 조성 밖 chord를 만들면 다음 중 무엇인지 먼저 분류한다.

- Secondary dominant
- Related ii–V
- Modal interchange
- Diminished connection
- Tritone substitute
- Tonicization/modulation
- 설명되지 않는 accidental/chord error

이론 이름이 붙는다고 자동으로 좋은 화성은 아니다. 음악적 목적에 기여해야 한다.

## 3. Available Note 관점
Melody candidate의 note를 단순 scale membership으로만 거르지 않는다.

```text
Chord:
Melody note:
Metric position:
Duration:
Role: chord tone / tension / non-chord tone
Resolution:
Result:
```

## 4. Edit / Regenerate 판단
```text
KEEP       = 기능과 감정이 목적에 맞음
EDIT       = 진행은 좋고 voicing/bass/tension만 수정 필요
REHARM     = melody는 좋고 harmony 재설계 필요
REGENERATE = form/intent 자체가 무너짐
```

## 5. DohaStudio Target
향후 structured evaluation이 있다면 다음 정보가 유용할 수 있다.

```text
ChordEvent
Function
TargetChord
BassNote
GuideToneMotion
Tensions
AvailableNoteContext
SectionRole
HumanDecision
```

이는 학습용 목표 모델이며 현재 구현 계약이 아니다.

## 최종 실습
동일 Music Intent의 AI 후보 3개를 선택해 Harmony Review를 수행한다. 가장 복잡한 후보가 아니라 **가장 명확하게 목적을 수행하면서 사람이 발전시킬 수 있는 후보**를 선택한다.
