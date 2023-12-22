//Loops
//Type of loops 
//if, if-else, nested-if
//for, while, for-of, for-in, do-while


// Conditional loops - Writing functios based on conditions (True or False)


//if and nested if and else
console.log("if and nested if and else")
let num = 16;
let result = 0;

if(num > 16){
    result = result + 5;
    console.log(result);
    console.log("condition passed")
}
else if (num > 15){
    console.log("condition 15")
}
else if (num > 12){
    console.log("condition 17")
}


else{
    console.log("failed")

}

//for loop
console.log("for loop started");
let arr = [4,7,8,6,2,3,4];
 for (let i = 0; i < arr.length ; i++){
    console.log(arr[i]);
 }

 //while loop

 console.log("while loop started");

 let y=0;
 while(y<arr.length){
    console.log(arr[y])
    y++;
 }

  //for of

  console.log("for of started");

  for (let obj of arr){
    console.log(obj)
  }

//for in
console.log("for in started");

let obj = {
    name : "Kani",
    course: "fullstack"
}

for (let ob in obj){
  console.log(ob)
  console.log(obj[ob])
}


//Switch Case

console.log("Switch Case")

switch("tuesday"){
    case ("monday"):
        console.log("Yes it is Monday")
        break ;
    case ("tuesday"):
        console.log("Yes it is Tuesday")
        break ;
    case ("wednesday"):
        console.log("Yes it is Wednesday")
        break ;
    default:
        console.log("No option")
        break;
}

let num5 = 5;
let num6 = 6;
let res1 = 0;

switch("sub"){
    case ("add"):
      console.log(num5+num6) 
        break ;
    case ("sub"):
        console.log(num5-num6) 
        break ;
    default:
        console.log("No option")
        break;
}


// String methods or functions - User defined methods and Inbuild methods

//String inbuild methods

let w1 = "This is a javascript class"
// console.log(w1)
// console.log(w1.toUpperCase())
// //assigning
// // w1 = w1.toUpperCase();
// console.log(w1)
console.log("Upper case method")
console.log(w1.toUpperCase())

console.log("Lowercase method")
console.log(w1.toLowerCase())

console.log("Split method")
console.log(w1.split("a"))

console.log("CharAt Method")
console.log(w1.charAt(10))

console.log("length Method")
console.log(w1.length)

console.log("merge method")
console.log(w1.concat(" merge"))

console.log("slice method")
console.log(w1.slice(-5, -1)) //it will allow negative value

console.log("substring method")
console.log(w1.substring(10, 14))//it will not allow negative value but both are for same purpose

console.log("substr method")
console.log(w1.substr(10, 1))


//day10 continue

console.log(w1.replace("javascript", "frontend"))

console.log(w1.repeat(3))

let w2 = " hello"

console.log(w2.trim())


let w3 = "hello"
console.log(w3.padStart(8, "hoo"))

console.log(w1.includes("java"))
console.log(w1.includes("javdda"))

console.log(w1.startsWith("This"))
console.log(w1.startsWith("is"))

console.log(w1.endsWith("ss"))
console.log(w1.endsWith("ds"))

//string search methods
let w4 = "this is a class javascript class"

console.log(w4.indexOf("class"))
console.log(w4.indexOf("class", 11))
console.log(w4.lastIndexOf("class"))

console.log(w4.search(/class/i))
console.log(w4.search("class"))

console.log(w4.match(/class/gi))
console.log(w4.matchAll(/class/gi))
