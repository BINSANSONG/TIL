# React Native Basic

[React Native Docs][https://facebook.github.io/react-native/docs/]를 참고하여 새로 알게 된 내용을 정리

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