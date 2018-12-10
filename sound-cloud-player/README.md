# 사운드 클라우드 API 적용 static web 만들기

### 1. 기능 설명
> SoundCloud의 API를 적용하여 음악을 검색하고 재생목록을 만들어 줌
### 1. 새로 배운 점
 * 관련 기능을 모아 객체로 정리하면 보기 간편하고, 디버깅 하기도 편하다. 리팩토링(코드 보기 좋도록 줄이거나 수정)하기도 간편
 * if else 간소화 : `imageImg.src = (canbe_null||sub_link);` , 첫번째 인자가` null`일 경우 두번째 인자를 입력
 * Window - 전역객체인데 써도 안써도 상관없다, `console.log()`와 `window.console.log()`가 같다는 말
 * `<img>`의 `alt`속성은 img가 보통 보이지 않을 때 대신 보이게 쓰는 말
 * `<img>`태그를 js에서 불러왔을 때 `onerror`속성에 함수를 전달할 수 있다. 대체 이미지 설정 가능
 * window.localStorage  - 사용자의 로컬환경에 정보가 저장되는 객체, 쿠키나 세션은 서버가 관리하는데 반해 static web에서도 비슷한 기능을 할 수 있다.

