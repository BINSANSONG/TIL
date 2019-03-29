# Promise.all

여러개의 비동기 함수 처리

#### 문제 발견하기

```js
class PostContainer extends Component {

    fetchPostInfo = async (postId) => {
        const post = await service.getPost(postId);
        console.log(post);
        const comments = await service.getComments(postId);
        console.log(comments);
    }

    render() {
        return (
            <PostWrapper>
                <Navigate/>
                <Post/>
            </PostWrapper>
        );
    }
}
```

`fetchPostInfo`내부를 자세히 살펴보자. 두개의 비동기 요청을 async/await로 처리하고 있는데, 이 경우에 위의 요청에 대한 응답이 들어오고 난뒤 두번째 요청을 보낸다.

#### Promise.all로 문제 수정하기

```js
    fetchPostInfo = async (postId) => {
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
        
        console.log(info);
    }
```

두개의 요청을 동시에 처리하고 싶을 때 위와 같이 `Promise.all` 을 통해 해결가능하다. 코드에선 async/await로 했지만, 당연히 promise방식으로도 될것이다.