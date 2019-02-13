# React Native Basic

각종 자료와 실전 개발을 통해 알게된 지식들 의식의 흐름대로 기록

- style props :  component마다 style props를 줘서 css 스타일을 지정할 수 있다. 
  - `flex` :flex는 부모 컴포넌트와 형제(?) 컴포넌트들의 관계로, 비율적인 크기가 결정된다. 화면의 크기에 따라 유동적으로 변하는, 반응형 화면 구성하기에 좋다. 만약에 자식 component에 flex를 활용했는데 부모 component에 flex나 fixed width 혹은 height가 없다면 부모의 dimension이 0이므로, 자식 component또한 화면에 표시되지 않는다. 
  - `flexDirection` : flexbox에서 자식들을 `row` 혹은 `column`으로 정렬가능하다.
  - `justifyContent` : flexbox에서 자식들을 어떻게 배열할 것인가에 대한 옵션, `flex-start`, `center`, `flex-end`, `space-around`, `space-between`, `space-evenly`가 있다.
  - `alignItems` : 자식컴포넌트의 세컨더리 axis의 스타일을 결정한다. `flexDirection: row`라면 `column`이고, 역 또한 같다. 옵션으로 `flex-start`, `center`, `flex-end`, `stretch`가 있다.

- `TextInput` : 유저의 텍스트 인풋을 받는 기본적인 컴포넌트. props로 `placeholder`, `onChangeText`, `onSubmitEditing`과 같은 옵션을 줄 수 있다.

- `Button` : 유저의 터치를 기반으로 한 버튼 입력 컨트롤, `onPress`를 통해 터치 동작을 설정, `title`로 버튼 이름 설정

- 그 외 touchable components : `TouchableHighlight`, `TouchableOpacity`, `TouchableNativeFeedback`, `TouchableWithoutFeedback` 이 있고, props로 `onPress`, `onLongPress`을 줄 수 있다.

- `ScrollView` : 스크롤할 수 있는 일반적 컴포넌트, 자식들이 같은 종류일 필요없고, `horizontal` 속성 줘서 가로 세로 스크롤 설정도 가능하다. 하나의 아이템으로 `ScrollView`를 구성하면 줌인 줌아웃을 할 수 있다. `maximumZoomScale` 혹은 `minimunZoomScale`를 옵션으로 줄 수 있다.

- `FlatList` : `data`와 `renderItem` 두 props를 필요로 한다. `ScrollView`와 달리 현재 화면에 보여지는 요소만 렌더링한다. 모든 요소를 한번에 렌더링 하는 것이 아니다.

- `SectionList` : iOS의 `UITableView`처럼 리스트가 섹션별로 나눠져서 표현된다. 가나다 혹은 abc로 구분되어진 연락처가 예시

- Networking : `fetch`나 `request`, `axios`, `XMLHttpRequest` 아무거나 써도 된다. 웹소켓 `WebSoket` 또한 지원한다.

