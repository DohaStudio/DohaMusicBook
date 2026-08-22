# Lesson 01 — Digital Audio와 Editing

## 학습 목표
- MIDI와 Audio 이후 단계의 차이를 이해한다.
- Sample Rate, Bit Depth, WAV를 작업 규격 관점에서 본다.
- Mixing 전에 Editing이 필요한 이유를 익힌다.

## 1. Digital Audio
Audio 파일은 시간에 따라 변화하는 실제 파형을 기록한다. MIDI처럼 Note를 직접 옮기는 데이터가 아니므로 수정 방식도 다르다.

### Sample Rate
초당 신호를 얼마나 자주 샘플링하는지를 나타낸다.

### Bit Depth
각 샘플의 정밀도와 표현 가능한 다이내믹 범위에 관련된다.

숫자를 무조건 높이는 것이 목표가 아니라 프로젝트 전체에서 적절한 규격을 일관되게 유지하는 것이 중요하다.

## 2. 작업 파일과 배포 파일
작업 중에는 WAV 같은 무손실 포맷을 중심으로 보존하고, MP3/AAC 같은 손실 압축은 배포나 미리듣기 목적에 맞게 사용한다. 원본과 파생 파일의 관계를 기록한다.

## 3. Editing
Mixing 전에 다음 문제를 먼저 정리한다.

- Trim
- Fade in/out
- 불필요한 silence/noise 구간
- Timing alignment
- Comping
- 필요한 Pitch correction

좋지 않은 편집을 EQ나 Compressor로 숨기려고 하지 않는다.

## 4. 직접 실습
한 Audio Clip의 앞뒤 무음을 정리하고 Fade를 적용한다. 원본과 편집본을 모두 보존한다.

```text
Source:
Edit performed:
Reason:
Audible improvement:
New problem introduced:
```

## 5. DohaStudio 연결
현재 DohaMusic의 WAV playback은 청취/검토에 사용할 수 있지만 완전한 waveform destructive/non-destructive editor로 설명하지 않는다. 향후 편집은 원본 Asset을 덮어쓰기보다 새로운 Version/Artifact와 lineage를 남기는 방향이 중요하다.

## 완료 체크
- [ ] Sample Rate와 Bit Depth의 역할을 설명한다.
- [ ] 작업용/배포용 파일을 구분한다.
- [ ] Editing과 Mixing을 구분한다.
- [ ] 원본과 편집본을 A/B 비교했다.
