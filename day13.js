//exception handling

// try {
//     const a = 15;
//     a = 10;
//     console.log(a)
// } catch (error) {
//     console.log(error)
// } finally{
//     console.log("i will print always")
// }

// console.log("hello")


//functions
let num = 5;
function add() {
    num+=5;
    console.log("function calling")
}

add()
console.log(num)

//arrowfunctions

const sub = () => {
    num -= 2
}

sub()
console.log(num)


//immediately invoked functions

let no = (
    function(){
       console.log("I will start without the function calling") 
    }
)()