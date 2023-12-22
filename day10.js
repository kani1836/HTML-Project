//Array Methods

let arr = [4, 8, 7, 6, 3]

arr.push(10); //it will add as a last one
arr.unshift(15); //it will add as a first one
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.splice(2,2) // index of, how many want to delete
console.log(arr)
console.log(arr.slice(2,4))
console.log(arr.concat([12,13,15]))
console.log (arr.join(" "))

let arr1 =[1,2,3]
let arr2 =[4,5,6]
let arr3= [7,8,9]
let arr4 = [arr1, arr2, arr3]
let arr5 = [...arr1, ...arr2, ...arr3]//three dimensional array

console.log(arr4[2][1])// two dimensional array

console.log(arr5)// three dimensional array output

console.log(arr5.copyWithin(2))
