//have to check how to do sort in array using without predefined functions

let arr = [22, 1, 18, 2, 19, 3, 4]
let temp;

for (i = 0; i < arr.length - 1; i++) {

    for (j = 0; j < arr.length - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {

            temp = arr[j]

            arr[j] = arr[j + 1]

            arr[j + 1] = temp;

        }

    }

}

console.log(arr)

//reverse a string using pre-defined functions

//Method -1

let inputstr = "kaniminnal"

let split = inputstr.split("")

let reversearray = split.reverse()

let joinarray = reversearray.join("")

console.log(joinarray)

//Method -2 -- Single line code

console.log(inputstr.split("").reverse().join(""))


// reverse a string without using pre-defined functions

let inputstr1 = "kanikumar"
var outputstr = "";

for (let i = inputstr1.length - 1; i >= 0; i--) {

    outputstr += inputstr1[i]
}

console.log(outputstr)

if (inputstr1 === outputstr) {
    console.log("this is a polyndrome")
} else {
    console.log("this is not a polyndrom word")
}


console.log("reversed string output is ", outputstr)


//input as mobile number and alidate whether it's having 10 number and it's start with 9


let mobileno = 9791946880;

    let stringg = mobileno.toString();

    if (stringg.length === 10 && stringg.charAt(0) === '9') {
        
        console.log("Yes, this is a mobile number and the number is - ", mobileno)

    } else {
        console.log("No, this is not a mobile number and the number is - ", mobileno)
    }




    
    