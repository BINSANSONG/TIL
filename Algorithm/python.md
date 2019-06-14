# 알고리즘 풀이용 유용한 파이썬 문법 정리

- `if key in dict` : 딕셔너리의 없는 키로 접근하면 에러가 난다. 얘로 있는지 없는지 체크할 수 있다.
- `somedict = dict()` : 딕셔너리 선언
- `string.index(sub)`: 문자열에서 서브문자열의 인덱스를 찾을 수 있다. 없는 애를 찾으면 에러나니까 먼저` if sub in string` 정도로 검사해줘야 한다.
- `for val in iteratable` : iteratable한 애들 대상으로 `val`에 아이템이 할당된다. dictionary는 key값이 할당된다. 몇번째 인자인지 확인해야할 때에는 `for tup in enumerate(iteratable)`를 쓰면 `tup`에 `(index,value)`모양으로 튜플이 할당된다.
- dictionary의 반복문 : 기본은 key가 나오고, value를 돌리려면 `.values()`, key와 value를 한꺼번에 돌리려면 `.items()`를 사용한다.
- 아이템삭제 : `list`와 `dict`에 사용가능, `del`을 쓰면 된다. ex) `del li['something']`
- custom sort : `sorted(key=lambda x:x[1],reverse=True)` 등으로 하고, 만약 2개이상의 조건이 필요하면 세컨더리를 먼저 정렬하고, 다음에 프라이머리를 정렬하면 된다.
- `str(2).zfill(2)` : `'02'`를 리턴한다. 자리수 채우기 좋은 함수.

