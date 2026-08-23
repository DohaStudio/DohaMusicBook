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

## Starter Set
처음에는 아래 8개 진행을 순서대로 공부한다.

1. [Basic Major — I–V–vi–IV](01-basic-major/prog-001-i-v-vi-iv.md)
2. [Basic Minor — i–VI–III–VII](02-basic-minor/prog-002-i-vi-iii-vii.md)
3. [Pop — vi–IV–I–V](03-pop/prog-003-vi-iv-i-v.md)
4. [Ballad — I–iii–IV–iv](04-ballad/prog-004-i-iii-iv-ivminor.md)
5. [R&B — ii7–V7–Imaj7–vi7](05-rnb/prog-005-ii-v-i-vi.md)
6. [Rock — I–♭VII–IV](06-rock/prog-006-i-bvii-iv.md)
7. [Dance — i–VI–III–VII](07-dance/prog-007-i-vi-iii-vii.md)
8. [Cinematic — i–♭VI–iv–V](08-cinematic/prog-008-i-bvi-iv-v.md)

이 세트의 목적은 '장르 공식'을 암기하는 것이 아니라, 서로 다른 기능/색채/리듬 맥락을 MIDI로 직접 비교하는 것이다.

## 공통 실습 순서
모든 진행에서 같은 절차를 사용한다.

```text
1. Root-position block chord 입력
2. Roman Numeral 확인
3. Tempo Variation
4. Velocity Variation
5. Duration/Rhythm Variation
6. Voicing/Inversion Variation
7. Transpose
8. Instrument/Timbre 변경
9. A/B Listening
10. Section Fit 기록
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

## Naming Convention
Starter progression은 다음 규칙을 사용한다.

```text
<category>/prog-00N-<roman-slug>.md   # study sheet
<category>/prog-00N/                  # MIDI variation folder
```

예:
```text
examples/chord-progressions/03-pop/
├─ prog-003-vi-iv-i-v.md
└─ prog-003/
   ├─ original.mid
   ├─ variation-rhythm.mid
   ├─ variation-velocity.mid
   ├─ variation-voicing.mid
   └─ variation-transpose-plus3.mid
```

`prog-00N` ID는 study sheet와 MIDI folder 사이에서 동일하게 유지한다. Roman numeral slug는 사람이 내용을 찾기 위한 설명용이며 MIDI folder 이름에는 반복하지 않는다.

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

공통 기록에는 [Progression Study Template](progression-template.md)을 사용한다.

## 실제 MIDI 파일을 추가할 때
새 progression도 위 Naming Convention을 따른다. MIDI variation 파일은 학습 목적에 따라 추가할 수 있지만 기본 starter set에서는 다음 이름을 우선한다.

```text
original.mid
variation-rhythm.mid
variation-velocity.mid
variation-voicing.mid
variation-transpose-plus3.mid
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
