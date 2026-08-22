# Lesson 03 — Compression과 Dynamics

## 학습 목표
- Compressor의 목적을 '크게 만들기'로만 이해하지 않는다.
- Threshold, Ratio, Attack, Release의 관계를 듣는다.
- Section dynamics를 보존하면서 안정성을 높인다.

## 1. Compressor가 하는 일
일정 기준을 넘는 신호의 레벨 변화를 제어한다. 결과적으로 Peak control, Sustain, density, character 등에 영향을 줄 수 있다.

## 2. 핵심 파라미터
- Threshold: 처리가 시작되는 기준
- Ratio: 기준을 넘은 신호를 얼마나 줄일지
- Attack: 얼마나 빨리 반응할지
- Release: 얼마나 빨리 원래 상태로 돌아갈지
- Makeup Gain: 처리 후 레벨 보정

## 3. Attack과 Groove
Attack이 너무 빠르면 Transient가 사라져 Drum의 타격감이 약해질 수 있다. 느린 Attack은 일부 Transient를 통과시킬 수 있다. 항상 장르와 소스에 따라 듣고 판단한다.

## 4. Release와 Pumping
Release가 음악의 리듬과 맞지 않으면 숨 쉬듯 흔들리거나 Pumping이 생길 수 있다. Pumping이 문제일 수도 있고 의도적 효과일 수도 있다.

## 5. Level Matching
처리 후 더 커졌다는 이유만으로 더 좋다고 판단하지 않는다. Makeup Gain을 조절해 가능한 한 비슷한 체감 음량에서 bypass 비교한다.

## 6. 실습
Vocal 또는 Drum 하나를 골라 세 설정을 비교한다.

```text
A: bypass
B: gentle control
C: obvious compression
```

기록:
```text
Transient:
Sustain:
Clarity:
Pumping:
Musical fit:
```

## 7. DohaStudio 연결
향후 Audio processing/effect chain을 다룰 때 파라미터 값뿐 아니라 적용 대상, 순서, 버전, 결과 Artifact를 추적할 필요가 있다. AI가 추천한 설정도 최종 판단은 청취를 통해 한다.

## 완료 체크
- [ ] Compressor 주요 파라미터를 설명한다.
- [ ] Attack/Release 변화가 소리에 미치는 영향을 들었다.
- [ ] Level-matched A/B를 했다.
