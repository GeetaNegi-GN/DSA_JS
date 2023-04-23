/*
//reference type
[] === [];
[1]===[1];
var objectt1 = {value: 10};
var object2 = objectt1
var object3 = {value: 10};
objectt1 === object2
objectt1 === object3

//context vs scope
function b(){
    let a=5;
}

console.log(this)
console.log(this === window)
this.alert("hello")

const obj = {
    a: function(){
        console.log(this);
    }
}*/
//instantiation
class Player {
    constructor(name,type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log("Hi I am " + this.name +", I'm a "+ this.type)
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name,type) 
    }
    play() {
        console.log("Weeee I'm a "+ this.type);
    }
}
const Wizard1 = new Wizard('Tom','Healer');
const Wizard2 = new Wizard('Jerry','Dark Magic');