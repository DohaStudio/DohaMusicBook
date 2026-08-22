# Lesson 06 — Song Form을 직접 설계하고 DohaStudio에서 확인하기

## 학습 목표

한 곡의 구조를 먼저 설계한 뒤 현재 DohaMusic 기능으로 결과를 재생·검토하고, 제품에 없는 기능은 TARGET으로 분리해 기록한다.

## 1. Music Intent부터 시작하기

```text
Working title:
Purpose:
Target listener:
Genre:
Mood:
Target length:
Reference traits to study:
```

Song Form은 목적과 청취 상황을 반영해야 한다.

## 2. Section Map 작성

예시:

```text
Intro        4 bars   Energy 3
Verse 1      8 bars   Energy 4
Pre-Chorus   8 bars   Energy 6
Chorus       8 bars   Energy 8
Verse 2      8 bars   Energy 5
Pre-Chorus   8 bars   Energy 7
Chorus       8 bars   Energy 8
Bridge       8 bars   Energy 5
Final Chorus 8 bars   Energy 10
Outro        4 bars   Energy 3
```

각 Section에는 한 줄의 역할을 추가한다.

```text
Verse 1: 이야기와 핵심 상황 제시
Pre: 긴장 상승
Chorus: 제목과 핵심 Hook 제시
Bridge: 새로운 시점과 Final 준비
```

## 3. 대비 계획

Verse와 Chorus를 비교한다.

| 항목 | Verse | Chorus |
|---|---|---|
| Melody range |  |  |
| Rhythm density |  |  |
| Harmonic tension |  |  |
| Instrument layers |  |  |
| Vocal intensity |  |  |
| Stereo width |  |  |

## 4. 현재 DohaMusic으로 확인하기

### CURRENT

DohaMusic에서는 Project/Composition 결과를 Timeline에서 재생하면서 playhead와 seek를 사용해 실제 구조를 확인할 수 있다. 생성 결과가 설계와 다르면 시간과 Section을 직접 기록한다.

```text
Planned Chorus start: 0:52
Actual Chorus-like section: 0:47
Difference: -5 sec
Why it matters: Pre-Chorus가 예상보다 짧아 긴장 축적이 부족함
```

## 5. 현재 없는 기능을 구분하기

다음은 이 Lesson의 작곡 목표와 관련되지만 현재 사용 가능한 완성 기능으로 간주하지 않는다.

- Section marker 직접 편집
- WorkingComposition 기반 Track/Clip 전체 편집
- MIDI/Piano Roll
- Section 단위 AI regeneration
- SoundFont engine

이런 요구가 실제 공부 과정에서 반복해서 필요하면 `TARGET requirement`로 기록한다.

## 6. 공부 기록을 제품 요구사항으로 변환하기

```text
Music problem:
Pre-Chorus가 너무 짧아서 Chorus 진입이 급함.

Current workaround:
재생 시간을 메모하고 다음 생성에서 prompt/condition을 수정.

Desired product capability:
Section range 선택 + Pre-Chorus 재생성/연장.

Status:
TARGET — not implemented.
```

## 7. Part 01 최종 과제

하나의 Demo Song에 대해 다음 네 가지를 완성한다.

1. Music Intent
2. Section Map
3. Energy Curve
4. 실제 생성/재생 결과와 계획의 차이 분석

이 네 문서가 완성되면 Part 02 Rhythm으로 이동한다.
