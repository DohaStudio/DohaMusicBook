# MIDI Validation Findings — PR #2

> 범위: `examples/chord-progressions/` 40개 MIDI와 `examples/harmony-ear-training/` 17개 MIDI의 생성 규칙·문서 화성·실제 note content를 대조한다.

## 결과

**57개 MIDI의 생성/parse 검증 범위와 문서-화성 대조를 완료했다.** 검수 중 Starter progression 3개 세트에서 문서 Key/Chord와 초기 MIDI Key가 다른 P0 불일치를 발견했고 수정했다.

## 발견 및 수정한 P0 불일치

```text
06 Rock
Doc: E – D – A (E center, I–bVII–IV)
Old MIDI: C – Bb – F
Fixed MIDI: E – D – A

07 Dance
Doc: Fm – Db – Ab – Eb (F minor, i–VI–III–VII)
Old MIDI: Am – F – C – G
Fixed MIDI: Fm – Db – Ab – Eb

08 Cinematic
Doc: Dm – Bb – Gm – A (D minor, i–bVI–iv–V)
Old MIDI: A-minor-centered material
Fixed MIDI: Dm – Bb – Gm – A
```

세 세트의 다음 5개 파일을 모두 문서 기준으로 재생성했다.

```text
original.mid
variation-rhythm.mid
variation-velocity.mid
variation-voicing.mid
variation-transpose-plus3.mid
```

수정한 15개 파일은 PPQ 480의 Standard MIDI File로 다시 parse했고 note-on event 존재 여부와 chord pitch-class를 확인했다.

## 정상으로 대조된 Starter progression

```text
01 C Major: C – G – Am – F
02 A Minor: Am – F – C – G
03 C Major: Am – F – C – G
04 C Major: C – Em – F – Fm
05 C Major: Dm7 – G7 – Cmaj7 – Am7
06 E center: E – D – A
07 F Minor: Fm – Db – Ab – Eb
08 D Minor: Dm – Bb – Gm – A
```

## Variation 검수

Starter progression의 Variation은 다음 목적을 유지한다.

- `rhythm`: 같은 harmony를 반복 attack으로 바꾼다.
- `velocity`: pitch/harmony를 유지하고 dynamic accent를 바꾼다.
- `voicing`: chord identity를 유지하면서 inversion/register를 바꾼다.
- `transpose-plus3`: 원 progression 전체를 +3 semitone 이동한다.

따라서 Variation 파일은 원본과 같은 harmonic relation을 유지하거나, 파일명에 명시된 transpose만 수행한다.

## Harmony Ear Training 대조

다음 이론-음표 관계를 확인했다.

```text
Authentic: G7 → Cmaj7
Half: Dm7 → G7
Plagal: F → C
Deceptive: G7 → Am
Major ii–V–I: Dm7 → G7 → Cmaj7
Guide tones: F/C → B/F → E/B
Minor ii–V–i: Bm7b5 → E7 → Am
Minor altered: E7(b9) → Am
Tritone substitute: Dm7 → Db7 → Cmaj7
G7(b9): Ab tension
G7(#9): A#/Bb enharmonic pitch
G7(b13): Eb tension
D Aeolian vs D Dorian: Bb vs B natural characteristic 6th
```

## 검수 기준

- MIDI header/PPQ/event 구조가 유효해야 한다.
- 문서의 Key/Roman Numeral/Chord symbol과 sounding pitch가 일치해야 한다.
- Variation은 원 진행의 목적을 유지하면서 해당 변수만 의도대로 바뀌어야 한다.
- enharmonic spelling은 MIDI pitch 자체에는 저장되지 않으므로 문서의 harmonic context에서 해석한다.

## 상태

```text
MIDI parse/readability: PASS
Starter progression document/chord alignment: PASS after fixes
Harmony ear-training theory/note alignment: PASS
P0 MIDI findings remaining: 0
```
