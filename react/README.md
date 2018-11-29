# REACTJS
### jsx 문법
- js 코드를 쓰고 싶으면 {} 안에 넣는다
- js 코드 안에서 -는 빼기로 인식 된다. 그래서 background-color와 같은 네이밍을 할때 backgroundColor와 같이 두번째 단어의 첫글자를 Capital로 해준다.
- class 는 js의 예약어라 className으로 한다. for도 htmlFor인데 browser console에 warning으로 띄워주니 다 외울 것 없이 참고하면 된다.
- 배열을 안에 넣으면 concat해서 해준다.
- js 코드안에 객체를 넣으면 인식못한다. - 왜그럴까? - java의 tostring과 객체와 하여튼 그런거 생각해보자
### 참고 할 것들
- `$ npm install -g create-react-app`와 `$ npx create-react-app jsx`의 차이
- Tree Shaking : 
- React Component : 사용자에게 보여주고, 요청을 받아 이벤트핸들링 한다
- vscode react jsx - emmet 사용하기 : setting - emmet - include langueges - edit in settings.json - 수정버튼 - "javascript": "javascriptreact"
- vs extensions : ES7 React-Native snippets : components 함수 파일에서 rfc tab
- React.Fragment tag는 의미없는 태그, 실제 html 에서 추가되지 않지만 Component Function은 최상위 tag가 오직 하나여야 하기 때문에 사용한다.
- faker : 의미없지만 그럴듯한 random값을 제공해주는 npm package
- semantic-ui : bootstrap보다 이쁜듯
- React.Component를 상속받은 class에 constructor에는 보통 state를 초기화하는 코드만 작성하는 일이 많아서 `state = {something:something};`과 같이 간단히 쓰는 것을 허용한다.
- React.Component를 만들때 최상단 div에 component 이름을 className으로 지정해주면 나중에 보기 쉽다.
- Controlled element : 보여지는 모든 것을 react가 컨트롤하고 있는 컴포넌트 
- `iterator`를 통한 렌더링을 할 때는 최상위 태그에 unique한 key를 붙여주어야 한다. 그렇게 해서 같은 항목(ex. 이미지)을 자꾸만 다시 렌더링하는 것을 막을 수 있다. key를 설정하지 않거나, unique하지 않은 key를 줄 경우 아래와 같은 warning이 발생한다.
- ```
  Encountered two children with the same key, `this`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
  Warning: Each child in an array or iterator should have a unique "key" prop.
  ```

