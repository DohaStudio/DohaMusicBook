# Lesson 03 — Lyrics Lab과 Voice 사용하기

## 학습 목표
- `/lyrics`를 Part 05 작사 공부와 연결한다.
- `/voice`에서 Voice Enrollment와 작품 Vocal을 구분한다.
- Provider 제약과 권리 범위를 확인한다.

## 1. Lyrics Lab
현재 Lyrics Lab은 생성·검증·조회·revision 흐름을 공부하는 화면이다. Frontend는 특정 LLM SDK나 Tokenizer를 직접 알지 않고 Backend 계약을 사용한다.

작업할 때 다음을 기록한다.

```text
Concept:
Verse role:
Chorus message:
Hook phrase:
Syllable issue:
Prosody issue:
AI cliché:
Revision request:
```

AI가 생성한 문장을 그대로 확정하지 않고 사람이 실제로 읽고 불러본다.

## 2. Lyrics Revision
수정 요청은 가능한 한 구체적으로 적는다.

나쁜 예:
```text
더 좋게 해줘
```

좋은 예:
```text
Chorus 첫 줄은 유지하고, 두 번째 줄의 음절 수를 줄이며
추상적인 '빛/꿈' 표현을 구체적인 장면으로 바꾼다.
```

수정 전후 버전을 보존하고 어떤 이유로 선택했는지 남긴다.

## 3. Voice 화면
현재 Voice는 동의된 WAV upload, Voice Profile list/get/delete, Studio 선택을 위한 로컬 MVP다. 원본 파일 경로는 일반 Frontend에 공개되지 않는다.

## 4. Enrollment Sample의 의미
Voice Profile용 Enrollment Sample은 작품용 Recording Take가 아니다.

```text
Voice Enrollment Sample
≠ Recording Take
≠ Vocal Training Dataset
≠ AI Generated Vocal
```

Upload했다는 이유만으로 학습이나 공개 권한이 생기지 않는다.

## 5. Voice 실습
Voice Profile을 등록할 때 다음을 확인한다.

```text
Whose voice:
Consent scope:
Purpose:
Source WAV:
Can use for generation:
Can use for training:
Can publish:
Deletion requirement:
```

현재 실제 Singing Voice/Voice Conversion Production 모델이 연결됐다고 가정하지 않는다.

## 6. Lyrics와 Voice를 함께 볼 때
가사는 Vocal의 실제 발음과 음역을 고려해야 한다. Lyrics 화면에서 만든 결과를 Part 05의 Prosody, Breath, Range 관점으로 다시 검토한다.

## 완료 체크
- [ ] 가사를 생성한 뒤 직접 revision했다.
- [ ] 음절·Prosody 문제를 최소 하나 찾았다.
- [ ] Voice Enrollment Sample의 목적을 설명한다.
- [ ] Voice 사용 동의와 Training 동의를 구분한다.
