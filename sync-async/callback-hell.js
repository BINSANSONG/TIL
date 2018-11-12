console.log('메인코드 실행');
getUser(1, user=>{
    getRepos(user.gitHubID);
    getCommits('repo1',(commits)=>{
        console.log(commits);
    });
});
console.log('메인코드 진행중');

function getUser(id, callback) {
    const users = [
        { id: 1, gitHubID: 'aa'},
        { id: 2, gitHubID: 'bb'},
    ]
    setTimeout(() => {
        console.log('reading data from database');
        const user = users.find(user => user.id === id);
        //Ready
        callback(user);
    }, 2000);
}

function getRepos(userID) {
    console.log(`Finding ${userID}'s all github repo...`);
    setTimeout(() => {
        console.log('something,somgthing');
    }, 1000);
}

function getCommits(repo, callback) {
    console.log(`Getting all commits in ${repo}`);
    setTimeout(() => {
        callback('something');
    }, 1000);
}