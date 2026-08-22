# Lesson 03 — Register와 Timbre: 같은 음도 다른 공간에 놓인다

## 학습 목표
- Register를 Low/Mid/High 영역의 역할로 듣는다.
- Timbre를 음색의 성격으로 구분한다.
- 음역 충돌과 음색 대비를 편곡 관점에서 분석한다.

## 1. Register
같은 코드라도 어느 음역에서 연주하느냐에 따라 곡의 무게와 명료도가 달라진다.

```text
Low  = weight, foundation
Mid  = body, harmonic information
High = brightness, detail, air
```

Bass, Piano left hand, Low Pad가 같은 음역에 몰리면 저중역이 뭉칠 수 있다.

## 2. Voice Leading과 Register
Chord voicing을 너무 넓거나 좁게 배치하면 Section의 인상이 달라진다. Melody와 Harmony가 같은 Register에서 계속 경쟁하지 않는지 확인한다.

## 3. Timbre
Timbre는 같은 Pitch를 내더라도 악기마다 다르게 들리는 질감이다.

예:
- Acoustic Piano: attack이 분명하고 자연스러운 decay
- Analog Pad: 부드럽고 지속적인 질감
- Distorted Guitar: 배음이 많고 공격적인 질감
- Bell: 밝고 짧은 attack이 강조됨

## 4. Timbre Contrast
Verse는 건조하고 가까운 음색, Chorus는 넓고 밝은 음색으로 바꾸는 식으로 Section 대비를 만들 수 있다.

## 5. 듣기 실습
레퍼런스 곡의 핵심 악기 5개를 골라 다음을 기록한다.

```text
Instrument:
Role:
Register:
Timbre adjectives:
Competes with:
Section where most effective:
```

## 6. 직접 실습
같은 4마디 Chord Progression을 세 음색으로 렌더링한다.

- Piano
- Pad
- Guitar 또는 Synth

같은 화성인데 Mood가 어떻게 바뀌는지 적는다.

## 7. DohaStudio 연결
향후 편곡 condition이나 분석 데이터에서는 `register`, `timbre_tags`, `instrument_family`, `brightness`, `attack`, `sustain` 같은 정보가 유용할 수 있다. 실제 구현 필드는 최신 DohaMusic/DohaAudio 계약을 확인한다.

## 완료 체크
- [ ] 악기별 Register를 기록했다.
- [ ] 음역 충돌 지점을 찾았다.
- [ ] 같은 Chord를 다른 Timbre로 비교했다.
