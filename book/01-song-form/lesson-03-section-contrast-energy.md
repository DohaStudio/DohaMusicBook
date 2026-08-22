# Lesson 03 — Section Contrast와 Energy Curve

## 학습 목표

곡이 평평하게 들리는 이유를 Section 간 대비 부족으로 진단하고, Energy Curve를 이용해 곡 전체의 움직임을 설계한다.

## 1. 대비를 만드는 요소

Section Contrast는 단순히 Chorus를 더 크게 만드는 것이 아니다. 다음 요소를 조합해 대비를 만든다.

- 음역: 낮음 ↔ 높음
- 리듬 밀도: 여백 ↔ 촘촘함
- 화성: 안정 ↔ 긴장
- 악기 수: 얇음 ↔ 두꺼움
- 다이내믹: 작음 ↔ 큼
- 보컬: 말하듯 ↔ 길고 강한 음가
- 스테레오 폭: 좁음 ↔ 넓음
- Texture: 건조함 ↔ 풍성함

때로는 Chorus 직전 악기를 제거하는 것이 오히려 Chorus를 더 크게 느끼게 한다.

## 2. Energy Curve

곡의 각 Section에 1~10의 상대적인 에너지 값을 임시로 부여한다.

```text
Intro       3
Verse 1     4
Pre         6
Chorus      8
Verse 2     5
Pre         7
Chorus      8
Bridge      5
Final       10
Outro       3
```

숫자 자체가 정답은 아니다. 중요한 것은 증가·감소·정체 구간을 눈으로 확인하는 것이다.

## 3. 에너지를 올리는 방법

- 음역을 올린다.
- Kick/Snare의 존재감을 강화한다.
- Sub/Bass를 추가한다.
- Harmonic Rhythm을 빠르게 한다.
- Layer를 추가한다.
- 보컬 Double/Harmony를 추가한다.
- 리듬의 Syncopation 또는 Drive를 강화한다.

## 4. 에너지를 낮추는 방법

- 드럼을 제거하거나 단순화한다.
- 악기 수를 줄인다.
- 낮은 음역으로 이동한다.
- 긴 음가를 사용한다.
- 공간을 넓히고 밀도를 낮춘다.
- 반복되는 요소를 잠시 멈춘다.

## 5. 실습

좋아하는 곡 한 곡을 선택하고 다음 형식으로 기록한다.

```text
Section:
Energy 1–10:
What increased energy:
What reduced energy:
Most important contrast:
```

그 다음 자신의 Demo Song에 대해 재생 전 Energy Curve를 먼저 설계한다. 실제 생성/작곡 후 예상과 다르게 들린 부분을 별도로 표시한다.

## DohaStudio 연결

### CURRENT

현재 Timeline Playback을 사용해 실제 재생 시간과 Section 경계를 확인할 수 있다.

### STUDY

Energy Curve는 현재 별도 제품 기능이 아니라 공부용 분석 값이다. 책에서는 분석 노트로 기록하고, 향후 데이터 모델로 필요성이 검증될 때 제품 요구사항 후보로 전환한다.

### TARGET 후보

```text
SectionAnalysis
- start_time
- end_time
- energy_score
- density
- register
- transition_type
```

이 구조는 학습을 위한 설계 후보이며 현재 구현을 의미하지 않는다.
