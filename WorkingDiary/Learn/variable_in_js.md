# var와 let, 그리고 const

[정리가 매우 잘 되어있는 글](<https://poiemaweb.com/es6-block-scope>)을 보고 정리한 글입니다.

### 1. var의 특징

1. 함수 레벨 스코프

   함수의 코드 블록 만을 스코프로 인정한다. `function(){//scope범위}`처럼 함수단위의 스코프를 가진다는 말인데 그 말은 곧  `for(var i=0;i<10;i++){//밖에서 i 참조 가능}`과 같이 `for`, `if`등의 블록에서 `var`로 선언한 변수를 밖에서 참조할 수 있다는 말.

2. `var`키워드 생략 가능

   ```js
   var x = 10;
   function makeNewX(){
     x = 20;
     console.log(x)
   }
   ```

   `var`키워드가 생략가능해서 `makeNewX`함수 내부 스코프에서만 적용되는 `x`를 `var`를 생략하고 선언하려고 했는데, 의도치 않게 전역변수 `x`의 값을 변경하는 등의 문제가 생길 수 있다.

3. 변수 중복 선언 허용

   의도하지 않은 변수값의 변경이 일어날 가능성이 있다.

4. 변수 호이스팅

   변수를 선언하기 전에 참조할 수 있다.

### 2. let의 특징

1. 블록 레벨 스코프

   대부분의 언어가 블록 레벨 스코프를 따르지만 js는 함수 레벨 스코프를 따른다.

   - 함수 레벨 스코프

     함수 내에서 선언된 변수는 함수 내에서만 유효하며 외부에서는 참조할 수 없다. 물론 외부에서 선언된 변수(전역변수)는 함수 내부에서 참조가능.

     ```js
     var foo = 123; //전역
     console.log(foo) //123
     {
       var foo = 456; //전역
     }
     console.log(foo) //456
     ```

   - 블록 레벨 스코프

     모든 코드 블록(함수, `if`, `for`, `while`, `try`,`catch` 등)내에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서 참조할 수 없다.

     ```js
     let foo = 123;
     {
       let foo = 456;
       let bar = 456;
     }
     console.log(foo); // 123
     console.log(bar); //ReferenceError: bar is not defined
     ```

2. 변수 중복 선언 금지

   ```js
   var foo = 123;
   var foo = 456;
   
   let bar = 123;
   let bar = 456; // Uncaught SyntaxError: Identifier 'bar' has already been declared
   ```

3. 호이스팅

   호이스팅이 되지 않는 것은 아닌데, `var`변수는 호이스팅되면서 선언과 동시에 `undefined`로 초기화 되는 반면 `let`과 `const`는 단지 선언만 된다고 한다. 실행 컨텍스트의 변수 객체에 등록은 되지만, 초기화가 되지 않으므로 할당 후에 변수를 사용할 수 있게된다. 결국 호이스팅이 되지 않는 것과 차이가 없는 것과 비슷해 보인다. 하지만

   ```js
   let foo = 1;
   {
     console.log(foo); // ReferenceError: foo is not defined
     let foo = 2;
   }
   ```

   위 코드의 경우에 `foo`가 출력어야 할 것 처럼 보이지만 호이스팅이 일어나기 때문에 지역변수를 `foo`를 참조하게 되고 아직 할당되지 않았으므로 에러가 발생한다. 코드 블록의 선두부터 초기화가 이루어지는 지점까지를 일시적 사각지대(TDZ)라 한단다.

4. 클로저

   ```js
   var funcs = [];
   
   for (var i = 0; i < 3; i++){
     funcs.push(function () { console.log(i); });
   }
   
   for (var j = 0; j<3; j++){
     funcs[j]();
   }
   ```

   실행 결과는 0,1,2가 아니라 3,3,3이다. `var i = 0`으로 선언된 변수 `i`가 전역 변수이고 `funcs`의 각 함수들이 `i`를 참조하고 있기 때문이다. 클로저를 통해 아래와 같이 해결 가능하다.

   ```js
   var funcs = [];
   
   // 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
   for (var i = 0; i < 3; i++) {
     (function (index) { // index는 자유변수다.
       funcs.push(function () { console.log(index); });
     }(i));
   }
   
   // 배열에서 함수를 꺼내어 호출한다
   for (var j = 0; j < 3; j++) {
     funcs[j]();
   }
   ```

   변수를 참조하는 시점에서 바로 실행되도록 클로저를 만들었다. `let`을 이용하면 클로저를 사용하지 않아도 위 코드와 동일한 동작을 한다.

   ```js
   var funcs = [];
   
   // 함수의 배열을 생성하는 for 루프의 i는 for 루프의 코드 블록에서만 유효한 지역 변수이면서 자유 변수이다.
   for (let i = 0; i < 3; i++) {
     funcs.push(function () { console.log(i); });
   }
   
   // 배열에서 함수를 꺼내어 호출한다
   for (var j = 0; j < 3; j++) {
     console.dir(funcs[j]);
     funcs[j]();
   }
   ```

   신기하다. IIFE나 클로저가 명확히 필요한 상황에서만 쓸 수 있겠다. `i`는 지역변수로 `for`루프가 끝나면서 소멸해야하지만 변수`i`를 참조하는 함수가 존재하는 한 계속 유지된다고하는데 잘 이해가 가지않았다. 혼자서 곰곰히 생각해봐도 모르겠다.ㅎㅎ..`i`가 존재하는 것과 각각 0,1,2로 할당 되는 것은 무슨 관계이지? 저런식으로 실행될 함수 때문에 변수가 살아있게 되면 참조당시의 값을 가져오게 되는 걸까?..모르겠다

5. 전역 객체와 `let`

   ```js
   var foo = 123;
   console.log(window.foo); //123
   
   let bar = 123;
   console.log(window.bar); //undefined
   ```

   `let`전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.

### 3. const

1. 선언과 초기화

   `const`는 선언과 동시에 할당을 해줘야한다. `const foo = 'bar'`와 같이.  `let`과 마찬가지로 블록 스코프를 갖는다.

2. 상수

   `const`는 재할당이 불가능한 상수이다. 상수는 적극적으로 사용하는 것이 좋다.

   ```js
   // 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
   if (rows > 10) {
   }
   
   // 값의 의미를 명확히 기술하여 가독성이 향상되었다.
   const MAXROWS = 10;
   if (rows > MAXROWS) {
   }
   ```

3. `const`와 객체

   `const user = { name: 'song' }`과 같이 객체를 할당하면, `user`에는 주소값이 할당되므로 `user.name`은 재할당이 가능하다. 만약 주소값을 재할당 해야 한다면 `let`을 쓰면 된다.

