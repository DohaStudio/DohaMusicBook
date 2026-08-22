# Lesson 03 — Sample, Plugin, Virtual Instrument, SoundFont 권리

## 학습 목표
- 음악 작품에 사용하는 권리와 원본 자산을 재배포하는 권리를 구분한다.
- Sample/Loop/Plugin/SoundFont의 라이선스를 별도로 확인한다.
- 상업 이용과 AI 학습 이용을 같은 범위로 보지 않는다.

## 1. Royalty-free의 의미를 과장하지 않는다
Royalty-free는 일반적으로 사용 때마다 추가 로열티를 내지 않는 라이선스 구조를 의미할 수 있지만, 저작권이 없다는 뜻은 아니다. 개별 라이선스 조건이 우선한다.

## 2. Sample과 Loop
확인할 항목:
```text
commercial music release
standalone redistribution
sample-pack redistribution
Content ID restriction
derivative work
AI training use
attribution
```

## 3. Plugin과 Virtual Instrument
프로그램 자체의 라이선스와 포함된 Sample Library의 권리가 다를 수 있다. 출력된 음악을 상업적으로 사용할 수 있어도 내부 Sample을 추출·재배포하는 것은 금지될 수 있다.

## 4. SoundFont
무료 다운로드 가능 여부와 상업 이용 허용 여부를 분리한다. 특히 다음을 기록한다.

```text
SoundFont:
Author/vendor:
License:
Commercial release:
Redistribution:
Sample extraction:
AI training:
Attribution:
Evidence:
Checked date:
```

## 5. 실습
현재 사용할 SoundFont 또는 Sample Pack 하나의 공식 라이선스를 찾아 위 양식을 채운다. 라이선스가 불명확하면 `UNKNOWN/BLOCKED`로 둔다.

## 6. DohaStudio 연결
Asset 등록 시 `source`, `license evidence`, `allowed scope`, `checked_at`를 분리해 보존하는 습관이 중요하다. 파일이 로컬에 존재한다는 이유만으로 학습/상업/재배포 scope를 추론하지 않는다.

## 완료 체크
- [ ] Royalty-free와 copyright-free를 구분한다.
- [ ] 작품 사용/재배포/AI 학습 권리를 분리한다.
- [ ] 실제 SoundFont 또는 Sample 라이선스 하나를 검토했다.
