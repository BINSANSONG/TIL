/* ES5 for() */
var computers = [
    { name: 'a', ram: 16 },
    { name: 'b', ram: 8 },
    { name: 'c', ram: 32 },
    { name: 'd', ram: 8 },
    { name: 'e', ram: 16 },
];

var everyComputersAvailable = true;
var someComputersAvailable = false;

for(var i=0;i < computers.length; i++ ){
    if(computers[i].ram>16){
        someComputersAvailable = true;
    }
    if(computers[i].ram<16){
        everyComputersAvailable = false;
    }
}

/* ES6 ??? */
var someLaptopAvailable = computers.some(function(e){
    return e.ram>16;
});

var everyLaptopAvailable = computers.every(function(e){
    return e.ram>16;
})

/* 실제로는? */

/* 실습 1 */

/* 실습 2 */

/* 실습 3 */