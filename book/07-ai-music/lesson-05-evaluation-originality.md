# Lesson 05 — Evaluation, Similarity, Originality

## 학습 목표
- AI 음악 평가 기준을 음악 요소별로 나눈다.
- Similarity와 법적 판단을 구분한다.
- 레퍼런스에 과도하게 기대는 결과를 감지하는 관점을 만든다.

## 1. 평가 항목
후보는 한 가지 점수로만 보지 않는다.

- Melody
- Harmony
- Rhythm/Groove
- Song Form
- Arrangement
- Sound Quality
- Vocal Quality
- Intent Fit
- Originality
- Editability

## 2. Originality를 어떻게 볼 것인가
독창성은 '처음 듣는 모든 것'을 의미하지 않는다. 장르 문법 안에서도 Melody contour, Hook, Rhythm, Chord treatment, Sound palette의 조합이 충분히 자기 방향을 가질 수 있다.

## 3. Similarity의 역할
유사도 분석은 검토 신호다. 자동 점수가 높다고 곧바로 표절이 확정되는 것도 아니고, 낮다고 안전이 보장되는 것도 아니다.

검토할 수 있는 층:
```text
melodic similarity
rhythmic similarity
harmonic similarity
audio/embedding similarity
structural similarity
```

## 4. 사람이 다시 듣기
Similarity가 높다면 다음을 확인한다.
- 핵심 Hook이 지나치게 유사한가?
- Melody의 리듬과 음정 윤곽이 동시에 닮았는가?
- Arrangement만 다른 동일 아이디어에 가까운가?
- 흔한 장르 문법 수준인가, 특정 표현에 가까운가?

## 5. 수정 기록
```text
Similarity concern:
Affected section:
What feels too close:
Change made:
After-change review:
```

## 6. DohaStudio 연결
SimilarityReport가 존재하거나 향후 구현되더라도 법적 결론 자체를 소프트웨어가 자동 결정하는 것으로 문서화하지 않는다. 시스템은 provenance, 분석 결과, human review를 보존하는 쪽이 중요하다.

## 완료 체크
- [ ] 후보 평가표를 사용했다.
- [ ] Similarity와 법적 표절 판단의 차이를 설명한다.
- [ ] 유사성 우려가 있는 요소를 음악적으로 기술할 수 있다.
