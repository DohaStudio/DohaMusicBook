# Lesson 07 — Non-Chord Tone과 Linear Melody

## 학습 목표
- Non-Chord Tone을 단순한 `틀린 음`으로 보지 않는다.
- 음이 어디에서 와서 어디로 가는지에 따라 대표적인 melodic function을 구분한다.
- Chord Tone과 Non-Chord Tone을 이용해 tension/release를 설계한다.
- Melody와 Voice Leading을 연결한다.

## 1. Chord Tone과 Non-Chord Tone
현재 순간의 harmony에 포함되는 음을 Chord Tone으로, 포함되지 않는 음을 Non-Chord Tone으로 볼 수 있다.

그러나 실제 음악에서는 Non-Chord Tone이 melody의 방향, groove, expression을 만드는 핵심 재료다.

중요한 질문:

```text
이 음은 어디서 왔는가?
강박/약박 중 어디에 있는가?
어디로 움직이는가?
해결되는가, 유지되는가, 새 harmony가 되는가?
```

## 2. Passing Tone
두 구조음 사이를 순차적으로 연결한다.

```text
C → D → E
```

C major harmony에서 C와 E가 chord tone이고 D가 사이를 연결한다면 passing motion으로 들을 수 있다.

## 3. Neighbor Tone
하나의 중심음에서 이웃 음으로 갔다가 돌아온다.

```text
E → F → E
E → D → E
```

Upper/Lower Neighbor 모두 가능하다.

## 4. Suspension
이전 harmony의 음이 다음 harmony까지 유지되어 순간적인 dissonance를 만들고 뒤늦게 해결된다.

개념 흐름:

```text
Preparation
→ Suspension
→ Resolution
```

전통적인 숫자 유형을 모두 암기하기보다 `미리 있던 음이 harmony 변화 뒤에도 남아 긴장을 만든다`는 청감을 먼저 익힌다.

## 5. Retardation
Suspension과 유사하지만 대표적으로 위쪽으로 해결되는 경우를 가리킨다. 실제 Pop 분석에서는 모든 음을 엄격하게 분류하기보다 line의 tension과 target을 듣는 것이 우선이다.

## 6. Anticipation
다음 harmony의 음이 harmony가 바뀌기 전에 먼저 등장한다.

Vocal pickup이나 syncopated melody에서 자연스러운 forward motion을 만들 수 있다.

## 7. Appoggiatura
도약 등으로 긴장음에 도착한 뒤 순차적으로 해결되는 표현적 non-chord tone으로 이해할 수 있다. 강박에서 강조될 경우 tension이 강하게 들릴 수 있다.

## 8. Escape Tone
순차적으로 접근한 뒤 도약으로 빠져나가는 형태의 장식적 움직임이다. 이름보다 contour와 accent를 실제로 듣는다.

## 9. Chromatic Approach Note
Key 밖의 음이라도 목표음을 반음 위/아래에서 접근하면 강한 방향성을 만들 수 있다.

```text
D# → E
F# → G
Db → C
```

Jazz, R&B, Pop vocal run, bass line에서 매우 흔하다. Chromatic note가 있다는 이유만으로 즉시 modulation이라고 판단하지 않는다.

## 10. Pedal Tone과 Sustained Tone
한 음이 harmony 변화 위에서 계속 유지되면 어떤 순간에는 chord tone이고 어떤 순간에는 tension이 될 수 있다. Bass pedal뿐 아니라 upper pedal도 가능하다.

## 11. Strong Beat와 Weak Beat
Non-Chord Tone의 인상은 위치에 따라 달라진다.

- 약박 passing tone: 흐름으로 자연스럽게 들리기 쉬움
- 강박 appoggiatura/suspension: tension이 더 두드러질 수 있음
- 긴 duration: harmony와의 충돌이 더 인식될 수 있음

따라서 pitch 이름만 보지 않고 onset, duration, accent를 함께 본다.

## 12. 실습
C–Am–F–G 진행 위에 같은 기본 melody를 여러 버전으로 만든다.

```text
A. Chord Tone 중심
B. Passing / Neighbor 추가
C. Suspension / Anticipation 추가
D. Chromatic Approach 추가
```

각 버전에서 기록한다.

- tension note
- target note
- beat position
- duration
- resolution direction
- vocal singability

## 13. Voice Leading과 연결
Part 03의 Voice Leading은 여러 성부 사이의 연결을 다루고, 이 Lesson은 Melody line 안에서 chord/non-chord 관계가 시간에 따라 어떻게 움직이는지 본다.

둘을 합치면 `세로의 Chord`와 `가로의 Line`을 동시에 볼 수 있다.

## DohaStudio 연결
향후 Melody 분석에서 note가 chord tone인지 여부만 binary label로 저장하는 것보다 `approach`, `target`, `accent`, `resolution`, `source harmony`, `target harmony` 같은 문맥이 유용할 수 있다. 현재 구현 기능으로 가정하지 않는다.

## 완료 체크
- [ ] Passing/Neighbor/Suspension/Anticipation을 실제 예에서 찾았다.
- [ ] Non-Chord Tone을 사용한 melody variation을 만들었다.
- [ ] Chromatic Approach와 Modulation을 구분한다.
- [ ] Strong/Weak beat에서 tension 차이를 비교했다.
- [ ] Melody를 Chord Symbol뿐 아니라 linear motion으로 분석한다.
