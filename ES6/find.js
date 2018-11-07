/* ES5 for() */
var users = [
    { name: 'Tony Stark' },
    { name: 'Steve Rogers' },
    { name: 'Thor Odinson' },
]

var user;

for (var i = 0; i < users.length; i++) {
    if(users[i].name === 'Tony Stark'){
        user = users[i];
        break;
    }    
}
/* ES6 ??? */
user = users.find(function(user){
    return user.name === 'Tony Stark';
});

/* More complex code */

function Car(car) {
    this.model = car;
}

var cars = [
    new Car('mecc'),
    new Car('gs'),
    new Car('aa'),
    new Car('bb'),
];

var car = cars.find(function(car){
    return car.model === 'gs';
});


/* 실제로는? */

/* 실습 1 */

/* 실습 2 */

/* 실습 3 */
var laders = [
    { id:1, height: 20 },
    { id:2, height: 35 },
    { id:3, height: 25 },
];

function findWhere(array,standard){
    var key = Object.keys(standard)[0];
    return array.find(function(e){
        return e.key === standard.key;
    });
}

findWhere(ladders, { height: 20 });
findWhere(ladders, { id: 3 });