# Part 02 — Rhythm: 음악의 움직임을 만든다

> 학습 목표: BPM 숫자만 보는 습관에서 벗어나 Beat, Meter, Feel, Groove, Syncopation을 실제로 듣고 구분한다.

## 1. Rhythm은 왜 먼저 배워야 하는가

같은 멜로디와 코드라도 리듬이 달라지면 장르와 인상이 완전히 바뀐다. Rhythm은 단순한 드럼 패턴이 아니라 음이 언제 시작되고 얼마나 유지되며 어디에 강세가 놓이는지에 관한 시간 구조다.

## 2. Beat, Tempo, Meter

### Beat

곡 안에서 반복해서 느껴지는 기본 박이다.

### Tempo

Beat가 얼마나 빠르게 진행되는지 나타내는 속도이며 보통 BPM으로 표현한다.

### Meter

Beat가 어떤 묶음으로 반복되는지 나타낸다. 4/4, 3/4, 6/8 등이 대표적이다.

같은 120 BPM이라도 4/4 스트레이트와 6/8 느낌은 전혀 다르게 들릴 수 있다.

## 3. Straight, Swing, Shuffle

Straight는 subdivision이 비교적 균등하게 나뉘는 느낌이다. Swing/Shuffle은 앞뒤 길이가 불균등해져 튕기는 움직임이 생긴다.

직접 손뼉으로 다음을 비교한다.

```text
Straight: 1 & 2 & 3 & 4 &
Swing:    1   a 2   a 3   a 4   a
```

정확한 수학적 비율보다 먼저 몸으로 차이를 느끼는 것이 중요하다.

## 4. 강박과 약박

4/4에서 1박은 매우 강한 기준점이다. Pop에서는 2와 4의 Snare/Clap이 강한 스타일적 정체성을 만들기도 한다.

강박에 모든 중요한 음을 놓으면 안정적이지만 예상 가능해질 수 있다. 약박이나 박 사이에 강조를 이동하면 Syncopation이 생긴다.

## 5. Syncopation

예상되는 강세 위치를 벗어나 약박 또는 off-beat에 중요한 음을 놓는 방법이다. Funk, R&B, K-pop, EDM 등에서 Groove를 만드는 핵심 수단 중 하나다.

학습할 때는 '복잡한가?'보다 다음을 본다.

- Bass와 Kick이 같은 위치에서 만나는가?
- Vocal이 박 앞이나 뒤로 밀리는가?
- Snare 사이에 어떤 빈 공간이 있는가?
- 반복 패턴에서 한 음만 위치를 바꾸면 느낌이 어떻게 변하는가?

## 6. Pickup과 못갖춘마디

Phrase가 첫 강박보다 먼저 시작되는 경우다. 보컬이 다음 마디로 자연스럽게 끌려가게 만들 수 있다. 대중음악의 Vocal Melody에서 매우 흔하다.

## 7. Groove

Groove는 BPM 한 숫자로 설명할 수 없다. 다음 요소가 같이 작동한다.

```text
Groove = subdivision
       + accent
       + note placement
       + note length
       + velocity
       + repetition
       + interaction between parts
```

특히 MIDI에서는 모든 Note를 Grid에 완벽하게 맞추고 Velocity도 동일하게 만들면 지나치게 기계적으로 들릴 수 있다.

## 8. Rhythm Pattern

리듬 패턴은 일정한 규칙을 반복하면서 작은 변화를 주는 구조다.

예를 들어 4마디 Drum Pattern을 만든 뒤:

- 1~3마디: 기본 패턴 유지
- 4마디: Fill 추가

처럼 반복과 변화의 균형을 만든다.

## 9. 장르별 듣기 포인트

- K-pop: 여러 장르의 리듬 문법이 Section별로 바뀔 수 있다.
- R&B: 보컬과 드럼의 미세한 앞뒤 배치, Syncopation에 집중한다.
- Hip-hop: Kick/Snare보다 Hi-hat subdivision 변화도 중요하다.
- EDM: Build-up에서 subdivision을 촘촘하게 만들어 에너지를 올리는 경우가 많다.
- Ballad: 느린 Tempo에서도 Vocal rhythm과 phrase timing이 곡의 긴장을 만든다.

## 10. 직접 실습

하나의 4마디 코드 진행을 고정한 뒤 리듬만 세 버전 만든다.

```text
Version A: Straight 8th
Version B: Syncopated
Version C: Shuffle/Swing
```

멜로디 음높이는 같게 유지한다. 무엇이 달라지는지 기록한다.

## 11. DohaStudio와 연결

### CURRENT

현재 DohaMusic은 WAV playback과 Timeline 확인이 가능하므로 생성된 곡의 실제 시간 흐름을 들으며 BPM과 Section별 리듬 밀도를 분석하는 용도로 사용할 수 있다. K-POP Structured Options와 Tempo/Hook 분석 기반도 존재하지만, 이를 완전한 MIDI 리듬 편집기로 오해하지 않는다.

### TARGET

향후 MIDI Track/Piano Roll이 구현되면 다음 정보가 직접 편집 대상이 될 수 있다.

```text
Note.start
Note.duration
Note.velocity
Tempo
Meter
Quantization
Swing
Humanization
```

현재 MIDI Track과 Piano Roll은 미구현이므로 사용법 문서에는 TARGET으로만 기록한다.

## 12. 현재 프로그램으로 공부하기

1. `/history`에서 생성 결과 두 개를 고른다.
2. BPM이 비슷한 곡을 우선 비교한다.
3. `/result/[jobId]` 또는 Project playback에서 첫 30초를 반복 청취한다.
4. Kick, Snare, Hi-hat, Bass, Vocal의 시작 위치를 귀로 적는다.
5. 더 Groove가 좋다고 느끼는 버전을 고르고 이유를 음악 용어로 적는다.

```text
Candidate A: Kick pattern stable, vocal too square
Candidate B: Bass enters off-beat, stronger forward motion
Choice: B
Reason: stronger syncopation and section lift
```

## 13. 이 장을 끝냈다면

- Tempo와 Groove를 구분해서 설명할 수 있다.
- Straight와 Swing/Shuffle 차이를 들을 수 있다.
- Syncopation을 찾아낼 수 있다.
- 리듬만 바꿔 같은 음악 아이디어의 인상을 변형할 수 있다.
- 생성 결과를 '좋다/별로다'가 아니라 Rhythm 관점으로 평가할 수 있다.
