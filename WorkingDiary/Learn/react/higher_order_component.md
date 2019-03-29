# HOC, Higher Order Component

컴포넌트의 기능상에서 자주 반복되는 코드를 HOC라는 하나의 함수로 만들어 분리하는 것. 컴포넌트를 넣어서 컴포넌트를 리턴받음! [Velopert의 글](<https://velopert.com/3537>)을 참조하였습니다.

#### 1. 반복되는코드

```js
import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    data: null
  }
  
  async initialize() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();  
  }


  render() {
    const { data } = this.state;
    
    if (!data) return null;

    return (
      <div>
        { JSON.stringify(data) }    
      </div>
    );
  }
}


export default Post;
```

그리고 아래의 코드도 확인해보면

```js
import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
  state = {
    data: null
  }

  async initialize() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }


  render() {
    const { data } = this.state;

    if (!data) return null;

    return (
      <div>
        {JSON.stringify(data)}
      </div>
    );
  }
}


export default Comments;
```

거의 똑같고 `initialize`함수에서 url만 다른 것을 확인할 수 있다.

#### 2. HOC 작성하기

반복을 제거하기 위해 함수를 작성한다. 주로 이름은 `withFunctionName`과 같이 앞에 with을 붙인형태를 많이 쓴다고 함

흐름을 먼저 생각해보면, 파라미터로 컴포넌트를 받고, 함수내부에서 새컴포넌트를 만들어 받은 컴포넌트를 새컴포넌트 안에서 렌더링하는 것. 당연히 `props`들도 그대로 전해주고, 필요하면 추가로 전달할 수도 있다.

```js
import React, { Component } from 'react';

const withRequest = (url) => (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <WrappedComponent {...this.props}/>
      )
    }
  }
}

export default withRequest;
```

함수표현식을 보면 `(url, WrappedComponent) =>`와 같은 형식이 아니라 `(url)=>(WrappedComponent)=>{}`로 한 이유는 나중에 여러개의 HOC를 합쳐서 사용하게 될 때 더욱 편리하다고.

```js
import React, { Component } from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponen) => {
  return class extends Component {

    state = {
      data: null
    }

    async initialize() {
      try {
        const response = await axios.get(url);
        this.setState({
          data: response.data
        });
      } catch (e) {
        console.log(e);
      }
    }

    componentDidMount() {
      this.initialize();
    }

    render() {
      const { data } = this.state;
      return (
        <WrappedComponent {...this.props} data={data}/>
      )
    }
  }
}

export default withRequest;
```

기능을 붙여서 클래스 컴포넌트를 리턴하는 함수를 리턴하는 함수를 작성했다.(말이복잡..)

#### 3. HOC 사용하기

```js
import React, { Component } from 'react';
import withRequest from './withRequest';

class Post extends Component {
  render() {
    const { data } = this.props;
    
    if (!data) return null;

    return (
      <div>
        { JSON.stringify(this.props.data) }    
      </div>
    );
  }
}


export default withRequest('https://jsonplaceholder.typicode.com/posts/1')(Post);
```

`Post`는 `data`를 `props`로 받아서 그리는 기능만 구현하였고, request를 받는 부분은 `withRequest`가 대신해주고 있다. 요청과 데이터매핑을 마친 클래스 컴포넌트를 `export` 해준다.