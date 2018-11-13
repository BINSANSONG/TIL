## Express Basic

#### 주목할만한 점
 - `joi` :  사용자 입력은 절대 절대 믿을 수 없다. 타당성 검사를 무조건 해야하는데 이러한 검사를 쉽게 도와주는 npm module
 - `schema` : 입력이 이러이러 해야한다는 규칙 모음
 - HTTP response status codes : 서버의 CRUD에서 없는 자료를 찾거나 잘못된 입력을 요청하는 등의 에러상황에서 단지 `res.send`로 정보만 주는게 아니라 `res.status`로 상태코드도 보내주면 좋은 코드라고하는 개발자끼리의 밈
 - `app.use(express.json())` : 사용자 요청 정보를 JSON데이터로 받는데, 사실 그냥 보자면 `string`이므로 당연히 parsing이 필요하다. `express`에서 해당 기능을 제공한다.
 - 비구조화 : 객체나 배열의 각각 요소를 
 - 코드의 리팩토링 : 파일을 어느 정도 다 구현했다고 했을 때, 코드를 줄이거나 보기 간편하게 하는 습관을 들이자. 연습할 수록 애초에 보기 쉬운 코드를 작성하게 될 것이고, 실력도 많이 늘 것이다. 반복되는 동작을 함수로 만들고, 공통되는 상수를 따로 빼고, 코드 길이를 줄이는 등등
 - `iterator` : `iterator`로는 보통 절대 원본을 건드리지 않는다. (ex. `.find` `.forEach` ... ) 원본 데이터를 건드리는 함수는 극도로 제한하는 방향으로 짜야하는데, 데이터를 함부로 건드리는 애들이 많아지다 보면 데이터 싱크가 맞지 않는 상황이 발생하면서 골 때리게된다. `Java`의 멀티스레드 코딩에서 싱크로나이즈 문제와 비슷한 개념