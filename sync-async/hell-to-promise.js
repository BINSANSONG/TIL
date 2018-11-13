getUser(1)
    .then(user=>getRepos(user.gitHubID))
    .then(repos => getCommits(repos))
    .catch(error=>console.error(error));

function getUser(id) {
    console.log('reading data from database');
    const users = [
        { id: 1, gitHubID: 'aa'},
        { id: 2, gitHubID: 'bb'},
    ]

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            //Ready
            if(user) resolve(user);
            else reject(new Error('Error...'));
        }, 2000);
    });
}

function getRepos(userID) {
    console.log(`Finding ${userID}'s all github repo...`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const user = users.find(user => user.id === id);
            if(user) resolve(user.gitHubID);
            else reject(new Error('Error...'));
        }, 1000);
    });  
}

function getCommits(repo) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('something');
        }, 2000);
    });
}