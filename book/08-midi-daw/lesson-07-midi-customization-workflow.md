# Lesson 07 — MIDI Customization Workflow

## 목표
완성된 MIDI Pattern을 그대로 사용하는 것이 아니라 DAW의 MIDI Editor에서 음악적 의도에 맞게 수정하는 순서를 익힌다.

## 기본 Workflow
```text
MIDI import
→ Key/Tempo 확인
→ Pattern 구조 듣기
→ Transpose
→ Note/Voicing 수정
→ Rhythm/Duration 수정
→ Velocity 수정
→ Instrument 변경
→ Humanization
→ A/B Export
```

## 1. 먼저 원본을 듣는다
수정 전에 원본 MIDI를 재생하고 다음을 기록한다.

```text
Key:
Tempo:
Bars:
Chord rhythm:
Register:
Top note movement:
Bass movement:
Velocity character:
Likely musical role:
```

## 2. Pattern의 일부만 수정한다
좋은 Pattern을 전부 다시 쓰지 않는다. 약한 마디, 반복이 지루한 부분, Section 전환 직전만 골라 수정할 수 있다.

## 3. Tempo 변경
Tempo를 바꾼 뒤 Note duration과 articulation이 여전히 자연스러운지 확인한다. Tempo만 올렸는데 음이 지나치게 길거나 짧게 느껴질 수 있다.

## 4. Velocity / Duration
Velocity와 Duration은 서로 다른 정보다.

- Velocity: note-on 강도와 instrument response
- Duration: 음이 유지되는 시간

둘을 함께 '세게/약하게'로 뭉뚱그리지 않는다.

## 5. Transpose
전체 Pattern을 옮긴 뒤 악기 음역과 Vocal range를 다시 확인한다. MIDI note가 기술적으로 존재한다고 해서 해당 악기의 자연스러운 register라는 뜻은 아니다.

## 6. Timbre 변경
Instrument를 바꾼 뒤 MIDI도 다시 수정한다. Piano용 긴 chord voicing이 Guitar/Synth stab에 그대로 적합하지 않을 수 있다.

## 7. Humanization
Quantize를 완전히 제거하는 것이 Humanization은 아니다. Timing/Velocity/Duration의 미세한 차이를 음악적 Groove를 해치지 않는 범위에서 조절한다.

## 8. 버전 관리
```text
pattern-001-original.mid
pattern-001-tempo.mid
pattern-001-voicing.mid
pattern-001-groove.mid
pattern-001-final.mid
```

Audio preview도 함께 남기면 나중에 DAW 없이 비교하기 쉽다.

## DohaStudio 연결
향후 MIDI 편집 기능에서는 원본 Pattern과 Human Edit의 lineage를 보존하는 것이 중요하다. AI 생성 MIDI도 동일하다. 수정본이 생성될 때 무엇을 바꿨는지 추적할 수 있어야 한다.

## 완료 체크
- [ ] MIDI Pattern 하나를 DAW에서 분석했다.
- [ ] Tempo/Velocity/Duration/Transpose를 각각 수정했다.
- [ ] Instrument 변경 후 MIDI를 다시 조정했다.
- [ ] 원본과 최종본을 모두 보존했다.
