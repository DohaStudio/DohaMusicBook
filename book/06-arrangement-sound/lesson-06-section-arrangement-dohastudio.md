# Lesson 06 — Section Arrangement와 DohaStudio 실습

## 학습 목표
- Section별 악기 출입과 역할 변화를 표로 만든다.
- Arrangement를 Energy Curve와 연결한다.
- 현재 DohaMusic 기능과 향후 편곡 기능을 구분한다.

## 1. Section Arrangement Map
한 곡을 다음처럼 표로 만든다.

```text
Instrument/Role | Intro | Verse | Pre | Chorus | Bridge | Final
Drums           | light | basic | build| full   | sparse | full+
Bass            | -     | yes   | yes | yes    | alt    | yes
Harmony         | pad   | keys  | add | layered| new    | layered+
Lead            | motif | vocal | vocal| hook   | new    | hook+
FX              | rise  | -     | rise| impact | texture| impact+
```

표의 목적은 악기 수를 채우는 것이 아니라 Section마다 무엇이 변하는지 보는 것이다.

## 2. Arrangement와 Energy Curve
Part 01에서 만든 Energy Curve와 실제 악기 배치를 비교한다. Energy 8인 Chorus가 정말 더 많은 Layer가 필요한지, 아니면 Rhythm/Range/Width 변화만으로 충분한지 판단한다.

## 3. Candidate Arrangement Review
AI 생성 후보 두 개를 같은 Section에서 비교한다.

```text
Candidate:
Section:
Instrument roles:
Density:
Register balance:
Strongest timbre:
Stereo width:
Transition quality:
Lead clarity:
Problem:
Decision:
```

## 4. CURRENT
현재 DohaMusic은 Project/Composition/Artifact, 읽기 전용 Track lane, WAV playback과 timeline 기반을 제공한다. 이 기능으로 Section별 악기 밀도와 구조를 청취·기록할 수 있다.

완성형 다음 기능은 현재 사용법으로 적지 않는다.
- Track/Clip 자유 편집
- Mixer의 Volume/Pan/Mute/Solo
- Automation
- MIDI/Piano Roll
- SoundFont engine
- Production Stem Separation workflow

## 5. TARGET
향후 편곡 시스템에서는 다음 정보가 연결될 수 있다.

```text
Section
 ├─ energy
 ├─ density
 └─ active tracks

Track
 ├─ role
 ├─ instrument
 ├─ register
 ├─ timbre
 └─ spatial intent

Clip
 ├─ start/end
 ├─ gain/pan
 ├─ source artifact
 └─ edit lineage
```

이는 학습용 목표 모델이다. 실제 구현 시 최신 DohaMusic Domain/ADR을 우선한다.

## 6. Part 06 최종 과제
자신의 Demo Song을 위한 Arrangement Plan을 작성한다.

```text
Song:
Core sound palette:
Verse roles:
Pre build strategy:
Chorus density strategy:
Bridge contrast:
Final chorus additions:
Register risks:
Timbre conflicts:
Stereo plan:
Sound sources and licenses:
```

## 완료 체크
- [ ] Section Arrangement Map을 만들었다.
- [ ] Energy Curve와 악기 배치를 비교했다.
- [ ] AI Candidate 두 개의 편곡을 비교했다.
- [ ] 사용한 Sample/Virtual Instrument/SoundFont 출처를 기록했다.
- [ ] 현재 기능과 TARGET 기능을 구분했다.
