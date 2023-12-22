//Print the length of each words in string

let str = "this is javascript class";
let words = str.split(" ")

for(i=0; i<words.length; i++){
    console.log(words[i])
    console.log(words[i].length)
}

//Checking how many times b is occured

console.log("Check how many times b is occured")
let str1 = "This bad time bad behave";
let count = 0;
for(i=0; i<str1.length; i++){
    
    if(str1.charAt(i) == 'b'){
        count ++;
    }

}

console.log('b is occured'+ " " + count + " " +'times')


//Find highest aged person name but more than 18

let obj = [
    { "name": "xyz", age: 12 },
    { "name": "xyz", age: 11 },
    { "name": "xyz", age: 15 },
    { "name": "abc", age: 21 },
    { "name": "def", age: 25 }
];

for(let values of obj){
    if(values.age > 18){
        console.log(values)
        
    }
}

// //Printing 1 to 4 in loop

for(i=1; i<=4; i++){
    console.log(i)
}


// //Printing 1 to 10 in odd and even

for (i=1; i<=10; i++){
    if([i] %2 == 0){
       console.log("even " + i)
    }

    else{
        console.log("odd " + i)
    }
}

//Filter the array based on the user input
let test1 = ["local train", "express train", "aeroplane", "bus"]
//result
//local train, express train

let outputarray = test1.filter((e)=> e.includes("train"))

console.log(outputarray);




//*
//***
//*****

let res = "";

let count1 = 1;

for (let i =0; i<3; i++){ //this is for row count which is 3


    for (let j=0; j < count1; j++){ //this is for coulumn count which is 5 (5 is the max count)

        res += "*"
    }

    res +="\n"
    count1=count1+2
}

console.log(res)

//Finding polyndrome

let strr = "madam"

let flag;


for (let i = 0; i < strr.length; i++){

    flag = false

   if(strr.charAt(i) == strr.charAt(strr.length -1 -i) )  {
        flag = true;
   }
}

if (flag) {
    console.log("yes this is a palindrome")
}

else{
    console.log("this is not a palindrome")
}