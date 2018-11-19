/* ES5 something like class? */
/*
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function () {
    return 'Vroom';
}

var car = new Car({title:'Genesis'});

function Ferrari(options) {
    Car.call(this,options);
    this.color = options.color;
}

Ferrari.prototype = Object.create(Car.prototype);
Ferrari.prototype.constructor = Ferrari;
Ferrari.prototype.honk = function () {
    return 'Baaammmm';
}

var myFerrari = new Ferrari({color:'red',title:'laFerrari'});
*/

/* ES6 class? */

class Car {
    constructor({title}){
        this.title = title;
    }

    drive() {
        return 'Vrooom';
    }
}

class Audi extends Car { //extends 에서는 보통 destructure하지 않는 것이 convention
    constructor(options){
        super(options);
        this.color = options.color;
    }

    honk(){
        return 'Baaaaaam';
    }
}

const car = new Car({title:'A6'});
const car2 = new Audi({title:'a6',color:'red'});

console.log(car2.drive());
console.log(car2.honk());
console.log(car2);

/* 실습 1 - RPG game */
// Monster 클래스의 instance는 생성될 때, health 가 100이다
// constructor() 는 options라는 object를 받으며, name key 를 가진다.
// Monster 의 instance 에게 name을 선언하자.
class Monster{
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }
}

/* 실습 2 */
// Monster 클래스의 subclass Pickachu 클래스를 생성하자
// 생성자는 똑같다
// Pickachu 클래스는 bite()를 갖는다. 인자는 다른 Monster의 객체
// bite를 통과한 다른 Monster 인스턴스는 체력이 10 깎인다.

class Pickachu extends Monster{
    constructor(options){
        super(options);
    }

    bite(monster){
        monster.health -= 10;
    }
}