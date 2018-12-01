1. 기능 설명
	- 열린 페이지의 body tag의 background color 변경
	- url별 색상 설정 기억
2. 사용 library
	- browser action, popup 용
	- permisions: tabs, storage, activeTab, https://ajax.googleapis.com/
3. 설명
	- 마지막 permision https://ajax.googleapis.com/ 는 왜 필요한지 모르겠다
	- popup.html의 주석란에 보면 js와 html파일은 반드시 보안 정책상 분리되어야 한다고 한다.
	- popup.js에서 지금 열린 페이지 url 얻기, background color 변경, url별 저장된 background color 가져오기(storage 활용), 현재 url에 설정하는 color값 저장, 으로 구성되어있다.
	- popup.js에서 chrome.*  API에 접근할 수 있다. 지금까진 어디까지 되는진 모르겠
	- dropdown은 change라는 event 속성을 가지고 있다.