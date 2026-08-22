# Lesson 02 — Studio에서 곡 생성 Workflow 사용하기

## 학습 목표
- `/studio`를 현재 DohaMusic의 핵심 생성 진입점으로 사용한다.
- Preset, Mood, Structured Options, Lyrics, Voice, Review 단계를 음악 개념과 연결한다.
- 현재 지원되지 않는 설정을 억지로 사용하지 않는다.

## 1. 현재 기본 제작 흐름
Frontend 문서 기준 기본 순서는 다음과 같다.

```text
음악 스타일
→ 가사
→ 내 목소리
→ 최종 확인
→ 음악 만드는 중
→ 완성
```

K-POP Structured Workflow에서는 다음처럼 더 구체화된다.

```text
Preset
→ Mood / Concept
→ Structured Options
→ Prompt Preview
→ Length
→ Lyrics
→ Voice
→ Review
```

## 2. Preset과 Mood
K-POP Preset은 Dance, Easy Listening, Performance처럼 큰 제작 방향을 빠르게 잡는 용도다. Preset을 곡의 절대 정답으로 보지 않고 Part 01~06에서 공부한 Song Form, Rhythm, Melody, Arrangement 관점과 연결한다.

Mood는 최대 3개를 선택하는 현재 UX를 기준으로 한다. 너무 많은 감정 키워드를 동시에 넣어 방향을 흐리지 않는다.

## 3. Structured Options
현재 K-POP 옵션은 다음과 같은 제작 의도를 Prompt에 반영하는 방향이다.

- 목표 BPM
- 언어 비율
- Hook
- Post-Chorus
- Dance Break
- Vocal Energy

이 값은 완성된 음악 구조를 직접 편집하는 DAW 데이터가 아니라 생성 목표다. 예를 들어 `Hook=true`가 실제로 좋은 Hook을 보장하지는 않는다.

## 4. 길이
현재 기본 UX는 30초·60초처럼 실제 지원 범위를 우선한다. 긴 곡이나 세부 설정이 UI에서 비활성이라면 기능이 없는 상태를 문서에서도 그대로 유지한다.

## 5. 최종 Review
Generate 전에 다음을 확인한다.

```text
Genre/Preset:
Mood:
Concept:
Tempo target:
Hook target:
Lyrics selected:
Voice selected:
Rights/consent issue:
```

음악 공부에서는 추가로 적는다.

```text
Expected song form:
Expected groove:
Expected chorus energy:
Expected vocal range/style:
```

## 6. 생성 후 평가를 미리 설계한다
Generate 버튼을 누르기 전에 무엇을 평가할지 정한다.

```text
Primary criterion: Chorus hook
Secondary criterion: Groove
Reject if: vocal pronunciation is badly broken
```

이렇게 해야 결과가 나온 뒤 단순히 '좋다/별로다'로 판단하지 않는다.

## 7. CURRENT와 TARGET
### CURRENT
- 현재 Studio 생성 Workflow
- K-POP Preset/Structured Options
- Lyrics/Voice 연결
- Pipeline 시작

### TARGET
- Track/Clip 직접 편집
- Candidate A/B 전용 비교 UI
- Reference Panel
- MIDI/Piano Roll
- 완성형 AI Music Director

## 완료 체크
- [ ] Studio에서 하나의 생성 요청을 구성했다.
- [ ] 각 설정이 어떤 음악적 목표인지 설명한다.
- [ ] 생성 전에 평가 기준을 정했다.
- [ ] Prompt 목표와 실제 편집 데이터를 구분한다.
