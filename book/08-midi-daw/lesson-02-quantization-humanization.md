# Lesson 02 — Quantization과 Humanization

## 학습 목표
- Grid와 Quantize의 관계를 이해한다.
- 정확함과 Groove를 구분한다.
- Timing, Velocity, Duration을 의도적으로 조절한다.

## 1. Quantization
Quantize는 Note timing을 Grid에 맞추는 도구다. 1/4, 1/8, 1/16 등 subdivision과 함께 사용한다.

100% Quantize가 항상 좋은 것은 아니다. Drum, Bass, Vocal-like MIDI, Piano 등 역할마다 필요한 정확도가 다르다.

## 2. Strength와 Swing
DAW에 따라 Quantize Strength, Swing, Groove Template 등을 제공한다. 목표는 '틀린 것을 자동 수정'하는 것이 아니라 원하는 리듬 문법에 맞추는 것이다.

## 3. Humanization
Humanization은 무작위 오차가 아니다.

```text
Timing variation
Velocity contour
Duration variation
Phrase-level accent
Repeated-note variation
```

같은 패턴을 사람이 연주한 것처럼 느끼게 하려면 악기 역할과 Groove를 유지해야 한다.

## 4. 비교 실습
하나의 4마디 패턴을 만든다.

```text
A: 100% grid + same velocity
B: 100% grid + velocity variation
C: slight timing variation + velocity contour
D: swing/groove applied
```

각 버전의 정확성, 자연스러움, 추진력, 장르 적합성을 기록한다.

## DohaStudio 연결
향후 MIDI editing이 구현되면 Quantize는 destructive overwrite보다 편집 이력과 원본 상태를 보존하는 방식이 중요하다. 현재 구현된 기능으로 가정하지 않는다.

## 완료 체크
- [ ] Quantize와 Humanize를 반대말처럼 단순화하지 않는다.
- [ ] 같은 MIDI를 네 버전으로 비교했다.
- [ ] 어떤 변화가 Groove를 개선했는지 설명할 수 있다.
