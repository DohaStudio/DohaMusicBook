# Lesson 05 — Virtual Instrument, Plugin, Sample, SoundFont

## 학습 목표
- MIDI를 실제 소리로 바꾸는 경로를 이해한다.
- Virtual Instrument와 Effect Plugin을 구분한다.
- Sample Library와 SoundFont의 라이선스 경계를 기록한다.

## 1. 기본 신호 흐름

```text
MIDI Clip
→ Virtual Instrument
→ Audio Signal
→ Effect Plugins
→ Mixer / Output
```

Virtual Instrument는 MIDI를 받아 소리를 만들고, Effect Plugin은 만들어진 Audio Signal을 처리한다.

## 2. Virtual Instrument
Piano, Drum, Synth, Orchestra 등을 소프트웨어 악기로 구현한다. 같은 MIDI에도 악기 선택, Preset, Articulation에 따라 결과가 크게 달라진다.

## 3. Synth와 Sample-based Instrument
Synth는 oscillator와 synthesis 구조로 음색을 만들고, Sample-based Instrument는 실제 녹음 샘플을 매핑해 재생하는 경우가 많다. 현실에서는 두 방식을 섞은 Hybrid Instrument도 많다.

## 4. SoundFont
SoundFont는 샘플과 key/velocity mapping 등을 묶어 여러 악기를 표현할 수 있는 포맷이다. 프로토타입과 학습에 유용하지만 파일 형식 자체가 상업적 이용 권한을 보장하지 않는다.

## 5. 라이선스 기록
악기나 SoundFont를 프로젝트에 넣기 전에 다음을 남긴다.

```text
Name:
Source:
License:
Commercial use:
Redistribution:
Attribution:
Modification:
AI training permission:
Checked date:
Evidence:
```

## 6. 실습
동일한 8마디 MIDI를 최소 3개 악기로 Render한다.

- Piano
- Synth/Pad
- 다른 Sample-based Instrument

비교 항목:
- Attack
- Sustain
- Dynamic response
- Register suitability
- Mix density

## DohaStudio 연결
### CURRENT
SoundFont Engine과 완성형 Virtual Instrument hosting을 현재 DohaMusic 기능이라고 문서화하지 않는다.

### TARGET
MIDI 기반 작곡 편집이 추가되면 Instrument identity, preset/version, rendering lineage, license metadata를 함께 보존하는 것이 중요하다.

## 완료 체크
- [ ] Virtual Instrument와 Effect를 구분한다.
- [ ] 동일 MIDI를 여러 악기로 Render했다.
- [ ] 사용할 SoundFont/Library의 라이선스를 기록했다.
