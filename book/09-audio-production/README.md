# Part 09 — Audio Production: 녹음에서 Mix와 Master까지

> 학습 목표: 작곡 이후의 Audio Editing, Mixing, Mastering을 구분하고 각 단계의 목적을 이해한다.

## 1. Sample Rate와 Bit Depth

Sample Rate는 초당 얼마나 자주 신호를 샘플링하는지, Bit Depth는 각 샘플의 정밀도와 다이내믹 범위에 관련된다. 실무에서는 프로젝트/배포 목적에 맞는 규격을 일관되게 유지하는 것이 중요하다.

공부할 때는 숫자를 외우기보다 다음을 구분한다.

- 녹음/작업 포맷
- 최종 배포 포맷
- 파일 크기
- 변환 시점

## 2. WAV와 손실 압축

WAV는 일반적으로 무손실 PCM 작업 파일로 널리 사용된다. MP3/AAC 같은 손실 압축은 배포/미리듣기에 유용하지만 Mix/Master 전달용 원본으로는 보통 WAV가 적합하다.

## 3. Editing

Mixing 전에 Audio 자체를 정리한다.

- Trim
- Fade In/Out
- Silence cleanup
- Timing alignment
- Pitch correction
- Comping

편집과 믹싱을 섞어 생각하지 않는다. 먼저 불필요한 구간과 명백한 타이밍 문제를 정리한다.

## 4. Gain과 Headroom

Mixing 시작 시 각 Track의 레벨을 적절히 조절해 여유 공간을 만든다. Fader만으로 모든 문제를 해결하려 하지 않고 입력 레벨과 Gain staging을 확인한다.

## 5. EQ

EQ는 주파수 밸런스를 조정한다.

기본적으로 다음 질문을 한다.

- 불필요한 저역이 있는가?
- 중요한 악기가 서로 같은 대역을 차지하는가?
- 너무 거칠거나 답답한 영역이 있는가?
- 문제를 해결하기 위한 EQ인가, 취향을 위한 EQ인가?

주파수 숫자를 공식처럼 외우지 않고 실제 소리를 들어가며 판단한다.

## 6. Compression

Compressor는 다이내믹을 조절한다. 핵심 파라미터는 Threshold, Ratio, Attack, Release, Makeup Gain 등이다.

학습할 때는 다음을 귀로 확인한다.

- Peak가 줄어드는가?
- Sustain이 늘어나는가?
- Attack이 살아 있는가?
- Pumping이 생기는가?

## 7. Reverb와 Delay

Reverb는 공간감을, Delay는 반복을 만든다. 두 Effect 모두 많이 사용할수록 좋은 것이 아니다. Front/Back depth와 곡의 장르에 맞는 공간을 만드는 것이 목적이다.

## 8. Panning과 Stereo Image

Panning은 좌우 위치를 정하고 Stereo processing은 폭과 공간감을 조절한다. Mono compatibility도 중요하므로 넓게 들린다는 이유만으로 무조건 확장하지 않는다.

## 9. Automation

곡 전체에서 동일한 설정을 유지하지 않고 시간에 따라 Volume, Pan, Effect amount 등을 변화시킨다. Automation은 편곡과 Mix를 연결하는 중요한 도구다.

## 10. Bus와 Group Processing

비슷한 Track을 Group/Bus로 묶어 공통 처리를 할 수 있다.

```text
Drum Tracks → Drum Bus
Backing Vocals → Vocal Bus
All Tracks → Mix Bus
```

개별 Track 처리와 Bus 처리를 구분해 듣는다.

## 11. Mastering

Mastering은 Mix를 최종 배포용으로 준비하는 단계다. 단순히 소리를 크게 만드는 것이 아니다.

주요 관점:

- 전체 Tonal Balance
- Loudness
- True Peak
- Limiting
- Translation across devices
- Sequencing/metadata if album context

Mix 문제를 Mastering에서 전부 고치려고 하지 않는다.

## 12. Reference Track

비슷한 장르와 목적의 상업 음원을 Reference로 사용해 다음을 비교한다.

- Low-end 양
- Vocal 위치
- Brightness
- Stereo width
- Loudness impression
- Section dynamics

복제하려는 것이 아니라 현재 Mix가 지나치게 치우쳤는지 확인하는 기준점이다.

## 13. 직접 실습

같은 Mix에 대해 세 버전을 만든다.

```text
A: no processing
B: basic EQ + compression
C: B + reverb/delay + automation + limiter
```

각 단계가 실제로 개선되었는지 Blind에 가깝게 반복 비교한다.

## 14. DohaStudio와 연결

### DohaMusic

Mix, Export, Composition Snapshot의 최종 Workspace 결과를 소유하는 방향이다. 현재 완성형 Mixer의 Volume/Pan/Mute/Solo와 Track/Clip editing은 아직 목표 영역이 포함되어 있다.

### DohaAudio

Music Generation/Stem/Audio Analysis 및 향후 Audio AI 처리의 Provider 역할이다. 현재 실제 모델보다 Runtime, Dataset/Training governance foundation이 중심이므로 책에서 실제 Mix/Master 기능이 구현됐다고 쓰지 않는다.

### DohaVocal

Pitch/Timing Correction, Noise Reduction, Vocal Enhancement 등의 장기 책임이 있으나 실제 Production 모델은 현재 미구현이다.

## 15. 현재 프로그램으로 공부하기

현재 WAV 결과를 `/result/[jobId]` 또는 Project playback에서 듣고 다음을 기록한다.

```text
Low-end:
Vocal balance:
Harshness:
Dynamic range:
Stereo image:
Clipping/distortion:
Section loudness consistency:
```

외부 DAW에서 수정했다면 원본 AI 결과와 후처리 버전을 반드시 비교한다.

## 16. 이 장을 끝냈다면

- Editing, Mixing, Mastering을 구분할 수 있다.
- EQ/Compression/Reverb/Delay의 목적을 설명할 수 있다.
- Automation과 Bus processing의 역할을 이해한다.
- Reference Track을 분석 기준으로 사용할 수 있다.
- DohaMusic/DohaAudio/DohaVocal의 Audio 책임 경계를 구분할 수 있다.
