# Lesson 06 — AI Melody Candidate 평가와 DohaStudio 학습

## 학습 목표
AI 생성 결과를 멜로디 관점에서 비교하고, 현재 DohaMusic에서 가능한 학습 절차와 향후 편집 기능을 구분한다.

## 1. Candidate Review는 취향 기록이 아니다
`좋다/별로다` 대신 다음 항목을 기록한다.

```text
Candidate:
Section:
Main motif:
Repeated rhythm:
Contour:
Range:
Largest leap:
Climax position:
Tension point:
Resolution point:
Hook memorability:
Verse/Chorus contrast:
Decision:
```

## 2. 1차와 2차 평가
1차에서는 Chorus 첫 10~20초를 듣고 기억성, 어색한 도약, 흐름을 빠르게 판단한다. 2차에서는 전체 Section 관계와 Harmony, Lyrics, Arrangement와의 충돌까지 본다.

## 3. CURRENT
현재 DohaMusic에서는 생성 결과의 Audio를 재생하고 Timeline의 시간 위치를 확인하며 후보와 Artifact/Composition 관계를 공부할 수 있다. 완성형 MIDI Track, Piano Roll, Melody Note Editor는 현재 사용 기능으로 설명하지 않는다.

## 4. TARGET
향후 편집 가능한 Melody 모델에서는 다음과 같은 표현이 필요할 수 있다.

```text
Phrase
  └─ NoteEvent[]
       ├─ pitch
       ├─ start
       ├─ duration
       ├─ velocity
       └─ lyric_syllable

MotifRelation
Contour
Range
Climax
SectionRole
Generation/Edit Lineage
```

이 예시는 학습용 목표 모델이며 최신 DohaMusic Domain/ADR보다 우선하지 않는다.

## 5. Part 04 최종 과제
Verse–Pre-Chorus–Chorus를 위한 Melody Plan을 만든다.

```text
Main motif:
Verse range:
Verse contour:
Pre tension strategy:
Chorus range:
Hook rhythm:
Largest intentional leap:
Climax:
Resolution:
Non-chord tone idea:
```

그 후 AI Candidate 3개 이상을 같은 표로 평가하고, 한 후보를 선택하거나 `none`을 선택할 수 있다.

## 6. 완료 체크
- [ ] AI 후보를 Melody 용어로 비교했다.
- [ ] 단순 취향과 음악적 이유를 분리해 적었다.
- [ ] CURRENT/TARGET 기능을 구분했다.
- [ ] 최종 Melody Plan을 작성했다.
