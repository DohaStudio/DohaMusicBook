# Part 03 — Harmony: 코드로 긴장과 해결을 설계한다

> 학습 목표: 코드 이름을 외우는 데서 끝나지 않고 Key, Scale, Diatonic Chord, 기능화성, Harmonic Rhythm, Reharmonization을 실제 곡의 감정 흐름과 연결한다.

## 1. Key와 Scale

Key는 곡이 어떤 음을 중심으로 안정감을 형성하는지 보여준다. Scale은 그 Key 안에서 주로 사용하는 음의 집합이다.

C Major:

```text
C D E F G A B
```

A Natural Minor:

```text
A B C D E F G
```

둘은 같은 음을 사용하지만 중심음과 기능 관계가 다르기 때문에 곡의 안정감이 다르게 느껴진다.

## 2. Diatonic Chord

C Major의 기본 3화음은 다음과 같다.

```text
I   C
 ii  Dm
 iii Em
 IV  F
 V   G
 vi  Am
 vii° Bdim
```

중요한 것은 숫자를 외우는 것보다 각 코드가 어디로 움직이고 싶어 하는지 듣는 것이다.

## 3. Chord Function

기초적으로 다음 세 기능으로 생각할 수 있다.

- Tonic: 안정
- Subdominant/Predominant: 이동과 전개
- Dominant: 긴장

가장 단순한 흐름은 다음과 같다.

```text
Tonic → Predominant → Dominant → Tonic
```

즉 화성도 결국 `안정 → 이동 → 긴장 → 해결`의 흐름을 만든다.

## 4. 자주 쓰는 진행을 외울 때의 주의점

`I–V–vi–IV` 같은 진행을 그대로 외우는 것만으로는 충분하지 않다. 같은 진행도 다음 요소가 달라지면 인상이 달라진다.

- Key
- Tempo
- Chord inversion
- Harmonic rhythm
- Bass note
- Voicing
- Melody note
- Instrumentation

따라서 코드 진행을 공부할 때는 반드시 실제 소리를 듣는다.

## 5. Major와 Minor

Major는 밝고 Minor는 어둡다고 단순화하면 한계가 있다. Minor 안에서도 템포, 리듬, 음색, 멜로디에 따라 강함·몽환·긴장·웅장함 등 다양한 감정이 가능하다.

Natural Minor 외에 Harmonic Minor에서는 7음을 올려 강한 Dominant 기능을 만들 수 있다.

## 6. Harmonic Rhythm

Harmonic Rhythm은 코드가 얼마나 자주 바뀌는지다.

```text
A: | C      | Am     | F      | G      |
B: | C  Am  | F  G   | C  Am  | F  G   |
```

코드 자체가 같아도 B가 더 빠르게 진행되는 느낌을 줄 수 있다. Pre-Chorus에서 Harmonic Rhythm을 빠르게 해 Chorus로 밀어 올리는 방식도 가능하다.

## 7. Inversion과 Bass

C/E처럼 Bass 음을 바꾸면 동일한 코드라도 연결감이 달라진다. Bass line이 자연스럽게 순차 진행하도록 전위형을 사용하는 것이 대표적이다.

## 8. Non-Diatonic Harmony

기본 Key 밖의 코드를 사용하면 색채와 긴장을 확장할 수 있다.

### Secondary Dominant

목표 코드의 Dominant를 잠시 빌려와 진행 방향을 강하게 만든다.

```text
C → A7 → Dm → G → C
```

A7은 C Major의 기본 다이아토닉 코드는 아니지만 Dm으로 강하게 향한다.

### Related IIm7

Secondary Dominant 앞에 관련 ii chord를 붙여 부드러운 ii–V 흐름을 만든다.

### Tritone Substitution

Dominant를 증4도 관계의 다른 Dominant로 대체해 강한 색채를 만든다.

### Modal Interchange

같은 으뜸음의 평행조에서 코드를 빌려온다. 예를 들어 C Major에서 Fm을 사용하면 갑작스러운 감정 변화가 생길 수 있다.

### Modulation

곡의 중심 Key 자체를 이동시킨다. 후반부 상승 전조처럼 에너지를 올리는 방식도 있고, 더 미묘하게 다른 Key로 이동하는 방식도 있다.

## 9. Melody와 Chord의 관계

Chord Tone은 안정감을 주고 Non-Chord Tone은 긴장을 만든다. 좋은 멜로디는 둘 중 하나만 쓰는 것이 아니라 긴장과 해결을 조절한다.

예를 들어 C chord 위에서 C/E/G는 안정적이다. D를 잠깐 지나가며 E로 해결하면 Passing Tone 역할을 할 수 있다.

## 10. 듣기 실습

좋아하는 곡 한 곡에서 다음을 기록한다.

```text
Key:
Verse progression:
Pre progression:
Chorus progression:
Chord change rate:
Most tense chord:
Strongest resolution:
Any borrowed/non-diatonic chord:
```

정확한 코드 채보가 어렵다면 Bass note와 '안정/불안정' 느낌부터 적어도 된다.

## 11. 직접 작곡 실습

### Exercise A — 기능화성

C Major에서 8마디 진행을 만든다.

조건:
- Tonic에서 시작
- Dominant를 최소 한 번 사용
- 마지막에 Tonic으로 해결

### Exercise B — Reharmonization

Exercise A의 진행에서 한 곳만 바꾼다.

- Secondary Dominant 또는
- Modal Interchange 또는
- Inversion

중 하나를 사용하고 감정 변화가 무엇인지 적는다.

## 12. DohaStudio와 연결

### CURRENT

현재 DohaMusic은 생성 결과의 Tempo/Hook 등 일부 품질 분석과 Composition/Artifact 계보를 다루지만 완성된 Chord Editor나 MIDI Piano Roll은 아직 없다.

### TARGET

향후 음악 구조를 데이터로 다룬다면 다음 개념이 필요하다.

```text
Key
Scale
ChordEvent
ChordFunction
BassNote
Voicing
HarmonicRhythm
SectionHarmony
```

ReferenceAnalysis에서 코드 진행과 Section별 harmonic density를 분석하고, Music Generation condition 또는 Human Editing에 활용할 수 있다. 하지만 현재 구현 여부는 원본 저장소에서 확인한 뒤 CURRENT/TARGET을 구분한다.

## 13. 프로그램으로 공부하기

현재 생성된 곡을 두 개 고르고 같은 Section을 비교한다.

```text
Candidate A Chorus:
- harmony feels stable
- little contrast from verse

Candidate B Chorus:
- faster harmonic rhythm before hook
- stronger resolution on first chorus bar
```

정확한 자동 코드 분석이 아직 없다면 귀와 외부 악기/DAW를 사용해 수동 분석하고 결과를 공부 노트로 남긴다.

## 14. 이 장을 끝냈다면

- Diatonic Chord를 Key 안에서 만들 수 있다.
- Tonic/Predominant/Dominant의 역할을 설명할 수 있다.
- Harmonic Rhythm을 들을 수 있다.
- Chord Tone과 Non-Chord Tone의 차이를 이해한다.
- Secondary Dominant, Modal Interchange 같은 기본 Reharmonization 아이디어를 적용할 수 있다.
