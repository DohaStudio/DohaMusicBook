# Part 00 — Start Here

## 이 책을 사용하는 방법

이 책의 목표는 음악 이론을 읽고 끝내는 것이 아니다. 하나의 개념을 다음 순환으로 반복한다.

```text
배운다
  ↓
기성곡에서 듣는다
  ↓
직접 작곡한다
  ↓
DohaStudio에서 표현/생성/재생한다
  ↓
결과를 듣고 평가한다
  ↓
코드와 데이터 구조를 확인한다
  ↓
부족한 음악 지식 또는 제품 기능을 기록한다
  ↓
다시 만든다
```

## 1차 학습 — 곡을 만들 수 있게 되기

1. Song Form
2. Rhythm
3. Diatonic Harmony와 기본 Chord Progression
4. Melody와 Motif
5. Lyrics와 Prosody
6. Arrangement와 Sound
7. 짧은 Demo 한 곡 완성

목표는 이론 암기가 아니라 Verse–Pre-Chorus–Chorus가 있는 곡을 직접 설계하는 것이다.

## 2차 학습 — 곡을 더 좋게 만들기

1. Chord Function / Harmonic Rhythm
2. Non-Chord Tone
3. Motif Development
4. Reharmonization
5. Section Contrast
6. Groove
7. Layering / Timbre / Register
8. Mix 기초

목표는 `왜 이 곡이 약하게 들리는가`를 음악 용어로 설명하고 수정하는 것이다.

## 3차 학습 — AI와 함께 만들기

1. Reference Analysis
2. Structured Music Intent
3. Prompt/Condition
4. Candidate Generation
5. Listening Review
6. Variation / Regeneration
7. Human Editing
8. Similarity / Rights / Provenance

목표는 AI의 첫 결과를 완성곡으로 받아들이지 않고 여러 후보를 만들고 사람이 판단·수정하는 것이다.

## 4차 학습 — DohaStudio 코드 이해

음악 개념을 실제 시스템에 연결한다.

- `DohaMusic` — Project/Composition/Asset/Artifact/Job와 사용자 작업 공간
- `DohaLM` — 언어 기반 창작·분석을 지원하는 LLM Provider
- `DohaAudio` — 음악 생성·Stem·Audio Analysis Provider 영역
- `DohaVocal` — Singing/Voice Conversion/Correction Provider 영역

코드를 공부할 때는 구현 기술보다 먼저 `이 객체가 음악 제작 과정의 무엇을 나타내는가?`를 묻는다.

## 공부 완료 기준

한 Chapter는 다음 네 가지를 할 수 있을 때 완료한다.

- 개념을 내 말로 설명할 수 있다.
- 실제 곡에서 귀로 찾을 수 있다.
- 직접 간단한 예제를 만들 수 있다.
- DohaStudio에서 현재 어디까지 표현/사용할 수 있는지 설명할 수 있다.

## 첫 번째 목표곡

처음부터 완벽한 곡을 만들지 않는다. 첫 Demo는 다음만 만족하면 된다.

- Music Intent 1개
- 명확한 Song Form
- 하나의 중심 Motif
- 기본 Chord Progression
- Verse와 Chorus의 대비
- 최소한의 Arrangement
- 가사 또는 Instrumental 목적 명시
- WAV 결과를 끝까지 듣고 평가 기록 작성

이 Demo를 Part가 진행될 때마다 다시 수정해 같은 곡이 어떻게 발전하는지 기록한다.
