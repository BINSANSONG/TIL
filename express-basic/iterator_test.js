const tests = [
    {id:1,name:'song'},
    {id:2,name:'kang'},
    {id:3,name:'kim'},
    {id:4,name:'song'},
    {id:5,name:'kang'},
]


// tests.forEach((element,index)=>{
//     console.log(`현재 인덱스 : ${index}, 이름은 ${element.name}`);
//     if(element.name==='song'){
//         console.log(`${index-1}번째 애가 삭제되었`);
//         tests.splice(index-1,1);
//         console.log(tests);
//     }
// })

const test2 = ['aa','bb','cc','dd','ee'];

test2.forEach((element,index)=>{
    console.log(`현재 인덱스 : ${index}, 이름은 ${element}`);
    if(element == 'bb'){
        console.log(`${index+2}번째 애가 바꼈`);
        test2[index+2]='bb';
        console.log(test2);
    }
})
console.log(test2);

// console.log(tests);
// console.log(tt);

