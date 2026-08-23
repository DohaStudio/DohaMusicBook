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
Common-Practice tonal theory에서 Suspension은 보통 다음 세 단계로 설명한다.

```text
Preparation
→ Suspension
→ Resolution
```

이전 harmony에서 consonant하게 들리던 음이 같은 pitch로 다음 harmony까지 유지되어 dissonance를 만든 뒤, 전형적으로 아래로 순차 해결된다.

예:
```text
F  (previous chord tone)
F  (held over new harmony: suspension)
E  (step-down resolution)
```

현대 Pop에서는 같은 청감 효과가 엄격한 고전적 preparation/resolution을 따르지 않는 경우도 있으므로, 분석할 때는 `유지된 음`, `새 harmony와의 tension`, `실제 resolution`을 구체적으로 적는다.

## 5. Retardation
Retardation은 Suspension과 비슷하게 준비된 음이 다음 harmony까지 유지되지만, 전통적 정의에서는 위로 순차 해결되는 유형을 가리킨다.

## 6. Anticipation
다음 harmony의 음이 harmony가 바뀌기 전에 먼저 등장한다. 보통 target harmony에 들어가서도 같은 pitch가 이어지거나 기능적으로 확인된다.

Vocal pickup이나 syncopated melody에서 자연스러운 forward motion을 만들 수 있다.

## 7. Appoggiatura
전통적 설명에서는 Appoggiatura가 대체로 도약으로 dissonant note에 접근하고 순차적으로 해결되는 accented non-chord tone이다. 실제 현대 melody에서는 접근 방식이 더 자유로울 수 있으므로 핵심은 `강하게 들리는 tension note → nearby target으로 resolution` 관계를 듣는 것이다.

## 8. Escape Tone
Escape Tone은 전통적 설명에서 보통 순차적으로 접근한 뒤 반대 방향의 도약으로 빠져나가는 unaccented non-chord tone이다.

이름만 외우지 말고 다음을 본다.

```text
approach = step
escape = leap
accent position
target contour
```

## 9. Chromatic Approach Note
Key 밖의 음이라도 목표음을 반음 위/아래에서 접근하면 강한 방향성을 만들 수 있다.

```text
D# → E
F# → G
Db → C
```

Jazz, R&B, Pop vocal run, bass line에서 흔하다. Chromatic note가 있다는 이유만으로 즉시 modulation이라고 판단하지 않는다.

## 10. Pedal Tone과 Sustained Tone
한 음이 harmony 변화 위에서 계속 유지되면 어떤 순간에는 chord tone이고 어떤 순간에는 tension이 될 수 있다. Bass pedal뿐 아니라 upper pedal도 가능하다.

전통적인 `pedal point`는 특히 bass에서 tonic/dominant 같은 음이 지속되며 위 harmony가 변하는 문맥을 자주 가리키지만, 현대 arrangement에서는 upper sustained tone도 유사한 tension device로 사용할 수 있다.

## 11. Strong Beat와 Weak Beat
Non-Chord Tone의 인상은 위치에 따라 달라진다.

- 약박 passing/neighbor: 흐름으로 자연스럽게 들리기 쉬움
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
- approach type
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
- [ ] Suspension과 Retardation의 전통적 resolution 방향을 구분한다.
- [ ] Appoggiatura와 Escape Tone의 대표적인 접근/이탈 방식을 설명한다.
- [ ] Non-Chord Tone을 사용한 melody variation을 만들었다.
- [ ] Chromatic Approach와 Modulation을 구분한다.
- [ ] Strong/Weak beat에서 tension 차이를 비교했다.
- [ ] Melody를 Chord Symbol뿐 아니라 linear motion으로 분석한다.
