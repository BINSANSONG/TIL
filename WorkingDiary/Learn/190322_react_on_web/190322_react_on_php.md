# 웹사이트에 React 추가하기

#### 개략적인 순서
1. `id='someId'` 인 태그가 있는 web파일, `php` 이든 `html` 이든 상관없다.
2. `<script>` 태그를 통해 react와 react-dom js파일을 불러온다.
3. `someComponent.js` 파일을 만들고 `<script>` 태그로 추가한다.
4. jsx를 사용한다면 `<script>`로 babel을 불러와야한다. 개발환경용으로 적합하다.
5. 배포용은 프로젝트에 npm으로 패키지관리를 해서 바벨로 번역된 js파일을 만들어줘야한다. 

#### 파일 설명
- index.php가 웹페이지
- src/like_button.js가 react component
- like_button.js는 babel이 만들어준 파일
- `npx babel --watch src --out-dir . --presets react-app/prod`

#### php 변수 사용하기
회사에서 php로 mvc를 만들어 쓰고 있는데 view만 react로 바꿀 것 같은 느낌이 있어서 적용하는 법을 찾아보았다.
1. js파일에서 php 변수를 직접 불러올 수는 없다.
2. php 파일에서 `<script>`태그 안에서 변수를 전달하고, 파일에서 그 변수에 접근하면 된다. 
3. 객체는 `json_encode($variable)`해서 string으로 넘겨준 다음 `JSON.parse(variable)`으로 받으면 된다.

#### 참고
- https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project