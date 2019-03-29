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

추가로 `NameofClass.someProp = somevalue`는 무슨 의미를 가지는 걸까? 클래스 멤버변수로 `static` 변수와 같은 느낌인걸까? 알아보자