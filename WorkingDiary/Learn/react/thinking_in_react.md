# React스럽게 생각하기

React문서의 [thinking in react](<https://ko.reactjs.org/docs/thinking-in-react.html>)를 읽고 쓴 글입니다. 어떤 UI를 바탕으로 React Component를 만든다고 할 때의 기준에 대한 글입니다.

### 1. UI를 컴포넌트 계층(Component Hierarchy)으로 쪼개기

1. 하나의 컴포넌트는 하나의 일만 한다
2. JSON 데이터 모델을 사용자에게 보여주는 일이 잦은데, 데이터 모델이 제대로 돼있다면 컴포넌트 구조도 똑같이 따라가면 된다

### 2. React의 정적버전(static version) 만들기

1. state는 전혀 사용하지 않고 만든다(나중에 어떤 고민을 거쳐 state를 최소로 하기 위해서이다). only use props.
2. 단순한 앱이면 top-down이 편하고, 복잡한 앱일수록 bottom-up이 편하다고 한다. 취향껏
3. React는 one-way data flow(one-way binding이라고도 함) 모델이다. 부모 컴포넌트에서 자식컴포넌트로 주는 것 밖에 못한다는 것

### 3. State 결정하기

1. 앱에서 다루는 데이터를 모두 리스트업 한다.
2. 다음 세가지 사항에 해당되면 state 후보에서 제외
   1. 부모 컴포넌트로부터 props로 전달되는 데이터인가?
   2. 시간에 따라 변하지 않는 데이터인가?
   3. 다른 state나 props로 부터 산출될 수 있는 데이터인가?
3. 위 세가지 항목을 바탕으로 데이터 중에서 state로 쓸 애들을 결정한다.

### 4. State는 어디서 살아야 할까?

1. state에 기반하여 렌더링되는 모든 컴포넌트를 찾는다.
2. 해당 컴포넌트 중 보통 가장 상위 컴포넌트가 state를 가진다.
3. state가 어디에 있어야 할지 애매하다면, 해당 컴포넌트를 포함하면서 단순히 state만을 가지는 상위 컴포넌트를 만들 수 있다.

### 5. Add Inverse Data Flow(역흐름데이터 추가하기...)

1. state를 갖는 컴포넌트에서 state를 변경할 함수를 컴포넌트 멤버로 만든다.
2. 그 함수를 데이터의 변경이 일어나는 컴포넌트에 props로 준다.
3. 해당 컴포넌트에서 데이터의 변경이 일어날 때 props로 받은 함수를 실행한다.

### 6. Functional Component vs Class Component

이건 문서에 있는 이야기는 아니지만 개인적인 느낌 + [참고글](<https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108>)을 보며 느낀점이다.

1. state나 life-cycle을 다루는 함수가 필요없다면 functional component를 쓴다. 코드를 작성하거나 읽기도 더 쉽고 테스트하기도 쉽단다.
2. 잘 이해한건지는 모르겠지만, 확실히 state나 life-cycle을 써야하는 컴포넌트와 그렇지 않은 컴포넌트를 구별해놓고, functional component로 쓰는 것이 데이터를 관리하는데 편하고 알아보기도 쉽다.
3. React 팀이 미래에 functional component의 퍼포먼스 향상을 언급했다고 하는데, 이 참고글이 2018년 7월에 쓰인 글이니까 찾아보면 이미 향상되었을지도?? 공식 블로그 대충봤는데 못찾겠다..ㅎ