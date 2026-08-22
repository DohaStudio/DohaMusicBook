# Lesson 02 — Density와 Layering: 얼마나 채우고 얼마나 비울 것인가

## 학습 목표
- Arrangement Density를 Section Energy와 연결한다.
- Layering과 단순 악기 수 증가를 구분한다.
- 반복과 변화가 편곡에서도 필요함을 이해한다.

## 1. Density
Density는 한 순간에 들리는 정보량이다. 악기 수뿐 아니라 Note 수, 리듬 밀도, 음역 폭, Layer 수, 잔향도 체감 Density에 영향을 준다.

```text
Verse  = sparse
Pre    = growing
Chorus = full
Bridge = reset or contrast
Final  = peak or intentional reduction
```

이 패턴은 예시일 뿐 절대 규칙이 아니다.

## 2. 비우는 것도 편곡이다
Chorus 직전 Kick이나 Bass를 잠시 빼면 오히려 Chorus가 더 크게 느껴질 수 있다. 모든 Section에 모든 악기를 유지하면 대비가 약해진다.

## 3. Layering
Layering은 같은 역할을 여러 소리로 겹쳐 하나의 복합 음색을 만드는 방법이다.

```text
Snare A = body
Snare B = attack
Snare C = ambience
```

각 Layer는 이유가 있어야 한다. 같은 주파수와 역할을 반복해서 쌓으면 커지기보다 흐려질 수 있다.

## 4. 듣기 실습
레퍼런스 곡에서 Section마다 체감 Density를 1~10으로 적는다.

```text
Intro:
Verse:
Pre:
Chorus:
Bridge:
Final:
```

그리고 Density가 변한 이유를 `악기 추가`, `리듬 촘촘`, `음역 확대`, `더블링`, `FX` 등으로 분리한다.

## 5. 직접 편곡
8마디 Chorus를 세 버전 만든다.

- A: Vocal + Piano
- B: A + Bass + Drums
- C: B + Pad + Double + FX

무조건 C가 가장 좋다고 결론내리지 않는다. 각 버전에서 Hook의 명료도가 어떻게 변하는지 비교한다.

## 6. DohaStudio 연결
향후 Section 단위 편곡 정보를 표현한다면 `density`, `active_tracks`, `layer_group`, `mute_state`, `automation` 같은 개념이 필요할 수 있다. 현재 완성된 mutable arrangement editor가 있다는 의미는 아니다.

## 완료 체크
- [ ] Section별 Density Map을 만들었다.
- [ ] 악기를 빼서 대비를 만드는 예를 찾았다.
- [ ] Layer마다 역할을 설명할 수 있다.
