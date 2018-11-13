const promise = new Promise((resolve,reject)=>{
    const number = Math.floor(Math.random()*100);
    if(number % 2 === 1) resolve({id:1, email:'xx@xx.xx'});
    else reject(new Error('Error'));
});

promise
.then(user => console.log(user.id,user.email))
.catch(error => console.log(error));