# Lesson 06 — Melody와 Harmony, 그리고 DohaStudio에서 공부하기

## 학습 목표
- Chord Tone과 Non-Chord Tone을 긴장/해결로 듣는다.
- 생성 후보의 화성을 분석하는 학습 절차를 만든다.
- 현재 프로그램과 향후 Chord editing 기능을 구분한다.

## 1. Melody는 Harmony 위에서 다르게 들린다
C라는 Melody note도 아래 코드가 C, Am, F인지에 따라 역할과 색채가 달라진다. 따라서 Melody와 Chord를 완전히 독립적으로 평가하지 않는다.

## 2. Chord Tone과 Non-Chord Tone
Chord Tone은 현재 화음에 포함된 음이다. Non-Chord Tone은 일시적 긴장과 선율적 연결을 만든다.

학습할 주요 유형:
- Passing Tone
- Neighbor Tone
- Suspension
- Anticipation
- Appoggiatura

처음에는 이름 맞히기보다 `안정 → 긴장 → 해결`을 귀로 찾는다.

## 3. Candidate Harmony Review
현재 DohaMusic의 생성 결과 두 개를 선택하고 같은 Section을 비교한다.

```text
Candidate:
Section:
Estimated key:
Progression/Bass:
Harmonic rhythm:
Tension point:
Resolution point:
Melody note that clashes or shines:
Section contrast:
Decision:
```

## 4. CURRENT
현재 DohaMusic에는 완성형 Chord Editor, MIDI Piano Roll이 없다. 따라서 이 Part에서 프로그램은 **재생·시간 위치 확인·후보 비교·Artifact/Composition 기록을 위한 도구**로 사용한다.

## 5. TARGET
향후 편집 가능한 작곡 시스템에서는 다음이 필요할 수 있다.

```text
Section
  └─ ChordEvent[]
       ├─ start
       ├─ duration
       ├─ root
       ├─ quality
       ├─ extensions
       ├─ bass_note
       ├─ function
       └─ source / edit lineage
```

이 예시는 학습용 목표 모델이며 현재 구현 계약이 아니다. 실제 구현 시 DohaMusic의 최신 Domain/ADR을 우선한다.

## 6. Part 03 최종 과제
Verse–Pre-Chorus–Chorus를 위한 Harmony Plan을 만든다.

```text
Key:
Verse progression:
Verse harmonic rhythm:
Pre progression:
Pre tension strategy:
Chorus progression:
Chorus resolution strategy:
One reharmonization idea:
Bass movement:
Melody/chord risk:
```

원본 진행과 수정 진행을 둘 다 보존하고 왜 수정했는지 기록한다.

## 7. Part 완료 체크
- [ ] Key/Scale을 설명한다.
- [ ] Diatonic Triad를 만든다.
- [ ] 기능화성을 듣는다.
- [ ] Harmonic Rhythm을 비교한다.
- [ ] Inversion을 사용했다.
- [ ] 기본 Reharmonization을 적용했다.
- [ ] Melody와 Chord의 긴장/해결을 들었다.
- [ ] AI Candidate 두 개의 화성을 비교했다.
