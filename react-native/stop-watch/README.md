# Stopwatch 제작기

react native와 native base를 이용해 만든 스탑와치 제작기입니다. 언제나 그랬듯이 의식의 흐름대로

1. 기능 정하기
   - 버튼 : 시작, 일시정지, resume, laps, 초기화
   - 타이머 display : 분:초:00
   - laps:맨위부터 가장 최근 순서대로 순서 naming과 시간 표시  
2. 구조 만들기
   - App
     - MainScreen
       - timer
       - Buttons Row
       - Lap
3. 상태 구분
   - 초기 단계
     - 화면에는 시작 버튼만 보인다
   - 시작 버튼을 누른 단계
     - 시작 버튼이 사라지고 lap과 pause버튼이 나타난다.
     - lap을 누르면 lap이 쌓인다.
   - 시작 버튼을 누른 후 일시 정지를 누른 단계
     - lap이 Reset으로, pause는 resume으로 바뀐다.
     - reset을 누르면 1단계로, resume를 누르면 2단계로 간다. 
4. 타이머 구현하기
   - 