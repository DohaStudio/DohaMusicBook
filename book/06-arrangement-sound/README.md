# Part 06 — Arrangement & Sound: 같은 곡을 다른 세계로 만든다

> 학습 목표: 작곡을 Melody+Chord로만 보지 않고 Instrument Role, Density, Register, Timbre, Dynamics, Stereo Image까지 포함한 전체 사운드 설계로 이해한다.

## 1. Arrangement란 무엇인가

Arrangement는 어떤 악기가 언제, 어떤 음역에서, 어떤 리듬과 역할로 연주되는지를 설계하는 과정이다. 좋은 멜로디와 코드가 있어도 편곡이 평평하면 곡의 Section 대비와 감정선이 약해질 수 있다.

## 2. Instrument Role

악기 이름보다 먼저 역할을 생각한다.

- Rhythm: Drum, Percussion
- Low foundation: Bass
- Harmony: Piano, Guitar, Pad
- Lead: Vocal, Synth Lead, Guitar Lead
- Texture: Pad, Noise, Ambience
- Transition: Risers, Impacts, Reverse FX

한 악기가 여러 역할을 할 수 있지만, 동시에 모든 악기가 같은 역할을 하면 Mix가 복잡해진다.

## 3. Density

Density는 한 순간에 얼마나 많은 정보가 존재하는지다. Verse는 얇고 Chorus는 두껍게 만드는 방식이 대표적이지만 장르에 따라 반대도 가능하다.

```text
Verse: kick + bass + sparse keys + vocal
Pre:   add percussion + pad
Chorus:add full drums + layered synth + doubles
```

## 4. Register

같은 코드라도 어느 음역에서 연주하느냐에 따라 충돌이 달라진다. Bass와 Piano 왼손, Low Pad가 모두 같은 음역을 차지하면 뭉칠 수 있다.

편곡 시 다음을 본다.

- Low: weight, foundation
- Mid: body, most harmonic information
- High: brightness, air, detail

## 5. Timbre

Timbre는 같은 음높이라도 악기마다 다른 질감을 만드는 요소다. Acoustic Piano, FM Bell, Distorted Guitar, Analog Pad는 같은 C Major chord를 연주해도 전혀 다른 인상을 만든다.

## 6. Layering

Layering은 같은 역할을 여러 소리로 겹쳐 하나의 더 큰 음색을 만드는 방법이다. 무조건 많이 겹치는 것이 아니라 각 Layer가 어떤 역할을 추가하는지 명확해야 한다.

예:

```text
Kick layer A: low-end body
Kick layer B: click/attack
```

## 7. Dynamics

Dynamics는 단순한 Volume이 아니다. 연주 강도, Section 에너지, 악기 출입, Automation까지 포함한다. 좋은 곡은 시간에 따라 밀도와 강도가 변한다.

## 8. Stereo Image

좌우 배치는 공간을 만든다.

- Center: Kick, Snare, Bass, Lead Vocal 등 핵심 요소가 자주 위치
- Side: Guitar, Pad, Harmony Vocal 등

규칙이 절대적인 것은 아니지만 핵심 정보와 공간감을 구분하는 출발점이 된다.

## 9. Virtual Instrument와 Sample

### Virtual Instrument

MIDI 입력을 받아 Piano, Drum, Synth, Orchestra 등 소리를 생성한다.

### Sample

이미 녹음된 Audio 조각이다. Drum one-shot, loop, FX, vocal chop 등으로 사용할 수 있다.

### SoundFont

여러 악기 샘플과 매핑 정보를 묶은 포맷 중 하나다. 학습용/프로토타입 용도로 유용하지만 상업적 사용 시 각 SoundFont의 실제 라이선스를 확인한다.

## 10. 듣기 실습

Chorus를 한 번은 전체로 듣고, 다음에는 특정 역할만 따라간다.

```text
Pass 1: drums only
Pass 2: bass only
Pass 3: harmony instruments
Pass 4: lead/vocal
Pass 5: FX/transitions
```

각 요소가 언제 들어오고 나가는지 기록한다.

## 11. 직접 편곡 실습

8마디 Chorus를 세 단계로 만든다.

```text
A: piano + vocal
B: add bass + drums
C: add pad + hook layer + transition FX
```

각 단계에서 무엇이 좋아지고 무엇이 복잡해지는지 비교한다.

## 12. DohaStudio와 연결

### CURRENT

DohaMusic은 Project/Composition/Artifact 구조와 읽기 전용 Track lane, WAV playback 기반을 제공한다. 완전한 Mixer/Clip editing은 아직 목표 영역이다.

### DohaAudio

DohaAudio는 장기적으로 Music Generation, Stem Separation, Music Analysis 등을 담당한다. 현재는 Runtime/Foundation과 Dataset/Training governance 기반이 중심이고 실제 생성·분리 모델은 미구현 상태를 유지한다.

### TARGET

편곡 기능이 성숙하면 다음과 같은 정보가 중요하다.

```text
Track.role
Track.instrument
Track.register
Clip.start/end
Clip.gain
Clip.pan
Section.density
Automation
```

## 13. 현재 프로그램으로 공부하기

Project playback을 사용해 Section별 Instrument Density를 수동 기록한다. Stem Separation이 실제 연결되기 전까지는 귀로 구분하고, 사용 가능한 외부 DAW 분석을 병행해도 된다.

## 14. 이 장을 끝냈다면

- 악기를 이름이 아니라 역할로 볼 수 있다.
- Density와 Register 충돌을 설명할 수 있다.
- Timbre와 Layering의 차이를 이해한다.
- Stereo Image와 Dynamics를 편곡 요소로 인식한다.
- Virtual Instrument, Sample, SoundFont의 역할과 라이선스 주의점을 이해한다.
