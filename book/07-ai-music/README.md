# Part 07 — AI Music: 생성보다 설계와 선별이 중요하다

> 학습 목표: AI 음악을 '프롬프트 한 줄 → 완성곡'으로 이해하지 않고 Reference Analysis, Condition Design, Candidate Generation, Human Review, Revision의 반복 과정으로 본다.

## 1. AI 음악 제작의 기본 흐름

```text
Intent
→ Reference Analysis
→ Structured Conditions
→ Generate Candidates
→ Listen / Compare
→ Select
→ Revise / Regenerate
→ Human Edit
→ Evaluate
→ Finalize
```

핵심은 생성 횟수보다 판단 기준이다. 좋은 결과를 얻으려면 무엇을 원하는지 구조화하고 여러 후보를 비교할 수 있어야 한다.

## 2. Prompt와 Condition

단순한 장르명만으로는 음악의 방향을 충분히 통제하기 어렵다. 다음 요소를 분리해 생각한다.

- Genre
- Mood
- Tempo/Feel
- Song Form
- Instrumentation
- Vocal character
- Energy curve
- Production texture
- Negative constraints

예를 들어 `K-pop`이라는 한 단어보다 `mid-tempo, restrained verse, rising pre-chorus, large melodic chorus, punchy drums, bright synth layers`처럼 시간적 변화까지 포함하면 의도가 더 분명하다.

## 3. Reference Analysis

레퍼런스는 복제 대상이 아니라 분석 대상이다. 특정 아티스트 이름을 그대로 따라 하기보다 특징을 속성으로 분해한다.

```text
BPM:
Key/tonality:
Song form:
Groove:
Main instrumentation:
Melody contour:
Chorus density:
Vocal character:
Energy curve:
Mix texture:
```

이 분석을 통해 '왜 이 곡이 이런 느낌인가'를 언어와 구조로 바꾼다.

## 4. Candidate Generation

AI 결과 한 개를 정답으로 보지 않는다. 같은 Intent에서 여러 Candidate를 만들고 비교한다.

예:

```text
Lyrics A × Condition 1 → Candidate 1, 2, 3, 4
```

네 곡 중 하나를 고를 수도 있고, 각 곡의 장점을 조합해 다음 Generation/Editing 방향을 만들 수도 있다.

## 5. 1차 Screening

첫 10~20초에서 다음을 빠르게 확인한다.

- 사운드가 깨지거나 불안정하지 않은가?
- 장르 방향이 맞는가?
- Vocal/Instrument quality가 즉시 거슬리지 않는가?
- 첫 Hook/Intro가 의도에 맞는가?

명백히 실패한 후보만 제거한다.

## 6. 2차 Listening Review

남은 후보는 전체를 들으며 점수를 기록한다.

| 항목 | 질문 |
|---|---|
| Melody | 기억되는 Motif가 있는가? |
| Harmony | 감정 흐름이 자연스러운가? |
| Rhythm | Groove가 살아 있는가? |
| Structure | Section 대비가 충분한가? |
| Sound | 깨짐·불균형이 없는가? |
| Vocal | 발음·프레이징이 자연스러운가? |
| Originality | 레퍼런스에 과도하게 기대지 않는가? |
| Intent Fit | 처음 목표와 맞는가? |

## 7. Regeneration과 Partial Revision

문제가 곡 전체에 있다고 가정하지 않는다.

```text
좋은 Verse + 약한 Chorus
```

라면 전체를 폐기하기보다 Chorus를 다시 만들거나 구조를 수정하는 방식이 더 효율적이다. 장기적으로 AI-native DAW에서 중요한 기능도 `whole-song regenerate`보다 Section/Range 단위 수정이다.

## 8. AI와 Human Editing

AI 결과는 완성본이 아니라 편집 가능한 재료로 본다. 사람이 다음을 수정할 수 있어야 한다.

- Song Form
- Chord
- Melody
- Lyrics
- Instrument choice
- Section density
- Mix balance
- Vocal timing/pitch

AI의 강점은 후보 탐색 속도이고, 인간의 강점은 맥락·취향·목적을 판단하는 것이다.

## 9. Similarity와 권리

레퍼런스를 사용했다는 사실과 복제할 권리가 있다는 것은 다르다. Similarity 분석도 법적 표절 판정을 자동으로 대신하지 않는다. 높은 유사성이 발견되면 사람이 다시 검토하고 수정하는 신호로 사용한다.

## 10. DohaStudio와 연결

### DohaMusic

사용자 Intent, Project, Composition, Job, 후보 선택, Artifact lineage와 최종 Workspace 상태를 소유하는 Orchestrator다.

### DohaLM

언어 기반 Intent/Lyrics/Prompt/Revision 지원 Provider 방향이다.

### DohaAudio

Music Generation, Stem, Audio/Reference Analysis Provider 방향이다.

### DohaVocal

Singing Voice, Voice Conversion, Correction Provider 방향이다.

Provider끼리 직접 호출하지 않고 DohaMusic이 흐름을 조정하는 것이 현재 공식 경계다.

## 11. CURRENT와 TARGET 구분

현재 DohaMusic에는 기본 Mock Provider, 선택적 로컬 Adapter 기반, 생성 Job/결과/History/Project 흐름 등이 있지만 실제 DohaAudio/DohaLM Production transport와 완성형 Reference Analysis, Composition Evaluation, Learning Candidate 연결은 아직 목표 영역이 포함되어 있다.

책에서는 다음 식으로 표시한다.

```text
CURRENT     실제 사용 가능/검증됨
FOUNDATION  계약·도메인·Mock/Fake 기반 존재
TARGET      장기 설계/미구현
```

## 12. 현재 프로그램으로 실습

같은 목표로 후보를 여러 번 생성했다면 `/history`와 `/result/[jobId]`에서 비교한다.

```text
Intent: powerful but emotional K-pop chorus
Candidate A: 7/10
Candidate B: 5/10
Candidate C: 8/10

Why C:
- clearest 4-note hook
- stronger pre→chorus lift
- vocal pronunciation acceptable
- drum texture fits target

Revision:
- shorten intro
- reduce chorus high-frequency density
```

## 13. 이 장을 끝냈다면

- 레퍼런스를 속성으로 분해할 수 있다.
- Prompt와 Music Condition을 구분해서 생각할 수 있다.
- 여러 AI 후보를 동일한 기준으로 평가할 수 있다.
- 전체 재생성과 부분 수정의 차이를 이해한다.
- DohaStudio 네 저장소의 AI 제작 역할을 설명할 수 있다.
