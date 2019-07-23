# CRA로 SSR을 구현하며 배운 점

첫번째 섹션, by 승형수님, [강의용 예제](<https://github.com/huskyhoochu/ssr-react-app>)



- SSR : server side rendering, 서버에서 full html을 작성해서 클라이언트에 전달, 주로 검색엔진최적화를 위해 합니다.
- `ReactDOMServer.renderToString()` react app &rarr; html string 해준다. 서버사이드에서 build폴더에 있는 html파일에다가 저 스트링을 안에다 삽입.

- `ReactDOM.hydrate(<App/>,document.getElementById('root'));` :  `render`와 달리 업데이트할 거 확인해서 partial update를 한다.(기존 리액트도 그렇게 하지 않나??.. 잘 모르겟)
- `git submodule`?
- server에서 직접 react를 호출하는 것을 지양, 서버는 서버대로, 클라는 클라대로 작성해서 리스너는 다른 파일에서 하도록
- asset-manifest.json : build폴더에 생성된 모든 자산의 일람표, html string에 활용할 수 있다.