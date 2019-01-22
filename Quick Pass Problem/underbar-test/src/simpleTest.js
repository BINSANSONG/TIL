const _ = {
    identity(val){
        return val;
    }
}

let x = {a:'A'};
console.log(x);
_.identity(x).a = 'B';
console.log(x);