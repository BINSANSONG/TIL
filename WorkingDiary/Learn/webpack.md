# Webpack

[네이버기술블로그](https://d2.naver.com/helloworld/0239818)와 [제로초님블로그](<https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d>)를 참고하였습니다. 핵심 개념만 적습니다.

#### 왜 쓸까?

핵심기능은 여러 모듈로 분리된 파일들을 하나로 묶어 번들파일로 제공하는 것.

#### 왜 하나로 묶어야 해?

js에서 모듈 시스템이 나오면서 웹에 필요한 js 파일이 많아졌는데 문제는 http/1 요청이 비싼일이라는 것. 그래서 되도록 적은 요청을 하려다 보니 사용하게 되었다.
