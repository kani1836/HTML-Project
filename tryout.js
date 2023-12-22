
let str = "Kani is a good boy"

let count = 0;

for (i=0; i<str.length; i++){

    if(str.charAt(i) == 'K'){

        count++

    }

    
}
console.log(count)



//Write a program to display sum of even numbers of the input array

let arr = [5, 14, 22, 33, 44, 55, 66];

let total = 0;

for (i=0; i<arr.length; i++){
    if(arr[i] %2 == 0){
        total = total + arr[i]
        //total += arr[i]
    }
}

console.log('sum of the even numbers from the above array is' + " " +total)








let increase = 1;

for (i=0; i<=4; i++){
    let rowoutput = ''
    // console.log(rowoutput)

    for (j=1; j<=i ; j++) {
        rowoutput += increase
        increase++
    }

    console.log(rowoutput)

}

// let animal = new Object();

// animal.name = "Lion",
// animal.type =  "Killer",
// animal.color = "Yellow";

// animal.name1 = "Tiger",
// animal.type1 =  "Soft",
// animal.color1 = "Green";

// console.log(animal.type)


function animal2 (name, type, color){

    this.name = name;
    this.type =type;
    this.color = color;
}

var tiger =  new animal2 ("tiger", "killer", "red")
var lion =  new animal2 ("lion", "comedypiece", "yellow")
var rabiit =  new animal2 ("rabbit", "soft piece  ", "white")

console.log(tiger)

add = 5+5;

console.log (add)