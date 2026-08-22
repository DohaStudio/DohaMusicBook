# Lesson 01 — Reference Analysis: 레퍼런스를 복제하지 않고 분해한다

## 학습 목표
- 레퍼런스를 아티스트 이름이 아니라 음악 요소로 분석한다.
- BPM, Song Form, Groove, Melody, Arrangement, Sound를 구조적으로 기록한다.
- 분석 결과를 이후 AI Condition 설계에 연결한다.

## 1. 레퍼런스의 목적
레퍼런스는 '똑같이 만들기 위한 대상'이 아니라 원하는 결과를 설명하기 위한 관찰 자료다. 특정 곡의 표면적 특징을 그대로 복제하기보다 어떤 음악적 요소가 인상을 만드는지 분해한다.

## 2. 분석 항목
```text
BPM / Tempo feel
Meter
Key / Tonality
Song Form
Section length
Groove
Chord movement
Melody contour
Hook type
Instrumentation
Density
Vocal character
Energy curve
Mix texture
```

모든 값을 완벽하게 채보할 필요는 없다. 처음에는 귀로 확인 가능한 것부터 적고 나중에 수정한다.

## 3. 5회 듣기 방법
같은 곡을 역할별로 나눠 듣는다.

1. 전체 구조만 듣기
2. Rhythm/Bass만 듣기
3. Melody/Vocal만 듣기
4. Arrangement/Sound만 듣기
5. Section transition과 Energy만 듣기

## 4. 추상어를 음악 속성으로 바꾸기
`세련된`, `강렬한`, `몽환적인` 같은 말만 적지 않는다.

예:
```text
몽환적
→ soft attack pad
→ long reverb tail
→ sparse percussion
→ narrow melodic motion
→ sustained harmony
```

## 5. 분석 템플릿
```text
Reference:
Purpose of reference:
BPM:
Meter:
Key/Tonality:
Form:
Main groove:
Hook:
Melody contour:
Verse density:
Chorus density:
Vocal character:
Transition idea:
Production texture:
What NOT to copy:
```

## 6. DohaStudio 연결
### CURRENT
현재 DohaMusic은 생성 결과와 Composition/Artifact를 재생·비교하는 학습 기반으로 사용할 수 있다.

### TARGET
향후 ReferenceAnalysis가 구조화된다면 여러 분석 항목과 confidence, source lineage를 함께 보존하는 것이 중요하다. 이 Lesson의 템플릿은 학습용이며 현재 구현 schema라고 가정하지 않는다.

## 완료 체크
- [ ] 레퍼런스 한 곡을 최소 5회 역할별로 들었다.
- [ ] 추상적인 표현 세 개를 음악 속성으로 바꿨다.
- [ ] 복제하지 않을 요소를 명시했다.
