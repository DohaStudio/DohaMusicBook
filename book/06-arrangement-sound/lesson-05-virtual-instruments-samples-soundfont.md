# Lesson 05 — Virtual Instrument, Sample, Synth, SoundFont

## 학습 목표
- MIDI와 Audio 기반 악기 소스를 구분한다.
- Virtual Instrument, Sample, Synth, SoundFont의 역할을 이해한다.
- 상업적 사용을 위해 라이선스를 확인하는 습관을 만든다.

## 1. Virtual Instrument
Virtual Instrument는 MIDI 입력을 받아 소리를 생성하는 소프트웨어 악기다. Piano, Drum, Orchestra, Synth 등 다양한 형태가 있다.

## 2. Sample
Sample은 이미 녹음된 Audio다.

예:
- Drum one-shot
- Loop
- FX
- Vocal chop
- Instrument sample

Sample을 사용할 때는 원본 파일의 라이선스와 재배포 조건을 확인해야 한다.

## 3. Synth
Synthesizer는 oscillator, filter, envelope, modulation 등을 이용해 소리를 합성한다. Preset을 사용하는 것과 직접 Sound Design하는 것은 다른 수준의 작업이다.

## 4. SoundFont
SoundFont는 샘플과 키/Velocity 매핑 정보를 묶어 MIDI Note를 실제 악기 소리로 재생할 수 있게 하는 포맷 중 하나다.

학습용으로는 다음 흐름을 이해한다.

```text
MIDI Note
→ instrument mapping
→ sample selection
→ velocity layer
→ audio rendering
```

## 5. 라이선스 체크
무료 파일이라고 상업적 이용이 자동 허용되는 것은 아니다.

기록 템플릿:
```text
Library / SoundFont:
Source URL:
License:
Commercial use:
Redistribution:
Attribution:
Modification:
Checked date:
Evidence saved:
```

## 6. 직접 실습
같은 MIDI Phrase를 서로 다른 악기 소스로 세 번 렌더링하고 비교한다.

```text
Version A: acoustic-style instrument
Version B: synth preset
Version C: SoundFont instrument
```

비교:
- attack
- sustain
- brightness
- realism
- mix placement
- genre fit

## 7. DohaStudio 연결
### CURRENT
DohaMusic에 완성형 SoundFont engine이나 Piano Roll이 있다는 의미로 쓰지 않는다.

### TARGET
향후 MIDI 기반 편집과 Rendering이 연결되면 `instrument source`, `preset`, `sample/license provenance`, `render configuration`을 Artifact lineage와 함께 보존하는 것이 중요하다.

## 완료 체크
- [ ] Virtual Instrument와 Sample 차이를 설명할 수 있다.
- [ ] Synth와 sampled instrument 차이를 이해한다.
- [ ] SoundFont의 기본 Rendering 흐름을 설명한다.
- [ ] 사용한 음원 소스의 라이선스를 기록했다.
