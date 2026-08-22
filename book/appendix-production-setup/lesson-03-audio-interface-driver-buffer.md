# Lesson 03 — Audio Interface, Driver, Buffer

## 목표
Recording latency와 Playback stability의 관계를 이해하고 작업 단계에 맞는 설정을 선택한다.

## 1. Audio Interface
Microphone/Instrument 입력을 Digital Audio로 변환하고, DAW의 Audio를 Headphone/Speaker로 출력한다. 입력 수, preamp, driver 안정성, latency, monitoring 방식이 중요하다.

## 2. Driver
Windows 환경에서는 DAW가 사용하는 전용 low-latency driver 경로를 확인한다. 장치마다 지원 방식이 다르므로 제조사 공식 driver와 DAW 설정을 우선한다.

## 3. Buffer Size
작은 Buffer는 Recording latency를 줄이지만 CPU 부담과 crackle 위험을 높일 수 있다. 큰 Buffer는 안정적이지만 실시간 연주/녹음 latency가 커질 수 있다.

```text
Recording → 비교적 낮은 buffer
Heavy mixing/mastering → 더 높은 buffer 허용
```

정확한 숫자는 Interface, Driver, Sample Rate, Project 부하에 따라 결정한다.

## 4. Sample Rate와 Project 일관성
Interface, OS, DAW Project의 Sample Rate가 불필요하게 충돌하지 않는지 확인한다. 변환은 목적과 시점을 명확히 한다.

## 5. Direct Monitoring
Interface가 지원한다면 입력 신호를 DAW round-trip 없이 직접 들을 수 있다. 대신 DAW effect를 포함한 monitoring과 무엇이 다른지 이해한다.

## Trouble Log

```text
Interface:
Driver/version:
Sample rate:
Buffer:
Round-trip issue:
Crackle/dropout:
Project CPU load:
Fix attempted:
Result:
```

## 완료 기준
- [ ] Buffer와 latency의 trade-off를 설명한다.
- [ ] Recording/Mixing에서 설정을 다르게 할 수 있음을 안다.
- [ ] 문제가 생겼을 때 driver/buffer/sample-rate를 확인한다.
