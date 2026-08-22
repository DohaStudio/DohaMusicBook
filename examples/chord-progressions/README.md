# Chord Progression Practice Library

이 디렉터리는 상업 도서의 코드 예제를 복제하는 곳이 아니다. 직접 연주·입력·분석한 코드 진행을 MIDI와 청취 기록으로 축적하는 개인 학습 라이브러리다.

## 목적
```text
Progression
→ Roman Numeral 분석
→ MIDI 입력
→ Voicing/Bass 분석
→ 여러 Variation 제작
→ Audio 비교
→ Section 용도 판단
→ DohaStudio 기능 요구 발견
```

## 분류
```text
01-basic-major/
02-basic-minor/
03-pop/
04-ballad/
05-rnb/
06-rock/
07-dance/
08-cinematic/
```

장르 폴더는 절대적인 화성 분류가 아니다. 학습 중 어떤 맥락에서 사용했는지 찾기 쉽게 하기 위한 태그에 가깝다. 같은 진행을 여러 장르에서 사용할 수 있다.

## Progression Entry
각 진행은 다음 정보를 기록한다.

```text
ID:
Source: self-written / analysis-derived / public-domain exercise
Key:
Mode:
Roman numerals:
Chord symbols:
Bars:
Harmonic rhythm:
Voicing:
Bass movement:
Tempo:
Feel:
Instrument:
Suitable sections:
Perceived emotion:
```

## Variation
최소 다음을 실험한다.

```text
A Original
B Tempo
C Velocity
D Duration/Rhythm
E Voicing/Inversion
F Transpose
G Instrument/Timbre
```

## 파일 예시
```text
examples/chord-progressions/03-pop/prog-001/
├─ README.md
├─ original.mid
├─ variation-tempo.mid
├─ variation-voicing.mid
├─ variation-groove.mid
└─ audio-preview/
```

실제 `.mid`와 Audio는 직접 학습하면서 추가한다. 저작권이 있는 상업 도서의 부록 MIDI를 이 저장소에 재배포하지 않는다.

## DohaStudio와 연결
현재는 외부 DAW를 이용한다. 장기적으로 이 라이브러리는 다음 기능을 공부하거나 검증하는 자료가 될 수 있다.

- MIDI import/export
- Piano Roll
- Chord/Note editing
- Velocity/Duration editing
- Transpose
- Voicing/Inversion
- Virtual Instrument/SoundFont playback
- Human edit lineage

이 기능들은 실제 DohaMusic 구현 상태에 따라 `CURRENT/FOUNDATION/TARGET`을 다시 확인한다.
