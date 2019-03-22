# `export`에 대해서
js 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용합니다

- 유명(named) 내보내기
	`export { myFunction }`
	`export const foo = Math.sqrt(2);`
	- 여러값을 내보낼 때 유용
	- 가져올 때 같은 이름을 사용해야 함 `import {name as newName} from 'somemodule'`
- 기본(default) 내보내기
	`export default function() {}`
	`export default class {}`
	- 아무이름으로나 가져올 수 있다.
	- 다른 모듈의 기본 내보내기를 다시 내보내고 싶다면(얘를 몰라서 기록을 시작하게 됐ㅎㅎ)
		`export {default} from 'somemodule'`
	- 다른 모듈의 유명 내보내기를 모두 내보낼 땐
		`export * from 'somemodule'`
- `import * from 'somemodule'`은 허용안되는 듯 하다. 생각해보면 당연한게 저 모듈의 모든 export된 변수명들을 다 알아야 거기에 겹치지 않는 코드를 짤 수 있으니, `* as newName`으로 이름을 지정해서 쓰는게 타당하다.