# Lesson 04 — Harmonic Rhythm, Bass, Inversion

## 학습 목표
- 코드 종류와 코드 변경 속도를 분리해서 듣는다.
- Bass line이 진행의 인상을 바꾸는 이유를 이해한다.
- Inversion으로 연결을 부드럽게 만든다.

## 1. Harmonic Rhythm
Harmonic Rhythm은 Tempo가 아니라 **화음이 바뀌는 속도**다.

```text
A | C      | Am     | F      | G      |
B | C  Am  | F  G   | C  Am  | F  G   |
```

같은 Tempo에서도 B는 화성 사건이 더 자주 발생한다. Pre-Chorus에서 변경 빈도를 높이면 에너지 상승에 기여할 수 있다.

## 2. Bass가 만드는 진행
같은 Chord Symbol이라도 Bass가 달라지면 무게 중심과 연결감이 달라진다. Root만 반복하는 버전과 순차적인 Bass line을 만드는 버전을 비교한다.

## 3. Inversion
C/E는 C Major chord지만 E가 Bass에 있다. 전위형은 코드 기능을 완전히 다른 코드로 바꾸기 위한 것이라기보다 Voice Leading과 Bass 흐름을 다듬는 데 자주 사용된다.

## 4. 직접 실습
한 진행을 세 버전 만든다.

```text
A: 한 마디에 한 코드
B: 일부 마디에서 두 코드
C: A와 같은 코드지만 inversion으로 bass line 수정
```

비교 항목:
- 속도감
- 긴장도
- Bass의 노래하는 느낌
- Chorus 진입 효과

## 5. DohaStudio 연결
향후 ChordEvent가 존재한다면 `start`, `duration`, `bass_note`, `inversion`을 별도 표현해야 Harmonic Rhythm과 Bass movement를 보존할 수 있다. 단순 코드 문자열 배열만으로는 시간 정보를 잃는다.

## 완료 체크
- [ ] Harmonic Rhythm과 BPM 차이를 설명할 수 있다.
- [ ] 같은 코드 진행의 변경 속도를 바꿔 보았다.
- [ ] Inversion으로 Bass line을 수정했다.
