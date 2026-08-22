# Lesson 02 — Diatonic Chord: Scale에서 화음을 만든다

## 학습 목표
- Scale 음으로 3화음을 쌓는다.
- Roman Numeral로 코드를 표현한다.
- 코드 이름보다 Key 안의 위치를 먼저 생각한다.

## 1. C Major의 Diatonic Triads
한 음씩 건너뛰어 1–3–5음을 쌓으면 다음 기본 화음이 나온다.

```text
I    C     C E G
ii   Dm    D F A
iii  Em    E G B
IV   F     F A C
V    G     G B D
vi   Am    A C E
vii° Bdim  B D F
```

## 2. Roman Numeral이 필요한 이유
`C–G–Am–F`를 다른 Key로 옮기면 코드 이름은 달라지지만 `I–V–vi–IV`라는 관계는 유지된다. 이 관계를 이해하면 진행을 단순 암기하지 않고 전조하거나 다른 Key에서 재사용할 수 있다.

## 3. Chord Tone
현재 코드 자체를 구성하는 음은 멜로디의 안정 지점이 되기 쉽다. 그러나 항상 코드톤만 쓰면 멜로디가 단조로워질 수 있으므로 이후 Non-Chord Tone 학습과 연결한다.

## 4. 직접 만들기
G Major Scale을 적고 각 음 위에 3화음을 만든다. 코드 이름과 Roman Numeral을 모두 적는다.

## 5. 듣기 실습
레퍼런스에서 4~8마디를 골라 정확한 코드명을 모르면 Bass 움직임만이라도 기록한다.

```text
Section:
Bass notes:
Estimated numerals:
Repeated pattern:
Stable chord:
Most tense chord:
```

## 6. DohaStudio 연결
향후 ChordEvent를 다룰 때 absolute chord name과 Key-relative function을 구분하는 것이 중요하다. `C`라는 문자열 하나만으로는 그 코드가 I인지 IV인지 판단할 수 없기 때문이다.

## 완료 체크
- [ ] C Major의 7개 Diatonic Triad를 만들 수 있다.
- [ ] Roman Numeral의 목적을 설명할 수 있다.
- [ ] 다른 Key에서도 같은 진행 관계를 생각할 수 있다.
