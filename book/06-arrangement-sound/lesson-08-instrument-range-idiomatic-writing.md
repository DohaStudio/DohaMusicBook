# Lesson 08 — Instrument Range & Idiomatic Writing

## 학습 목표
- 악기를 preset 이름이 아니라 range, register, articulation, role 관점에서 편곡한다.
- Playable range와 좋은-sounding register가 항상 같지 않음을 이해한다.
- Doubling, spacing, unison/octave를 목적에 맞게 사용한다.
- 실제 연주자를 고려한 기본적인 idiomatic writing 습관을 만든다.

## 1. Range와 Register
Range는 악기가 낼 수 있는 음역이고 Register는 그 안의 특정 영역이다. 같은 악기도 낮은 register와 높은 register에서 timbre, projection, 역할이 달라질 수 있다.

Virtual Instrument가 MIDI note를 재생한다고 해서 실제 악기에서 자연스럽거나 연주 가능한 것은 아니다.

## 2. Keyboard / Piano
Keyboard는 넓은 음역과 독립적인 양손 voicing이 가능하다. 그러나 low register에 밀집된 chord를 쌓으면 muddy하게 들릴 수 있다.

실습에서는 Bass, Inner Voice, Top Note를 분리해 보고 close/open spacing을 비교한다.

## 3. Bass
Bass line은 root만 연주하는 파트가 아니다. Harmony, Groove, Kick, Voice Leading을 연결한다.

낮은 register에서는 빠르고 복잡한 interval movement가 흐릿해질 수 있으므로 note length와 articulation까지 함께 판단한다.

## 4. Guitar
Guitar chord는 keyboard chord와 같은 pitch collection이어도 실제 voicing과 손 모양 때문에 다르게 배치된다. Open string, string tuning, fret position 때문에 특정 inversion/spacing이 자연스럽거나 불가능할 수 있다.

실제 guitar-like writing이 필요하면 keyboard block chord를 그대로 옮기지 말고 playable voicing을 확인한다.

## 5. Strings
String family는 sustained line, legato, short articulation, tremolo, pizzicato 등 다양한 역할을 가질 수 있다.

실제 orchestration에서는 각 악기의 상세 range와 technique를 별도 자료로 확인한다. 이 Lesson에서는 `register + articulation + section role`을 먼저 설계한다.

## 6. Brass와 Woodwind
Brass는 강한 attack/projection뿐 아니라 soft sustained color도 가능하고, Woodwind는 solo color, blend, countermelody 등 다양한 역할을 가진다.

`Brass = 항상 크다`, `Flute = 항상 높은 melody` 같은 preset식 고정을 피한다.

## 7. Vocal Arrangement
Lead Vocal과 Harmony/Double/Ad-lib은 같은 register를 계속 겹치면 lyric intelligibility가 약해질 수 있다.

- Unison double: thickness
- Octave double: register expansion
- 3rd/6th harmony: harmonic color
- Response: phrase contrast
- Ad-lib: climax/space filling

Part 05의 Vocal Arrangement와 연결한다.

## 8. Unison, Octave, Doubling
같은 line을 여러 악기가 연주하면 단순히 volume만 증가하지 않는다. attack, spectrum, articulation이 합쳐져 새로운 timbre가 된다.

Doubling의 목적을 기록한다.

```text
weight
width
attack
color
register extension
section lift
```

## 9. Close / Open Spacing
같은 chord라도 성부 간격이 달라지면 density와 clarity가 바뀐다.

낮은 register에서는 넓은 spacing이 clarity에 도움이 되는 경우가 많지만 장르와 sound design에 따라 예외가 있다.

Part 03 Voice Leading과 Part 17 Voicing을 실제 instrumentation에 연결한다.

## 10. Transposing Instrument의 존재
일부 관악기는 written pitch와 sounding pitch가 다르다. DAW에서 concert pitch로 작업하더라도 실제 연주자용 score/part를 만들 때는 해당 악기의 transposition과 notation convention을 확인해야 한다.

이 책에서는 모든 transposing instrument를 암기하지 않고 `실제 연주자에게 전달하기 전에 instrument-specific reference를 확인한다`는 원칙을 둔다.

## 11. Idiomatic Writing
Idiomatic writing은 악기의 물리적 구조와 연주 관습에 자연스러운 writing을 뜻한다.

확인 질문:
- 실제 range 안인가?
- 이 register에서 원하는 timbre가 나는가?
- articulation 전환이 현실적인가?
- breath/bow/hand position을 고려했는가?
- tempo에서 실제 연주 가능한가?
- player가 읽기 쉬운가?

## 12. 실습
하나의 8마디 progression을 세 편곡으로 만든다.

```text
A. Piano only
B. Bass + Keys + Guitar
C. Bass + Keys + Strings/Brass or virtual ensemble
```

각 버전에서 role, range, register, articulation, doubling, spacing을 기록한다.

## DohaStudio 연결
향후 arrangement domain에서 `instrument name` 하나만으로는 부족할 수 있다. `role`, `register`, `articulation`, `range constraint`, `doubling relation`, `voicing` 같은 정보가 generation/evaluation 조건으로 유용할 수 있다. 실제 구현 계약은 최신 설계를 우선한다.

## 완료 체크
- [ ] Range와 Register를 구분한다.
- [ ] Keyboard voicing과 guitar-like voicing의 차이를 확인했다.
- [ ] Bass를 Harmony/Groove/Voice Leading 관점에서 작성했다.
- [ ] Doubling의 목적을 설명한다.
- [ ] Close/Open spacing을 비교했다.
- [ ] Virtual Instrument의 재생 가능성과 실제 연주 가능성을 구분한다.
