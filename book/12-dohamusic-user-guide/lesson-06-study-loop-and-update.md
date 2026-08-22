# Lesson 06 — DohaMusic으로 공부하는 반복 루프와 문서 갱신법

## 학습 목표
- 프로그램 사용을 음악 공부 루프로 만든다.
- CURRENT/FOUNDATION/TARGET 상태를 매번 다시 확인한다.
- 음악적 요구와 제품 요구를 분리해서 기록한다.

## 1. 권장 공부 루프

```text
오늘 배울 음악 개념 선택
→ 레퍼런스 곡 분석
→ DohaMusic에서 생성 목표 설계
→ Lyrics/Voice 설정
→ Generation
→ Result 청취
→ History에서 후보 비교
→ Project에 연결해 Timeline 확인
→ 외부 DAW 또는 수동 분석
→ Product Gap 기록
→ 다음 연습에 반영
```

## 2. 한 번의 세션 기록

```text
Date:
Project:
Music topic:
Reference:
Generation intent:
Lyrics revision:
Voice/profile used:
Job/result:
Best timestamp:
Worst timestamp:
Music lesson learned:
Product limitation found:
Next exercise:
```

## 3. 음악 문제와 제품 문제를 분리한다
예를 들어 Chorus가 약하다고 해서 곧바로 프로그램 버그라고 판단하지 않는다.

```text
Problem: Chorus feels weak

Music diagnosis possibilities:
- melody range too narrow
- harmonic lift insufficient
- groove unchanged
- arrangement density unchanged

Product diagnosis possibilities:
- no partial chorus regeneration
- no MIDI note editing
- no section-level arrangement control
```

먼저 음악 원인을 설명한 뒤 필요한 제품 기능을 적는다.

## 4. Product Gap 템플릿

```text
Gap:
Music reason:
Current workaround:
CURRENT / FOUNDATION / TARGET:
Likely repository owner:
Related music chapter:
Implementation priority:
```

책은 Roadmap을 대신하지 않는다. 실제 구현 우선순위는 DohaMusic 원본 Roadmap/authority 문서에서 결정한다.

## 5. 사용법 문서 갱신 절차
DohaMusic이 변경되면 다음 순서로 확인한다.

1. `develop` README
2. ROADMAP / product direction
3. Frontend Overview와 실제 `frontend/app/` route
4. 관련 API/domain 문서
5. 필요하면 구현 코드와 tests
6. 그 뒤에 이 Part의 사용법을 수정

Screenshot이나 오래된 기억만으로 CURRENT를 갱신하지 않는다.

## 6. 상태 표시

```text
CURRENT     지금 실행·검증 가능한 기능
FOUNDATION  계약/도메인/Mock 기반은 있으나 완성 기능은 아님
TARGET      계획 또는 미구현 기능
STUDY       음악적으로 공부하지만 제품 구현과 직접 연결되지 않은 내용
```

## 7. 최종 실습
Part 01~10 중 한 주제를 고르고 DohaMusic으로 한 번의 전체 학습 세션을 수행한다.

예:

```text
Topic: Chorus melody
Reference analysis
→ Studio generation
→ Result listening
→ History compare 3 candidates
→ Project timeline timestamp notes
→ Melody diagnosis
→ Product gap: no note-level edit
```

이 기록 하나가 완성되면 Part 12의 목적을 달성한 것이다.

## 완료 체크
- [ ] DohaMusic을 음악 공부 도구로 한 세션 이상 사용했다.
- [ ] 음악 문제와 제품 문제를 분리했다.
- [ ] Product Gap을 작성했다.
- [ ] 최신 구현을 확인한 뒤 사용법을 갱신하는 절차를 설명할 수 있다.
