# Lesson 07 — Chord Progression을 MIDI로 변형하기

## 학습 목표
코드 진행을 이름으로 외우는 데서 끝내지 않고 MIDI 데이터로 직접 열어 보고 한 요소씩 바꾸면서 음악적 결과를 듣는다.

## 1. 출발점
예제로 `I–V–vi–IV`를 사용한다. C Major라면 `C–G–Am–F`다. 중요한 것은 이 진행 자체가 아니라 같은 화성 관계를 여러 음악적 조건에서 비교하는 것이다.

## 2. MIDI에서 바꿀 수 있는 것
- Tempo
- Note start / rhythm
- Duration
- Velocity
- Octave / register
- Transpose
- Voicing
- Inversion
- Bass note
- Instrument / timbre

한 번에 여러 요소를 바꾸면 무엇 때문에 인상이 변했는지 알기 어렵다. 첫 실습에서는 한 요소씩 바꾼다.

## 3. Variation A — Tempo
원본을 복제해 Tempo만 바꾼다.

```text
A: 72 BPM
B: 96 BPM
C: 120 BPM
```

질문:
- 같은 코드가 더 밝거나 긴박하게 느껴지는가?
- Chord change frequency의 체감은 어떻게 달라지는가?
- 어떤 Section에 더 어울리는가?

## 4. Variation B — Velocity
모든 Note의 Velocity를 똑같이 두는 버전과 Accent를 만드는 버전을 비교한다.

```text
A: flat velocity
B: beat 1 accent
C: top note accent
```

Velocity는 단순 볼륨뿐 아니라 Virtual Instrument의 articulation/timbre에 영향을 줄 수 있다.

## 5. Variation C — Duration와 Rhythm
Whole/half-note처럼 길게 유지하는 버전, 짧은 stab, syncopated comping을 비교한다. Harmony는 같지만 Groove와 Arrangement 역할은 달라진다.

## 6. Variation D — Voicing와 Inversion
Root position만 사용한 뒤 공통음을 유지하고 가까운 음으로 이동하도록 Voicing을 수정한다. Bass inversion도 별도로 비교한다.

## 7. Variation E — Transpose
Roman Numeral은 유지하고 Key를 바꾼다.

```text
C Major: C G Am F
E♭ Major: E♭ B♭ Cm A♭
```

Transpose는 단순 버튼 조작이 아니라 Vocal range, instrument register, timbre와 함께 판단한다.

## 8. Variation F — Timbre
같은 MIDI를 Piano, EP, Pad, Guitar-like instrument 등 서로 다른 음색으로 재생한다. MIDI 구조가 같아도 envelope와 spectrum 때문에 Arrangement 역할이 달라지는지 듣는다.

## 9. 실습 기록
```text
Progression ID:
Key:
Roman numerals:
Original tempo:
Variation variable:
Before:
After:
What changed perceptually:
Best section use:
Keep / reject:
```

## 10. DohaStudio 연결
현재 DohaMusic에 완성형 MIDI/Piano Roll/SoundFont editor가 있다고 가정하지 않는다. 이 실습은 현재 외부 DAW에서 수행하고 결과 MIDI/Audio와 분석 기록을 보존한다.

향후 DohaMusic MIDI 편집이 구현되면 이 Lesson의 `tempo / velocity / duration / transpose / voicing / instrument` 비교가 그대로 기능 검증용 음악 실습이 된다.

## 완료 체크
- [ ] 같은 진행으로 최소 6개 Variation을 만들었다.
- [ ] 한 번에 한 변수를 바꾸는 비교를 했다.
- [ ] 코드 이름이 아니라 Roman Numeral도 기록했다.
- [ ] 어떤 변화가 어떤 청감 차이를 만들었는지 설명했다.
