/*
1. 
Why we use call, apply, bind
*/

// const obj = {
//   firstname: "Ritesh",
//   lastname: "Dhamnaskar",
//   // traditional function
//   printName: function (param1, param2) {
//     console.log("this variable -->", this.firstname + " " + this.lastname); //Ritesh Dhamnaskar
//     console.log("Function params -->", param1 + " " + param2); //Ritesh Dhamnaskar
//   },
// };
// obj.printName();

// // For function borrrowing we are using call, apply, bind
// let obj2 = {
//   firstname: "Virat",
//   lastname: "Kohli",
// };

// let bindFunc = obj.printName.bind(obj2); //Function borrowing using bind
// bindFunc("First", "Second");
// obj.printName.bind(obj2, "Sachin", "Tendulkar")();  //Function borrowing using bind

// obj.printName.apply(obj2, ["First", "Second"]); //Function borrowing using apply

// obj.printName.call(obj2, "First", "Second"); //Function borrowing using call

/****************************************************************************************** */

/*
Debouncing in javascript
*/
let counter = 0;
function getData() {
  console.log("Inisde function", counter++);
}

function handleInputChange(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay);
  };
}

let betterFunction = handleInputChange(getData, 300);
