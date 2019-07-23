# 알고리즘 풀이용 유용한 파이썬 문법 정리

지금은 추가 되는대로 막 적고 있지만 어느정도 적으면 종류별로 정리할 예정

- `if key in dict` : 딕셔너리의 없는 키로 접근하면 에러가 난다. 얘로 있는지 없는지 체크할 수 있다.

- `somedict = dict()` : 딕셔너리 선언

- `string.index(sub)`: 문자열에서 서브문자열의 인덱스를 찾을 수 있다. 없는 애를 찾으면 에러나니까 먼저` if sub in string` 정도로 검사해줘야 한다.

- `for val in iteratable` : iteratable한 애들 대상으로 `val`에 아이템이 할당된다. dictionary는 key값이 할당된다. 몇번째 인자인지 확인해야할 때에는 `for tup in enumerate(iteratable)`를 쓰면 `tup`에 `(index,value)`모양으로 튜플이 할당된다.

- dictionary의 반복문 : 기본은 key가 나오고, value를 돌리려면 `.values()`, key와 value를 한꺼번에 돌리려면 `.items()`를 사용한다.

- 아이템삭제 : `list`와 `dict`에 사용가능, `del`을 쓰면 된다. ex) `del li['something']`

- sort : `sorted(iterable,key=lambda x:x[1],reverse=True)` 등으로 하고, 만약 2개이상의 조건이 필요하면 세컨더리를 먼저 정렬하고, 다음에 프라이머리를 정렬하면 된다. 

- sort by multi-condition : `iterable = [['a',1],['d',10],['c',15],['b',0],['d',5],['d',7]]` 일 때 `sorted(iterable,key=lambda x:(x[0],-x[1]),reverse=True)` 이렇게 쓰면 첫번째 요소인 문자를 프라이머리로, 두번째 요소인 숫자를 세컨더리로 한 방에 정렬할 수 있다.  여기서 `reverse`는 각각 줄 수 없으므로 `-x[1]`으로 숫자를 오름차순으로 정렬할 수 있다. 

- sort instances : `operator`를 불러와서 활용한다. `sorted(instances,key=operator.attrgetter('id'))` 정도로 인스턴스를 정렬할 수 있다.

- sort by custom order: `order = ['r','i','u','d']`라고 하면 `x=[('r',1),('u',10)]`일 때 `sorted(x, key=lambda x:order.index(x[0]))`으로 정렬 가능

- `str(2).zfill(2)` : `'02'`를 리턴한다. 자리수 채우기 좋은 함수.

- `zip` : 동일한 개수의 iterable들을 하나씩 묶어준다. `list(zip([1,2,3],[4,5,6]))` => `[(1,2),(3,4),(5,6)]`

- `map` : iterable의 각 요소를 첫번째 인자의 함수에 넣어 리턴된 값을 모아 iterable로 리턴한다. `map(lambda x:x[2], iterable)`와 같이 작성한다. 

- `filter` : 함수가 True를 리턴하는 요소만 모아 리턴한다. `filter(lambda x:x>0,iterable)`과 같이 작성한다. 

- `reduce` : 각 요소를 차례로 불러와 함수에 자꾸 집어넣어 하나의 결과로 줄여준다. `from functools import reduce`로 먼저 불러와야 한다. `reduce(lambda x,y:x+y,iterable)` 인자로 전달하는 함수는 반드시 2개의 input을 가져야 한다.

- 삼항연산자 : 다른 언어와는 좀 다르다. `result = a if x>10 else b`와 같이 쓴다.

- `sum` : `int`를 요소로 갖고 있는 iterable의 합계를 구해준다.

- iterable한 애들 초기선언 쉽게하기 : `{e:[] for e in iterable}`, `[e[0] for e in iterable]`, 빈 배열이나 딕셔너리를 선언해서 추가할 수 있지만, 훨씬 간결한 방법.

- 클래스

  ```python
  class Music:
      def __init__(self, id, first, second):
          self.id = id
          self.first = first
          self.second = second
      def some_method(self,first,second):
          return self.id+first+second
  ```

  생성자는 이름이 `__init__`으로 고정이다. 메소드를 선언할 때 주의할 점은 반드시 `self`를 첫 인자로 넣어준다는 것. `tuple`과 달리 값을 수정할 수 있다. 별도 메소드가 필요없고, 값을 수정할 필요도 없다면 `tuple`을 쓰는게 이득

- `defaultdict` : `collections`모듈에 있다. `from collections import defaultdict`로 불러와서 사용하면 되는데, 선언할 때 default값을 넣어줄 수 있다. 그러면 일반 딕셔너리같이 키가 있는지 없는지를 분기해서 사용하지 않아도 된다. `d = defaultdict(int)`라고 하면 default가 0이 된다.

- 배열 더하기 : `[1,2,3]+[4,5]` => `[1,2,3,4,5]` 배열을 간단히 합칠 수 있다.

- 형변환 : `str`과 `int`를 활용한다.

- 순열, 조합 : `itertools`모듈을 사용한다. `from itertools import permutations, combinations`로 불러오고 `permutations(iterable,r)`, `combinations(iterable,r)`과 같이 사용한다. 만약 `[0,0,1,2]`와 같이 중복되는 요소가 있을 때 자동으로 걸러주지 않는다. 사용할 때 따로 처리하거나 순서가 상관없다면 `set`을 쓰자.

- 중복순열, 중복조합 : `from itertools import product, combinations_with_replacement`로 불러오고 `product(iterable,repeat=r)`, `combinations_with_replacement(iterable,r)`로 쓰면 된다. `product`는 `r`옵션이 다르니 주의

- 변수 스코프 : 함수 안에서 선언된 변수를 지역변수, 그렇지 않고 밖에서 선언된 변수를 전역변수라 한다. 전역변수를 함수 안에서 변경할 때는 `global global_val`과 같이 선언해주어야 한다. 

  ```python
  global_val = 0
  def firstfunc():
      first_val = 0
      def secondfunc():
          global global_val
          nonlocal first_val
          first_val += 1
          global_val += 1
  ```

  위와 같이 함수 안의 함수를 만들 때, 상위 함수의 지역변수를 변경할 때는 `nonlocal`로 선언해 주어야 변경이 가능하다. 변수를 그냥 읽기만 하는 것은 저렇게 선언하지 않아도 가능하다.
