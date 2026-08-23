# MIDI Validation Findings — PR #2

> 범위: `examples/chord-progressions/` 40개 MIDI와 `examples/harmony-ear-training/` 17개 MIDI의 생성 규칙·문서 화성·실제 note content를 대조한다.

## 확인된 P0 불일치

Starter progression 중 3개 세트가 study sheet의 Key/Chord와 초기 생성 MIDI의 Key가 달랐다.

```text
06 Rock
Doc: E – D – A (E center, I–bVII–IV)
Old MIDI: C – Bb – F

07 Dance
Doc: Fm – Db – Ab – Eb (F minor, i–VI–III–VII)
Old MIDI: Am – F – C – G

08 Cinematic
Doc: Dm – Bb – Gm – A (D minor, i–bVI–iv–V)
Old MIDI: A-minor-centered material
```

따라서 세 세트의 `original`, `rhythm`, `velocity`, `voicing`, `transpose-plus3` MIDI를 문서 기준으로 다시 생성한다.

## 정상으로 대조된 Starter progression

```text
01 C Major: C – G – Am – F
02 A Minor: Am – F – C – G
03 C Major: Am – F – C – G
04 C Major: C – Em – F – Fm
05 C Major: Dm7 – G7 – Cmaj7 – Am7
```

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
