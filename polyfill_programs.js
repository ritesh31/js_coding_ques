//1. Polyfill for Array.forEach()
// arr.forEach((ele)=>{})

// const arr = [1, 2, 3, 4, 5];
// Array.prototype.myForEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i);
//   }
// };

// arr.myForEach((ele) => {
//   console.log(ele);
// });

/******************************************************************************* */
//2. Polyfill for Array.map()
// arr.map((ele)=>{})

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.myMap = function (cb) {
//   let result;
//   let tempArr = [];
//   for (let i = 0; i < this.length; i++) {
//     result = cb(this[i], i, this);
//     tempArr.push(result);
//   }
//   return tempArr;
// };

// const data = arr.myMap((ele, index, arr) => {
//   return ele * 2;
// });

// console.log(arr);
// console.log(data);

/******************************************************************************* */