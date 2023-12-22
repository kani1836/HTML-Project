//Primitive data types (Single Value Variable) -- String, Numbers, Boolean
//Non-Primitive data type (Multiple Values Variable) -- Array, Object


//let const

let word = "This is a example of a string"
// word="updated";
console.log(word)


//Array

let a1 = [1,3,5,7, "Hi", true]

a1[2]=10;
a1[10]=25;
console.log("Printing array here", a1)


//Object

let details = {
    name: "Kanikumar",
    course : "Fullstack"
}

details["branch"] = "Porur"

console.log("Printing Objects here", details)


//Operators
//Arithmetic Logical Comparision Ternary

//Arithmetic
// +,-,/,%

let output = 10+5
console.log("addition (5+5)", 5+5)
console.log("division (10/2)",10 / 2)
// console.log(output)



//Logical - The output will be only boolean
// <, <=, >, >=, ==, !=

console.log ("Logical condition (10==10)",10==10)
console.log ("Logical condition (10>11)", 10>11)

//Comparision -> and& or||

//&& operator -->If any one condition is false the output will be false
console.log ("AND (10==10  && 10>11)", 10==10  && 10>11)
// || operator -->If any one condition is true the output will be true
console.log ("OR (10==10  || 10>11)",10==10  || 10>11)

//Ternary

// (condition) ? if true : if false

let result = (10 < 5) ? "Okay I can accept" : "Condition is false so I am printing this";
console.log("Ternary (10 < 5)", result)



