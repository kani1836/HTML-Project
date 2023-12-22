let arr = [7, 8, 9]
arr.fill(8, 0);
console.log(arr)
arr.fill(7, 0);
console.log(arr)
arr.fill(10, 1);
console.log(arr)


let arr1 = [12, 11, 7, 8, 9]

arr1.sort(function (a, b){
    //return a-b
    return b-a
})

console.log(arr1)

//Array -> Entries and Keys
for (let a of arr1.entries()){ 
    console.log(a)
}

for (let a of arr1.keys()){ 
    console.log(a)
}

for (let a of arr1.values()){ 
    console.log(a)
}


//Array search or Iteration methods

let arr2 = [12, 11, 7, 8, 9]

console.log(arr2.includes(12))

//map method
console.log("Map method")
let newarr = arr2.map((e) =>{
    return e+5
})

console.log(newarr)
console.log(arr2)

console.log("foreach started")
//forEach method
arr2.forEach((e) =>{
    console.log(e)
})


console.log("filter method")

//filter method
let newarr2 = arr2.filter((e) =>{
    return e>8
})

console.log(newarr2)
console.log(arr2)



console.log("Find method started")

//find method
let newarr3 = arr2.find((e) =>{
    return e>8
})

console.log(newarr3)
console.log(arr2)

//some method --> any single condition true it will reteun true
console.log("Some method started")
let newarr4 = arr2.some((e) =>{
    return e>8
})

console.log(newarr4)


//Every method --> any single condition false it will reteun false
console.log("Some method started")
let newarr5 = arr2.every((e) =>{
    return e>8
})

console.log(newarr5)
 

//Find Index method 
console.log("FindIndex method started")
let newarr6 = arr2.findIndex((e) =>{
    return e==8
})

console.log(newarr6)

//Reduce method 
console.log("Reduce method started")

let arr3 = [1,2,3]
let newarr7= arr3.reduce((e, i) =>{
    return e+ i
})

console.log(newarr7)
 
 
//map() will return a new array as per the conditions applied.
//forEach() will not return anything. forEach() returns undefined.
//filter() method will return an array of matching elements else will return an empty array if no matching happens.