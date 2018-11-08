### NPM 시작하기
- `npm i` : `npm install`

- `npm r` : `npm remove`, `npm uninstall`

- `npm i something -D`: `-D`는 개발 때만 쓴다. `package.json`파일에 `devDependencies`속성으로 들어간다. 예로 `jshint`가 있다.

- `npm init`

- `node_modules`는 보통 `.gitignore`파일에 두고 upload하지 않는다

- `npm i`는 `package.json`의 `dependencies`에 있는 모듈들을 모두 설치한다

- `package.json`의 `dependencies`의 버져닝 : Major.Minor.Patch 를 따른다.  `^`기호는 semver.org의 Semantic Versioning을 말한다.  예를 들어  express 버전`"^4.16.5"`는 Major한 버젼변경은 허락하지 않지만 Minor와 Patch는 모두 업데이트 되는대로 따르겠다는 말이다.

- `npm i something -E` : 정확히 지금 현재 버젼을 쓰겠다는 말이다.