//My learning -> HTML,CSS, Javascript, React, Nodejs, SQL, MongoDB, GIT, Bitbucket, AWS -EC2 and EC3
//Hoisting

//diff between let and var

// a="jfjj"
// let a

// console.log(a) //it wil throw error since the declaration is not defined in the top


b="jfjj"
var b

console.log(b) //it wil work even wherever ypou decalare the var

//scope variable

let c = 6; //global scope
function add (){
    let a = 5; //scope variable - Can be used only inside the function or loop
    console.log(c)
}

//console.log(a)
console.log(c)

//Number Methods
let d = 6.412679

console.log(d.toFixed(3)) //--> three values after the .
console.log(d.toPrecision(3)) // total 3 value ex 6.41
console.log(d.toString() + 567)

//parseInt Method
console.log(parseInt ("b") + 5) //Nan -> Not a number
console.log(parseInt ("5") + 5) 

let question = "A1B2C5"

//isNan

console.log(isNaN("14"))//is not a number? false
console.log(isNaN("aaa")) //is not a number? True
console.log(isNaN(NaN))
console.log(isNaN(true)) // this will be false coz true will be considered as number 1 so..

//Type of
console.log(typeof 'course')
console.log(typeof 14)
console.log(typeof [4,7,8])
console.log(typeof undefined)

//Class 
let name = ""
let age = ""

class Person{
    name = "kani"
    age = 45;
}

let newPerson = new Person()



//Constructors --> Can be used only under class, and it can be used only one time


console.log(newPerson) 

let name1 = ""
let age1 = ""

class Person1{
    name1;
    age1

    constructor (a, b){
        this.name1 = a;
        this.age1 = b;
    }
}

let newPerson1 = new Person1("Kani1", 25 )

console.log(newPerson1) 