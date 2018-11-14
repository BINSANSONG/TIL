### 몽고디비 ADVANCED

- relation:DB에서 foreign key 지정 하는 것처럼 테이블을 연결하는 개념.

  | 구분   | Populate 방식                                        | Embedding 방식                                               |
  | ------ | ---------------------------------------------------- | ------------------------------------------------------------ |
  | Author | `Author{ id:'aa12', name:'bing' }`                   | `Author{ id:'aa12', name:'bing' }`                           |
  | Book   | `Book{ id:'bb12', name:'nodejs', author_id:'aa12' }` | `Book{ id:'bb12', name:'nodejs', author:{id:'aa12', name:'bing'  }}` |
  | 장단점 | 수정시 간편하다                                      | 조회시 테이블 하나만 읽으면 된다                             |

