# Lesson 07 — Sampling, Synthesis, Layering

## 학습 목표
- Sample과 Virtual Instrument의 역할을 구분한다.
- Loop를 그대로 소비하지 않고 편곡 재료로 다룬다.
- Chopping과 resampling의 기본 사고를 익힌다.
- Layering에서 각 소리의 역할을 정의한다.

## 1. Sampling
Sample은 녹음된 Audio 재료다. One-shot, loop, texture 등 형태가 다르다. 사용 전 라이선스와 재배포/상업 이용 범위를 확인한다.

## 2. Drum Sampler
Kick/Snare/Hat one-shot을 pad/note에 배치하고 Part 02에서 만든 Pattern을 재생한다. Pattern이 같아도 Sample 선택으로 Groove의 무게와 texture가 달라지는지 비교한다.

## 3. Loop
Loop를 Tempo에 맞춘 뒤 원본 그대로 사용한 버전과 일부를 mute/rearrange한 버전을 비교한다. Loop가 곡 전체를 지배하지 않도록 Song Form과 Section role을 먼저 정한다.

## 4. Chopping
Audio를 작은 구간으로 나누고 순서를 재배치한다. 목적은 특정 시대를 복제하는 것이 아니라 새로운 rhythm/phrase를 만드는 편집 기법을 익히는 것이다.

## 5. 나만의 Instrument
짧은 Audio를 sampler에 넣고 pitch mapping, envelope, filter를 조절해 playable instrument로 만든다. 원본 sample의 권리는 그대로 확인해야 한다.

## 6. Synthesizer
Oscillator → Filter → Envelope → Modulation의 기본 신호 흐름을 익힌다. Preset 이름보다 어떤 parameter가 timbre를 만드는지 듣는다.

## 7. Layering
두 소리를 섞을 때 각각의 역할을 적는다.

```text
Layer A: transient / attack
Layer B: body
Layer C: texture / width
```

같은 역할을 무작정 겹치면 masking과 headroom 문제가 생길 수 있다.

## 실습
- Drum one-shot 세트로 4마디 Beat
- Loop를 최소 2가지 방식으로 재편집
- Sample 하나로 playable instrument
- Synth preset 하나를 직접 수정
- 2~3 Layer sound를 만들고 각 역할 기록

## DohaStudio 연결
Sample/SoundFont/Virtual Instrument를 프로그램에 통합할 때는 파일 자체뿐 아니라 source, license, preset/parameter, render lineage를 함께 관리해야 한다.
