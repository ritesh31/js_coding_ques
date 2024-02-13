// // Question 1
// (function () {
//   var a = (b = 3);
// })();

// console.log(typeof a);
// console.log(typeof b);
// /*
//   O/P:
//     undefined
//     number
// Explanation: It will execute following way
// b = 3        its consider as global variable because not keyword
// var a = b
// value of b is assigned to a
// but a is declared with var (functional scope) that's why we are getting undefined O/P outside of function
// */
// /****************************************************************************************/

// // Question 2
// function foo() {
//   return;
//   {
//     name: "Anil";
//   }
// }
// console.log(foo());
// /*
//   O/P:
//      undefined
// */
// /***************************************************************************************/

// // Question 3
// console.log(1 + "1"); //11
// console.log(1 + "2" + "2"); //122
// console.log("A" - "B" + 2); //NaN
// console.log("A" - "B" - 2); //NaN
// console.log(2 + "A" - "B" + 2); //NaN
// /*  Explanation: If the expression getting NaN & there are other expression remains for execution then output will be NaN */
// /***************************************************************************************/

// // Question 4
// var a = 0;
// function b() {
//   a = 10;
//   return;
//   var a = function () {};
// }
// console.log(a); //0
// /***************************************************************************************/

// // Question 5
// function test() {
//   function foo() {
//     return 100;
//   }
//   return foo();
//   function foo() {
//     return 10;
//   }
// }
// console.log(test()); //10
// /*  Explanation: In JS function also hoisted so in this example second function override first function */
// /**************************************************************************************/

// // Question 6
// test();
// function test() {
//   console.log("Test function");
// }
// /*  Explanation: It will print the console bcoz function hoisted at top */
// test();
// var test = function () {
//   console.log("Test function");
// };
// /*  Explanation: It will throw an error bcoz its consider function as variable & In JS variable declaration gets hoisted but
//     variable initialization not hoisted */
// /**************************************************************************************/

// // Question 7
// console.log(true + true); //2
// console.log(true + false); //1
// console.log(true + true - false); //2
// console.log(-true + true + false); //0
// /**************************************************************************************/

// // Question 8
// console.log(!!10 + 20); //21
// /**************************************************************************************/

// // Question 9
// let obj = {
//   a: "Pune",
//   b: "Mumbai",
//   a: "Delhi",
// };
// console.log(obj); //{a: 'Delhi', b: 'Mumbai'}
// /**************************************************************************************/

// // Question 10
// const num = 5 + "5" - 5;
// console.log(num);
// console.log(typeof num);
// // O/P:
// // 50
// // number
// /**************************************************************************************/

// // Question 11
// console.log(NaN === NaN);
// /*
// Explanation:
// NaN (Not a Number) is a special numeric value in JavaScript, and interestingly,
// NaN is not equal to itself. Therefore, the expression NaN === NaN evaluates to false.
// */
// /**************************************************************************************/

// // // Question 12
// // const x = [1,2,3]
// // x[-1] = -1
// // console.log(x[x.indexOf(10000)])
// // // O/P: -1
// /**************************************************************************************/

// // Question 13
// let x = [1, 2, 3] + [4, 5, 6];
// console.log(x);

// // O/P: "1,2,34,5,6"
// /*
// Explanation:
// Plus operator on string & numbers
// If its not string or number it would be try to convert that into string
// [1,2,3] -> its not number so convert into string -> 1,2,3
// [4,5,6] -> its not number so convert into string -> 4,5,6
// And then ,concats them -> [1,2,34,5,6] 34 bcoz there no comma after 3 & before 4  */
// /**************************************************************************************/

// // Question 14
// const set = new Set([1, 1, 2, 3, 4, 5, 5]);
// console.log(set)
// // O/P: "1,2,3,5,6"
// /**************************************************************************************/

// // Question 15
// let data = { name: "Ritesh" };
// console.log(delete data.name);
// console.log(data)
// // O/P: true
// //      {}
// /**************************************************************************************/

// // Question 16
// let data = ["Chris", "Ricky", "Smith"];
// let [y, z] = data;
// console.log(y, z);
// // O/P: Chris
// // Explanation:
// /*  Its works like distruction of object. If we assign [y, z] = data then output will be Chris Ricky  */
// /**************************************************************************************/

// // Question 17
// console.log(typeof typeof 42);
// // O/P: string
// /**************************************************************************************/

// // Question 18
// let arr = [1, 2, 3, 4];
// arr.concat([5]);
// console.log(arr.length);
// // O/P: 4
// /*  Explanation:
// Array concat() method doesn't change original array
// It return a new Array */
// /**************************************************************************************/

// // Question 19
// function sample() {
//   var x = 31;
//   if (true) {
//     var x = 71;
//     console.log(x);
//   }
//   console.log(x);
// }
// sample();
// // O/P: 71
// //      71
// /**************************************************************************************/

// // Question 20
// let arr = [3, 5, 7];
// arr.foo = "hello";
// for (let i in arr) {
//   console.log(i);
// }

// for (let i of arr) {
//   console.log(i);
// }
// O/P:
//        0
//        1
//        2
//        foo
//
//        3
//        5
//        7
/*  Explanation:
      arr = [
        0: 3,
        1: 5,
        2: 7,
        foo: "hello"
      ]
/**************************************************************************************/

// // Question 21
// Promise.resolve().then(() => console.log(1));
// queueMicrotask(() => console.log(2));
// setTimeout(() => console.log(3), 0);
// console.log(4);
// new Promise(() => console.log(5));
// (async () => console.log(6))();

// // O/P:
// 4
// 5
// 6
// 1
// 2
// 3
/*  Explanation: https://www.youtube.com/watch?v=IHQcma93fpE   */
/**************************************************************************************/