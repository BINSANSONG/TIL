# 자바스크립트 문제 풀이

알고리즘 문제 풀이 대비 및 JS 학습용입니다. 두서가 없습니다.

- `function.apply`
- `_.identity` : f(x) = x 인 함수. 아무 필요 없을 것 같지만, default iterator의 역할을 한다. Iterator 조건을 넣어 주는 함수(예를 들면 `array.filter`)에서 사용자가 조건을 넣어주지 않을 경우 이 함수를 default로 쓸 수 있다. 함수 안에서 얘를 써서 주어진 collection의 값을 건드려서 원본은 바뀌지 않고 원하는 동작을 할 수 있다.
- `arguments` : 함수의 전달된 인수에 해당하는 `Array`형태의 객체, `Array` 형태의 객체란 `length` 속성, 0부터 인덱스 된 속성 등을 갖고 있지만, `forEach`, `map`과 같은 `Array`의 내장 메서드를 갖고 있지 않다는 뜻. 함수에 전달된 인수에 대해 `arguments[0]`과 같이 접근할 수 있다. 여기서 재밌는건 함수의 인수가 몇개가 되든 선언부에 표시하지 않아도 된다는 점, `function(firstArg, ...rest){}`과 같은 형태로 나머지 인수들(`rest`)을 한번에 처리할 수도 있다.
- `array.slice(start,end)` : `array`의 일부를 잘라서 리턴한다. `start`와 `end`는 모두 `array`의 `index`인데, 재밌는 것은 `index`가 배열 길이보다 길면 그냥 마지막 요소를 가리키고, -1은 다시 맨 마지막 요소의 `index`가 되고 차례차례 작아지면 `-array.length`가 첫번째 요소의 `index`가 된다. 역시 `-array.length`보다 작아지면 첫번째 요소를 가리킨다. 그래서 `array.slice(3,-1)`과 같이 보기에는 불편한 식도 실제로는 친절히 출력해준다.
- 삼항식 : `const x = condition ? A : B` 의 형태이다. `if else`구문보다 훨씬 짧다. 눈에 익숙하지 않으면 오히려 가독성이 떨어지니 자주 써서 눈에 익혀 두자.
- `Array.isArray(obj)`: 함수구현에서 array와 obj 둘 다 허용되도록 하려면 먼저 판별이 필요하다. boolean으로 리턴해준다.
- `for in`에 대해서 : obj나 array 모두 잘 사용할 수 있는데, `_.each` 문제에서 array쪽을 기본 `for`말고 `for in`을 쓰면 틀리는 이유는 무엇일까? - array와 obj의 가장 큰 차이점, `key`는 `string`이고, `index`는 `integer`이다. `key`나 `index`를 `_.each`에서 쓸 때 array와 obj를 구분하지 않으면 `index`에 `string`이 들어가거나 하는 문제가 생긴다. 정확히 말하면 array는 obj이면서 array이고, 그냥 obj는 obj지만 array는 아니다. `index`로 `integer`를 쓰냐 안쓰냐의 차이밖에는 없는 것 같다. `typeof`를 사용해도 array는 `object`를 뱉어낸다. `someArray.someProperty = someValue` 또한 당연히 가능하다. 여기서 `someArray`에 대해 `for in`을 사용하면 `someProperty`의 값에 대해서도 `iterator`가 동작한다.
- 매개변수로 함수를 줄 때, 예를 들면 `_.filter(collection, test)`에서 `test`가 `boolean`을 리턴하는 함수라고 해도, 당연히 `_.reject(collection,test)`를 만들때 `return _.filter(collection, !test)`를 하면 안된다. `test`는 반환된 값이 아니라 함수이기 때문에, `!test`는 함수가 아니게 된다. - 그럼 `!test`는 뭘까? `false`이다.
- `_.uniq`구현에서 빈 배열을 생성하고 해당 array를 순회하면서 내가 이전에 넣지 않았다면 push하는 방식으로 구현했는데, 시간복잡도가 최악의 경우 n^2 가 된다. ~~머리가 안돌아갈 때는 무식하게 하는게 최고~~ `_.filter`같은 애들을 써서 더 좋은 방법으로 구현할 수 있을까?
- `node -e 'console.log("hello");'` 와 같이 입력하면 프롬프트에서 한줄명령을 바로 실행할 수 있다.
- `_.every`를 구현하면서 처음으로 `_.identity`를 사용하였다. `iterator` 매개변수가 주어지지 않을 때, 기본적인 `iterator`로 쓰기 위해 썼다. 꼼수로 `true&&1`은 `1`이고, `1&&true`는 `true`이다. 왜 다른지는 모르겠는데 하여튼 이거 때문에 결과를 `boolean`으로 통일하기 위해 `!!`연산자 꼼수(?) 썼다.
