# Part 05 — Lyrics & Vocal: 말이 노래가 되는 구조

> 학습 목표: 좋은 문장을 쓰는 것과 좋은 가사를 쓰는 것의 차이를 이해하고, 음절·강세·호흡·보컬 음역을 멜로디와 연결한다.

## 1. 가사는 음악 안에서 작동하는 문장이다

가사는 글로 읽었을 때만 좋아서는 부족하다. 실제로 노래했을 때 발음이 자연스럽고, 박자와 강세가 맞고, 기억되는 문장이 있어야 한다.

가사를 볼 때 다음 세 층으로 나눈다.

```text
Meaning  — 무엇을 말하는가
Sound    — 어떻게 발음되는가
Rhythm   — 음악 안에서 언제 놓이는가
```

## 2. Concept과 Story

먼저 한 문장으로 곡의 핵심을 적는다.

```text
Concept: 멀어진 사람을 붙잡지 않고 보내주는 밤
```

그 다음 장면을 만든다.

- 누가
- 언제
- 어디서
- 무엇을
- 어떻게
- 왜

추상적인 감정어만 쓰기보다 구체적인 이미지가 있으면 가사가 살아난다.

## 3. Verse와 Chorus의 가사 역할

Verse는 장면과 이야기를 전개한다. Chorus는 곡의 핵심 메시지를 반복해 기억시킨다. Bridge는 새로운 시점이나 결론을 제시할 수 있다.

따라서 Chorus 가사는 Verse보다 반드시 더 복잡할 필요가 없다. 오히려 짧고 명확한 문장이 Hook이 되기도 한다.

## 4. Syllable

멜로디의 Note 수와 가사의 음절 수는 밀접하다. 한국어는 한 음절이 비교적 명확하게 분리되므로 음절 배치가 중요하다.

예시:

```text
너를 다시 만나면
너 / 를 / 다 / 시 / 만 / 나 / 면
```

어떤 음절을 길게 늘일지, 어떤 음절을 짧게 지나갈지 실제로 불러보며 결정한다.

## 5. Prosody

Prosody는 말의 자연스러운 억양과 음악적 강세가 어울리는지 보는 개념이다. 중요한 단어가 약박에 묻히거나 조사만 강하게 들리면 어색해질 수 있다.

체크 포인트:

- 중요한 명사/동사가 강한 위치에 있는가?
- 조사나 어미가 불필요하게 강조되는가?
- 말의 자연스러운 억양과 멜로디 방향이 충돌하는가?
- 문장 중간의 호흡 위치가 의미를 끊어버리지 않는가?

## 6. Rhyme과 반복

한국어에서도 같은 모음, 비슷한 종결 어미, 반복되는 발음 구조를 이용해 통일감을 만들 수 있다. 영어 가사에서는 Rhyme을 더 직접적으로 활용할 수 있다.

그러나 의미 없는 운율을 위해 문장을 억지로 만들지 않는다.

## 7. AI 가사의 흔한 문제

AI가 만든 가사에는 다음 문제가 반복될 수 있다.

- 지나치게 추상적인 감정어
- 밤, 별, 빛, 꿈 같은 소재의 반복
- 의미는 비슷한데 표현만 바뀐 문장
- 실제 말투와 먼 문어체
- 모든 줄이 비슷한 길이
- Chorus가 Verse보다 덜 기억나는 구조

AI 초안은 완성본이 아니라 편집 재료로 본다.

## 8. Vocal Range

멜로디가 좋아도 실제 Vocal Range와 맞지 않으면 곡을 부르기 어렵다. 최저음·최고음뿐 아니라 가장 오래 머무는 Tessitura도 중요하다.

Section별로 다음을 기록한다.

```text
Verse: comfortable mid range
Pre: gradual rise
Chorus: higher tessitura
Final Chorus: optional climax
```

## 9. Register와 Expression

가슴성, 두성, 믹스 등 보컬 Register와 발성 강도는 곡의 감정선에 영향을 준다. 같은 Note라도 부드럽게 부르는지, 강하게 밀어내는지, breathy하게 처리하는지에 따라 결과가 달라진다.

## 10. Harmony Vocal과 Ad-lib

Lead Vocal만으로 곡이 끝나는 것은 아니다. Chorus의 Harmony, Double, Ad-lib은 후반 에너지를 크게 바꿀 수 있다.

공부할 때 다음을 구분한다.

- Lead
- Double
- Upper/Lower Harmony
- Response phrase
- Ad-lib

## 11. 직접 작사 실습

### Exercise A — 장면 만들기

한 감정 단어를 고른다. 예: `그리움`.

이 단어를 직접 쓰지 않고 4줄의 장면으로 표현한다.

### Exercise B — Chorus Hook

7~12음절 안에서 핵심 문장을 만든다. 세 번 반복해서 불러보고 발음이 자연스러운지 확인한다.

### Exercise C — 같은 의미 다른 Prosody

같은 문장을 두 가지 리듬으로 만들어 어느 쪽이 말의 강세와 더 잘 맞는지 비교한다.

## 12. DohaStudio와 연결

### DohaLM

DohaLM은 재사용 가능한 LLM Provider다. DohaMusic에서 가사 아이디어, Music Intent, Revision Plan 등의 언어 작업을 지원하는 방향으로 연결할 수 있지만 현재 실제 DohaMusic integration은 별도 프로젝트의 진행 상태를 확인해야 한다.

### DohaVocal

DohaVocal은 Singing Voice, Voice Conversion, Pitch/Timing Correction 등을 담당하는 Provider 방향이다. 현재 실제 AI Singing Voice와 Production 모델은 미구현이고 Runtime Foundation/Fake Provider가 중심이다.

### 중요한 경계

Voice Enrollment Sample, Recording Take, Vocal Training Dataset, AI Generated Vocal은 서로 다른 엔티티다. 학습용 책에서도 이를 섞어 쓰지 않는다.

## 13. 현재 프로그램으로 공부하기

`/lyrics`에서 생성/편집한 가사를 다음 기준으로 직접 점검한다.

```text
Concept clarity:
Verse scene:
Chorus hook:
Syllable count:
Awkward stress:
Breath point:
AI cliché:
Words to rewrite:
```

`/voice`는 음성 등록과 Vocal workflow의 제품 경계를 이해하는 용도로 공부한다. 현재 존재하지 않는 Singing Voice 기능은 사용법으로 작성하지 않는다.

## 14. 이 장을 끝냈다면

- Concept과 Story를 구분해 가사를 설계할 수 있다.
- 음절 수와 Melody Rhythm의 관계를 확인할 수 있다.
- Prosody가 어색한 부분을 찾아낼 수 있다.
- AI 가사의 클리셰를 수정할 수 있다.
- Vocal Range와 Section Energy의 관계를 이해한다.
- DohaLM/DohaVocal이 음악 제작에서 담당하는 경계를 설명할 수 있다.
