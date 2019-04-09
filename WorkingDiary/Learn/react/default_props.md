# Default Props

default props가 많이 필요할 때 쓸 것 같은 선언 방법

#### 1. 보통 많이들 쓰는 방법

```jsx
<div>
  {props.someProperty ? props.someProperty : 'defaultValue'}
</div>
```

한 두개라고하면 이런식으로 처리할 수 있지만, 처리해야하는 default값이 많고 좀 이쁘게 정리해놓고 싶다면?

#### 2. defaultProps 사용하기

```js
ComponentName.defaultProps = {
  prop1:'first',
  prop2:'second',
}
```

함수형이든 class형이든 모두 저렇게 쓰면 default로 설정할 수 있다.

추가로 `NameofClass.someProp = somevalue`는 무슨 의미를 가지는 걸까? 클래스 멤버변수로 `static` 변수와 같은 느낌인걸까? 그렇다 클래스 변수로 들어간다.

#### 3. defaultProps 사용하며 느낀 주의할 점

```js
//DefaultTest.js
import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultTest({ foo, bar }) {
  const { hoo } = bar.content;
  return (
    <div>
      <h3>foo:{foo}</h3>
      <h3>hoo:{hoo}</h3>
    </div>
  );
}

DefaultTest.defaultProps = {
  foo: 'foo',
  bar: {
    content: {
      hoo: 'hoo',
    },
  },
};
```

```js
//higher component, Index.js
import React from 'react';
import DefaultTest from './DefaultTest';

const test = {
  bar: {
  	content: {
    idiot: 'kkk',
  	},
  },
};

export default class Index extens React.Component {
  render() {
    return (
    	<DefaultTest {...test} />
    );
  }
}
  
```

위와 같은 코드 구성에서 만약 `test.bar`에 `content`가 없다면 어떻게 될까? `DefaultTest`에 `defaultProps`를 선언해 주었으니 문제없이 `hoo`가 출력될까? 아니다. 테스트 해본 결과 그렇게 까진 친절하지 않고  `foo`나 `bar`가 들어오지 않을 경우에만 `defaultProps`를 활용하는 듯하다. 그래서 위와 같이 객체의 뎁스가 있는 경우에 잘못된 모든입력에 대비하려면 거의 모든 값에 대해서 일일이 default를 지정해줘야 하는 듯하다.

알아보던 중에 `recompose`라는 애가 있었는데 얘가 주는 `defaultProps`라는 모듈을 사용하면 HoC방식으로 `defaultProps`를 설정할 수 있는 듯한데, 얘는 어떨까? 궁금하다. `props`를 다 보고, 빈 속성이 있으면 알아서 채워줄 수 있을까? [나중에 살펴보자](<https://blog.logrocket.com/a-complete-guide-to-default-props-in-react-984ea8e6972d>)

