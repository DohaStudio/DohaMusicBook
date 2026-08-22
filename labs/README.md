# DohaStudio Labs

`labs/`는 책에서 학습한 음악 개념을 DohaStudio의 데이터 모델, AI 작업, 사용자 편집 흐름 및 실험으로 연결한다.

## Lab domains

- `music-intent` — 목적, 장르, 무드, 청자, 레퍼런스의 구조화
- `song-form` — section과 energy curve
- `rhythm` — tempo, meter, feel, groove
- `harmony` — chord/function/progression/reharmonization
- `motif-melody` — motif representation, variation, candidate generation
- `lyrics-prosody` — syllable/prosody/alignment
- `reference-analysis` — 레퍼런스 음악의 속성 분석
- `candidate-ranking` — 생성 후보 비교와 human review
- `midi-editing` — 생성 결과의 symbolic editing
- `arrangement-sound` — instrument/timbre/register/density
- `audio-production` — rendering, mixing, mastering
- `rights-lineage` — rights, provenance, training/commercial eligibility

## Lab document template

1. Music concept
2. Why it matters
3. Representation
4. DohaStudio boundary
5. Input / output
6. Human control
7. AI responsibility
8. Failure cases
9. Validation
10. Related implementation references

Labs must not claim a feature is implemented until the corresponding repository state has been verified.
