//asynch and Synch functions

//synchronus - it will execute from the start and it will not go to the next line if there is any error
//asynchronus - this will execute all the other working functions even if there is any error in the first function or any function
// you can use .then or await for asynch functions

// <!--- >

setTimeout

setTimeout (() =>{
    console.log("timeout")
},3000)


//setInteval
setInterval (() =>{
    console.log("timeout 1")
},3000)




//removing duplicates from the array

let arr = [4,5,8,9,4]

let output = []

arr.forEach((ele)=>{
    if(!output.includes(ele)){
        output.push(ele)
    }
})
console.log(output)



