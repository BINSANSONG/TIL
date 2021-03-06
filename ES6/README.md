# ES6 주목할만한 사항 정리

### 파일별 간략 설명
 - `index.js` : 공부할 ES6 함수 목록
 - `frame` : 대상 파일들 진행 과정, 큰 틀
 - `find` : `Array`에서 조건에 해당하는 인자 하나를 찾아 넘겨준다.
 - `filter` : `Array`에서 조건에 해당하는 모든 인자가 포함된 `Array`를 넘겨준다.
 - `forEach` : `Array`의 모든 요소를 돌며 인자로 넘겨주는 함수의 내용을 실행한다.
 - `map` : `Array`를 돌며 요소마다 인자로 넘겨주는 함수의 내용을 실행한 결과를 모아 배열로 넘긴다.
 - `every` : `Array`를 돌며 인자로 전달된 함수의 조건에 모두 부합하면 `true`, 아니면 `false`를 준다.
 - `some` : `Array`를 돌며 인자로 전달된 함수의 조건에 하나라도 부합하면 `true`, 아니면 `false`를 준다.
 - `reduce` : `Array`를 돌며 인자로 전달 된 함수를 실행하는데, 형태가 `array.reduce(function(acc,element){},init_val)`이고 `acc`는 이터레이터를 도는 과정에서 바로 전 단계의 내부연산 결과, `init_val`은 초기 `acc`에 들어갈 값이다. 예를 들어 배열의 모든 요소를 더한 값을 출력하고 싶다면 `function(acc,element){return acc + element;}`으로 쓰고 `init_val`에는 `0`을 넣어주면 되겠다. 함수 내부를 어떻게 작성하느냐에 따라 쓰임새가 무궁무진하다.
 - `arrow_function` : 기존 함수 선언을 다르게 할 수 있는 방법이 있다. 참고로 간략화만 한게 아니어서 엄밀히 다른 선언이긴 하다.
 - `const_let` : `var`에서 두 종류로 분리한 이유는 의미론 적인 부분이 강한 듯 하다. 상수를 변하게 하면서 시작되는 에러가 많은데, 디버깅 할 때 매우 유리하다고 한다.
 - `default_function_args` : 함수에서 예상되는 입력 인자가 전달되지 않은 경우에 default값을 지정해 줄 수 있는 기능이다. 다른 언어와 달리 함수 이름이 같으면 인자 개수에 상관없이 같은 함수로 취급하는 JS의 특성에 기반하여 ES6이전에도 조건문을 통해 디폴트를 지정할 수 있었지만, 좀 더 쉽게 할 수 있도록 기능을 만든셈.
 - `rest_spread` : `rest`는 함수의 입력이 가변 개수로 들어올 경우를 컨트롤 하기위해, `spread`는 배열의 요소들을 펼쳐 사용해야할 때 쓴다.

### 참고로 짚고 넘어갈 부분[^1]
 - `Object.key` : `Object[key]`와 같다
 - 이미 작성하여 널리 쓰이고 있는 라이브러리나 API를 수정할 때 이전 버전의 코드를 참고하여 사용하는 사람들을 위해 기존 기능을 새 기능으로 연결해주어야한다. `rest_spread.js`에 나와 있는 내용. 
 - `Java`와 달리 배열의 `Iterator`에서 대상 배열의 요소를 변경하여도 에러없이 작동한다.[^2]
 - `==`와 `===`의 차이 : 값만 비교하느냐, `Type`까지 정확히 비교하느냐의 차이, `null==undefined`는 `true`지만 `null===undefined`는 `false`, `===`를 되도록 쓰는것이 정확한 코딩에 도움이 된다고 한다.
 - OOP : 실제 세상의 개념을 코드로 가져오기 위해 태어남

---------------------------------
[^1]: ES6를 공부하며 참고할 부분을 계속 추가할 예정
[^2]: 에러없이 작동한다는 뜻이지 해도 된다는 뜻은 아니다. 이터레이터 함수에서 절대로 원본 배열을 건드리지 않도록 프로그래밍 한다. 원본 배열을 건드리는 함수는 엄격히 제한되어야 나중에 데이터 관리에서 문제가 생기지 않는다.