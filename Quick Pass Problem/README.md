# 자바스크립트 문제 풀이

알고리즘 문제 풀이 대비 및 JS 학습용입니다. 두서가 없습니다.

- `function.apply`
- `_.identity` : f(x) = x 인 함수. 아무 필요 없을 것 같지만, default iterator의 역할을 한다. Iterator 조건을 넣어 주는 함수(예를 들면 `array.filter`)에서 사용자가 조건을 넣어주지 않을 경우 이 함수를 default로 쓸 수 있다. 함수 안에서 얘를 써서 주어진 collection의 값을 건드리면 원본은 바뀌지 않고 원하는 동작을 할 수 있다.
- `arguments`
- `array.slice(start,end)` : `array`의 일부를 잘라서 리턴한다. `start`와 `end`는 모두 `array`의 `index`인데, 재밌는 것은 `index`가 배열 길이보다 길면 그냥 마지막 요소를 가리키고, -1은 다시 맨 마지막 요소의 `index`가 되고 차례차례 작아지면 `-array.length`가 첫번째 요소의 `index`가 된다. 역시 `-array.length`보다 작아지면 첫번째 요소를 가리킨다. 그래서 `array.slice(3,-1)`과 같이 보기에는 불편한 식도 실제로는 친절히 출력해준다.
- 삼항식 : `const x = condition ? A : B` 의 형태이다. `if else`구문보다 훨씬 짧다. 눈에 익숙하지 않으면 오히려 가독성이 떨어지니 자주 써서 눈에 익혀 두자.