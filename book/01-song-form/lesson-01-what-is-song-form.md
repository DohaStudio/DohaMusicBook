# Lesson 01 — Song Form이란 무엇인가

## 학습 목표

곡을 한 덩어리의 오디오가 아니라 시간 위에 배열된 Section의 흐름으로 이해한다. 이 Lesson을 마치면 Intro, Verse, Pre-Chorus, Chorus, Bridge, Outro를 듣고 대략적인 경계를 표시할 수 있어야 한다.

## 1. Song Form의 역할

Song Form은 곡의 기승전결을 설계하는 구조다. 같은 멜로디와 코드도 어느 위치에 놓이는지에 따라 역할이 달라진다. Verse에 놓인 8마디는 이야기를 전개하는 재료가 될 수 있고, Chorus의 8마디는 곡의 핵심 정체성과 Hook을 담당할 수 있다.

대표적인 Pop 구조의 한 예는 다음과 같다.

```text
Intro → Verse 1 → Pre-Chorus → Chorus
      → Verse 2 → Pre-Chorus → Chorus
      → Bridge → Final Chorus → Outro
```

이 순서는 규칙이 아니라 출발점이다. 구조를 외우는 것보다 각 Section이 무엇을 준비하고 무엇을 해결하는지를 듣는 것이 중요하다.

## 2. 시간과 마디로 생각하기

Song Form은 초 단위와 마디 단위 두 방식으로 기록할 수 있다.

```text
00:00 Intro
00:12 Verse 1
00:38 Pre-Chorus
00:52 Chorus
```

또는

```text
Bars 1–4 Intro
Bars 5–12 Verse 1
Bars 13–20 Pre-Chorus
Bars 21–28 Chorus
```

초 단위 기록은 현재 DohaMusic Timeline으로 분석하기 쉽고, 마디 단위 기록은 이후 MIDI·편곡·작곡 단계에 유리하다.

## 3. Section 경계를 찾는 단서

Section이 바뀔 때 다음 중 하나 이상이 변하는 경우가 많다.

- 새로운 악기가 들어오거나 빠진다.
- 드럼 패턴이 바뀐다.
- 코드 진행 또는 코드 변화 속도가 달라진다.
- 보컬 음역과 리듬이 달라진다.
- 가사의 기능이 이야기에서 핵심 메시지로 바뀐다.
- 음량, 밀도, 스테레오 폭, 공간감이 달라진다.

한 가지 변화만 보고 단정하지 말고 여러 단서를 함께 듣는다.

## 4. 첫 듣기 실습

좋아하는 곡 한 곡을 선택한다. 첫 번째 재생에서는 곡을 멈추지 말고 '뭔가 바뀌었다'고 느껴지는 시간을 메모한다. 두 번째 재생에서는 그 지점의 앞뒤 5~10초를 반복해서 듣고 무엇이 달라졌는지 적는다.

```text
Track:
0:00–     Section guess:
Change heard:
Reason:
Confidence: low / medium / high
```

## 5. DohaStudio에서 보기

### CURRENT

현재 DohaMusic `develop`의 Composition Read Workspace에서는 선택된 CompositionSnapshot을 Timeline에서 재생하고 playhead, seek, zoom, Track lane과 duration을 확인할 수 있다.

따라서 현재 단계에서는 Section을 자동 편집하지 않고, playhead 시간을 사용해 직접 Section Map을 작성한다.

### TARGET

향후 Section Domain/UI가 구현되면 Intro, Verse, Chorus 같은 구간을 Composition의 구조화된 정보로 직접 표현할 수 있다. 현재는 TARGET이며 사용 가능한 기능으로 기록하지 않는다.

## 6. 완료 체크

- Song Form과 Song Section의 차이를 설명할 수 있다.
- 초 단위로 한 곡의 Section 경계를 적을 수 있다.
- Section 경계에서 무엇이 변했는지 최소 세 가지 관점으로 설명할 수 있다.
- 현재 DohaMusic Timeline을 구조 분석 도구로 사용할 수 있다.
