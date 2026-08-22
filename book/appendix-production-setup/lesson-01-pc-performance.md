# Lesson 01 — PC와 작업 성능 이해

## 목표
음악 작업에서 CPU, RAM, GPU, Storage가 각각 무엇을 담당하는지 이해하고 병목을 구분한다.

## 1. CPU
실시간 Audio processing, Software Instrument, Plugin chain, DAW 계산에서 중요하다. Core 수뿐 아니라 single-core 성능과 안정성이 중요할 수 있다.

## 2. RAM
대용량 Sample library, 여러 Plugin, DAW와 AI 도구를 동시에 사용할 때 작업 여유와 관련된다. RAM이 부족하면 swap/pagefile 사용이 늘어 체감 성능이 급격히 떨어질 수 있다.

## 3. GPU
일반 DAW 작업의 핵심은 아니지만 AI Music/Audio/Vocal 모델을 로컬에서 실행할 때 중요하다. VRAM 한계는 모델 크기, batch, precision에 직접 영향을 준다.

## 4. Storage
SSD는 Project load, Sample streaming, cache, model loading에서 중요하다. OS/앱, Project, Sample library, AI Dataset/Artifact를 논리적으로 분리하면 관리가 쉬워진다.

## 5. 병목 구분

```text
Playback crackle under heavy plugins → CPU / buffer 가능성
Large orchestral template loads slowly → RAM / storage 가능성
AI model OOM → GPU VRAM 가능성
Project/sample load slow → storage 가능성
```

## 6. 업그레이드 원칙
벤치마크 숫자보다 실제 작업에서 막히는 지점을 먼저 찾는다. 음악 작업과 AI 학습/추론을 같은 기준으로 보지 않는다.

## 내 환경 기록

```text
CPU:
RAM:
GPU / VRAM:
System drive:
Project drive:
Sample drive:
Main DAW:
Main AI workloads:
Observed bottleneck:
```

## 완료 기준
- [ ] CPU/RAM/GPU/Storage 역할을 구분한다.
- [ ] 내 작업의 현재 병목을 하나 이상 추정했다.
- [ ] 필요 없는 업그레이드를 먼저 하지 않는다.
