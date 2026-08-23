# Lesson 09 — Audio Physics for Producers

## 학습 목표
- Frequency, Amplitude, Phase, Harmonics를 청감과 연결한다.
- dBFS, Headroom, Clipping, Noise Floor를 작업 레벨 관점에서 이해한다.
- Masking과 Mono Compatibility를 편곡·믹싱 판단에 연결한다.
- Sample Rate, Aliasing, Latency, Buffer의 기본 직관을 익힌다.

## 1. Frequency와 Spectrum
Frequency는 신호의 반복 속도이며 Hz로 표현한다. Pitch와 관련되지만 실제 악기와 보컬의 음색은 하나의 주파수만으로 만들어지지 않는다.

Fundamental과 여러 partial/harmonic, noise component가 함께 timbre를 만든다. 모든 partial이 반드시 정수배 harmonic인 것은 아니다.

## 2. Amplitude와 dBFS
Amplitude는 신호 크기와 관련된다. Digital Audio에서는 level을 dBFS로 표현하는 경우가 많고 0 dBFS는 digital full scale의 상한을 나타낸다.

Peak level과 perceived loudness는 같은 개념이 아니다.

## 3. Phase와 Polarity
Polarity inversion은 신호의 부호를 뒤집는 동작이고 Phase relationship은 시간과 주파수에 따른 두 신호의 상대적 관계를 포함하는 더 넓은 개념이다. 둘을 같은 말로 취급하지 않는다.

유사한 신호를 여러 layer나 microphone으로 합치면 일부 주파수가 강화되거나 약해질 수 있다.

## 4. Mono Compatibility
Stereo에서 넓게 들리는 소리가 Mono 합산에서 약해질 수 있다. 특히 widening, short delay, multi-mic, 유사 layer를 사용할 때 확인한다.

Mono compatibility는 stereo 차이를 없애는 것이 아니라 핵심 정보가 합산 후 무너지지 않는지 확인하는 과정이다.

## 5. Headroom과 Clipping
Headroom은 현재 신호와 시스템의 최대 level 사이의 여유다. Digital clipping은 표현 가능한 범위를 넘을 때 왜곡을 만든다.

Gain staging은 모든 track을 하나의 숫자에 맞추는 규칙이 아니라 processing chain에서 불필요한 overload와 level bias를 관리하는 과정이다.

## 6. Noise Floor
Recording에서는 원하는 신호와 background/self-noise의 관계가 중요하다. 너무 낮게 녹음한 신호를 크게 증폭하면 noise도 함께 커질 수 있다. 반대로 clipping을 피하려고 신호를 극단적으로 작게 받을 필요도 없다.

## 7. Frequency Masking
비슷한 register와 spectrum을 가진 소리가 동시에 강하면 서로를 가릴 수 있다.

해결 순서를 EQ 하나로 고정하지 않는다.

```text
Arrangement
→ Register
→ Rhythm
→ Level
→ Pan
→ Timbre
→ EQ
```

## 8. Sample Rate와 Nyquist 직관
Sample Rate는 초당 sampling 횟수다. Nyquist frequency는 sample rate의 절반이며 sampling 가능한 bandwidth에 한계가 있다는 직관을 익힌다.

숫자를 무조건 높이는 것보다 project 전체에서 적절한 규격과 processing 요구를 관리한다.

## 9. Aliasing
Sampling/processing 가능한 범위를 넘어선 고주파 성분이 audible band에 잘못 나타날 수 있는 현상을 aliasing이라고 한다.

일부 nonlinear processor는 oversampling을 사용한다. 무조건 최고 설정을 선택하기보다 CPU/latency와 audible benefit을 비교한다.

## 10. Latency와 Buffer
작은 buffer는 monitoring latency를 줄이는 데 유리하지만 시스템 부담이 커질 수 있고, 큰 buffer는 heavy mixing에서 안정성에 유리할 수 있지만 연주/녹음 반응이 늦어질 수 있다.

적정값은 audio interface, driver, CPU, project load에 따라 달라진다.

## 11. 실습
```text
1. Sine/Saw/Square를 같은 pitch로 비교한다.
2. 유사한 두 signal을 합치며 phase/polarity 변화의 청감 차이를 확인한다.
3. Stereo widening 전후를 Mono로 비교한다.
4. Masking을 EQ보다 먼저 register/arrangement 변경으로 해결해 본다.
5. Buffer를 바꾸고 monitoring latency와 안정성을 비교한다.
6. Limiter 전후를 가능한 한 level-matched A/B한다.
```

## DohaStudio 연결
Waveform, spectrum, peak, loudness, sample rate, channel 같은 측정값은 음악적 판단을 돕는 데이터다. 측정값 하나만으로 음악의 품질을 자동 결정하지 않는다.

## 완료 체크
- [ ] Frequency/Amplitude/Phase를 구분한다.
- [ ] Fundamental과 harmonic/partial을 설명한다.
- [ ] Polarity와 Phase를 같은 개념으로 쓰지 않는다.
- [ ] Headroom/Clipping/Noise Floor를 설명한다.
- [ ] Masking을 arrangement와 mixing 양쪽에서 본다.
- [ ] Nyquist/Aliasing의 기본 직관을 설명한다.
- [ ] Buffer와 Latency의 trade-off를 설명한다.
