# Lesson 03 — DohaLM: 언어 작업과 음악 Intent를 분리해서 읽는다

## 학습 목표
- DohaLM을 음악 앱이 아니라 재사용 LLM Provider로 이해한다.
- Lyrics, Intent, Revision 같은 언어 작업과 Audio/MIDI 생성을 분리한다.
- 모델 artifact와 Runtime 상태를 구분한다.

## 1. DohaLM의 공식 역할
현재 develop README 기준 DohaLM은 최종 사용자 애플리케이션이 아니라 reusable LLM model provider다.

주요 산출물은 다음 계열이다.

- Foundation/fine-tuned model 또는 Adapter
- Inference runtime
- REST/Streaming API
- Python SDK
- Model Manifest/versioning
- Integration Guide

DohaMusic은 별도 Reference Application이다.

## 2. 음악에서 맡길 수 있는 언어 작업

```text
Music Intent 정리
Lyrics 초안/수정
Prompt/Condition 설명 생성
Reference 분석 결과의 언어화
Revision Plan 작성
```

DohaLM은 직접 Audio waveform이나 MIDI Note를 생성하는 음악 Provider로 보지 않는다.

## 3. 현재 상태 읽기
현재 README에는 DohaLM-Tiny Foundation Base의 baseline, Candidate C의 blocked 상태, Adapter Runtime code, REST/SSE MVP 등 서로 다른 단계가 함께 존재한다. 따라서 `code exists`와 `approved model artifact available`을 분리해서 본다.

예:

```text
Runtime code implemented
≠ approved model artifact available
≠ DohaMusic production integration complete
```

## 4. 학습 질문
가사 기능을 읽을 때 다음을 추적한다.

```text
Input text/schema:
Prompt construction:
Model/adapter selection:
Inference call:
Output schema:
Validation:
Consumer-side human review:
Version/manifest evidence:
```

## 5. 음악 개념과 연결
Part 05에서 배운 Concept, Story, Syllable, Prosody를 LLM 출력 품질 기준으로 사용한다. LLM이 자연스러운 문장을 만들었다고 실제로 부르기 좋은 가사라는 뜻은 아니다.

## 6. 실습
같은 Chorus 목적에 대해 LLM 후보 3개를 만들었다고 가정하고 다음을 기록한다.

```text
Intent:
Candidate A:
Candidate B:
Candidate C:
Best semantic fit:
Best prosody:
Cliché risk:
Human rewrite:
Reason:
```

## 완료 체크
- [ ] DohaLM의 Provider 경계를 설명한다.
- [ ] Language generation과 Music generation을 구분한다.
- [ ] Runtime code와 승인된 model artifact 상태를 구분한다.
- [ ] Lyrics 결과를 음악 기준으로 평가할 수 있다.