- NativeBase : mobile App용 디자인 키트, 디자인은 기본빵하고 기능만 빠르게 구현하고 싶을 때 참 좋을 듯, 다만 expo 환경에서 사용할 때 환경설정이 약간 까탈스러워서 헤맸다.

  - 까탈스러워서 헤맸다고 적어놓고 해결방법은 적어 놓지 않아서 또 한참 헤맸다.~~또하나배웁니다~~ [기본세팅](https://docs.expo.io/versions/latest/guides/using-custom-fonts/), + [참고세팅](https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/src/boot/setup.js),
  -  `import Expo from "expo"` + `Expo.Font.loadAsync()` 는 안되는데, `import {Font} from "expo"` + `Font.loadAsync()`는 되는 이유는 대체 뭘까, 전자는 `Expo.Font`가 `undefined`로 떴다.

- [React Navigation](https://reactnavigation.org/docs/en/getting-started.html) : RN으로 진짜 쉽게 어플 작성하게 해준다. 요즘 앱에 있는 기본적인 기능은 다 있는 듯, expo에서 NavigationPlayground 검색해서 써보자. github에 코드도 다있다.

- 비동기 함수 사용해서 로딩할 때는 state랑 component마운트 관련 함수 써서 처리 해줘야 한다.

- `import React from 'react' : ` `React`를 직접 사용하는 일이 없어도 꼭 써줘야 app이 동작한다.

- `HomeTab.js`에서 `componentWillMount`함수는 deprecated 되었으니 `componentDidMount`를 앞으로 사용, 자세한 내용은 [React의 LifeCycle API](https://velopert.com/3631)를 찾아보자.

- `fetch`와 `axios`의 장단점을 비교한 블로거님이 계신다. [잘 참고해보자](https://hoorooroob.tistory.com/entry/React-React-Naive-TIPS-axios-%EC%99%80-fetch-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C)

- 새로고침이 심지어 컴포넌트로 제공된다.. _~~갓 리액트~~_ [사용법](https://facebook.github.io/react-native/docs/refreshcontrol)도 있고 해보니 `react-navigation`에서 `<Content refreshControl={...}/>` 에다가도 쓸 수 있다. 리스트형 컴포넌트는 다 될 듯. 쉽게 해결하여 기쁘다.

  - onRefresh 함수 작성할 때 `onRefresh () {this.setState(...)}`으로 하면 `this.setState is not a function` 뜬다. 그런데 `onRefresh = () => { ... }`으로 작성하면 에러 없이 잘 된다. 저번에 분명히 수업 때 했었는데 정리해놨었는지 모르겠다. 찾아보자. 혹은 책에 있을지도. 지금 리프레싱이 두번되는데 왜그런지 모르겠다. 왜그런지 내일 한번 생각해보자. `setTimeout()`을 썼더니 두번된다. 이게 feeds에 항상 배열값이 차있어서 그렇구만. 리프레싱할때 refreshing state가 변하니까 무조건 다시 렌더링 하는것 같다. faker는 로딩이 없어서 두번바뀌는 것 처럼 보이는 건가

- 유용한 자동완성(react용 snippets를 설치했다)

  - [직접 만들 수도 있다](https://code.visualstudio.com/docs/editor/userdefinedsnippets, "snippet")

  - `imrc` : `import React, { Component } from 'react'`

  - `rnc`:

    ```js
    import React, { Component } from 'react'
    import { Text, View } from 'react-native'
    
    export default class HomeTab extends Component {
      render() {
        return (
          <View>
            <Text> textInComponent </Text>
          </View>
        )
      }
    }
    ```

  - `rcc` : 

    ```js
    import React, { Component } from 'react'
    
    export default class App extends Component {
      render() {
        return (
          <div>
          
          </div>
        )
      }
    }
    ```

  - `import statement`에서 모듈 이름을 먼저 쓰고 가져올 컴포넌트를 입력하면 자동완성이 지원된다.

- faker를 활용한 instagram 따라 만들기

  - `expo init instagram-faker`
  - `npm i react-navigation native-base @expo/vector-icons`
  - `react-navigation`을 활용해서 만든다. `app.js`에는 `creatStackNavigator`를 사용하여 스택을 만들고 `createAppContainer`를 활용해서 앱화면을 출력한다.
  - 메인화면에 위쪽 상단 네비게이션을 `static navigationOptions`를 이용해 만든다.
  - 하단 네비게이션은 `createMaterialTopTabNavigation`을 통해 만든다.

- `native-base`의 `<Button>` 컴포넌트가 당최 가운데로 안갔었다. `react-native-easy-grid`가 `expo`프로젝트에는 기본 내장되어있어서 그걸 쓰는데, 얘가 좋은 건 알겠는데 상위 컴포넌트에서 `alignItems:'center'`해도 자식놈의 버튼이 가운데로 가질 않았다. 버튼마다 `alignSelf:'center'`해줘야 가운데로 먹혔다. 얘 해결하는데 한시간 넘게 걸렸지만 그리드나 flexbox 응용 많이 해본 듯해서 무의미한 시간은 아닌듯. 그리고 웬만하면 기본 `react-native` 컴포넌트 쓰는게 좋다. 자체 스타일 때문에 스타일 수정이 힘들다. 

- 호이스팅(hoisting) : 함수와 변수의 선언하는 코드는 마치 그 코드가 가장 위에 있는 듯이 동작하는 것.

- 함수 표현식과 선언식 : `var func = variable => console.log(variable)`과 같은 형식이 함수 표현식.  함수도 객체(일급객체)라는 의미를 가지면서 매개변수로 함수를 쓸 수 있게 한다. ~~그런데 아직도 왜 선언식으로는 콜백을 줄 수 없는 경우가 생길까 의문~~

- 클로져(closure) : 내부함수가 외부함수의 지역변수에 접근할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때 까지 소멸되지 않는 특성

  ```js
  var tabs = document.querySelectorAll('.tab');
  var i;
  
  for (i = 0; i < tabs.length; i += 1) {
    	tabs[i].onclick = function (event) {
      	console.log(i); // 어느 탭을 클릭해도 항상 tabs.length (i 의 최종 값)이 출력
    	};
  }
  ```

  위 코드에서 왜 어느 탭을 클릭해도 항상 `i`의 최종값이 출력되는지 생각해보자.

  함수가 호출되는 시점에서 `i`의 값이 무엇인지 생각해보면 된다. 

  ```js
  function tabsHandler(index) {
      return function tabClickEvent(event) {
          // 바깥 함수인 tabsHandler() 의 index 인자를 여기서 접근할 수 있다.
          console.log(index); // 탭을 클릭할 때 마다 해당 탭의 index 값을 표시
      };
  }
  
  var tabs = document.querySelectorAll('.tab');
  var i;
  
  for (i = 0; i < tabs.length; i += 1) {
      tabs[i].onclick = tabsHandler(i);
  }
  ```

  위 코드에서는 왜 해당 `i`의 값이 출력되는 것일까? 머리속으로 생각해볼 수록 헷갈리는 개념이지만 어렵다고 쫄 거 없이 다음에 또 보면 된다. 보다 보면 어느새 당연해지겠지.