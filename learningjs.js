//functions -- Using for reusablity


//create
function welcome(name,message){

    console.log ("Hi "+name+", Welcome to my website "+message+" ")

}

var message = "Here you can learn Js"

//Call
welcome ("Raj", message);
welcome ("Kani", message);
welcome ("Balu", message);


//Objects
var person = {
    name : 'Kani',
    age : 29,
    state: 'chennai',
    food: {
      fav: "biriyani",
      alergy: "verg rice"
    },
    welcome(){
      console.log("this is a function inside a object")
    }
  }
  
  console.log(person)
  console.log(person.name)
  console.log(person.age)
  console.log(person.state)
  console.log(person.food)
  // console.log(person.welcome())


  //arrays

  var color = ["blue", "red", "ornage", "yellow"]

  var model = [335, 544, 222]

  var bike = [
    {color:"red", model:350},
    {color:"blue", model:550},

  ]
  console.log(color)
  console.log(model)
  console.log(bike)
  console.log(bike[1])
  

  model.sort();

  color.sort();

  color.reverse();

  console.log(model)

  console.log(color)





