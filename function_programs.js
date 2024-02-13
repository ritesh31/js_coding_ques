// // Q1: Given string, reverse each word in the sentense
// // I/P: This is javascript file
// // O/P: This is javascript file
// function reverseString() {
//   let str = "this is javascript file";
//   let splitStr = str.split(" ").map((e) => {
//     return e.split("").reverse().join("");
//   });

//   let res = splitStr.join(" ");
//   console.log(res);
// }
// reverseString();

// // ******************************************************************************************
// // Q2: How to check object is an array or not?
// function checkIsArray() {
//   let arr = [];
//   let res = Array.isArray(arr);
//   console.log(res);
// }
// checkIsArray();

// // ******************************************************************************************
// // Q3: Check number is integer?
// function checkIsNumber() {
//   let num = 2.0;
//   let res = Number.isInteger(num); //Sol 1
//   // let res = num % 1 === 0 ? true : false; //Sol 2
//   console.log(res);
// }
// checkIsNumber();

// // ******************************************************************************************
// // Q4: Duplicate an array
// // I/P: duplicate([1, 2, 3, 4, 5]) => [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// function duplicateArray() {
//   let arr = [1, 2, 3, 4, 5];
//   let res = arr.concat(arr); //Sol-1 It will not reflect original array
//   console.log(res);

//   // arr.push(...arr); //Sol-2 It will change original array
// }
// duplicateArray();

// // ******************************************************************************************
// // Q5: Reverse number ?
// function reverseNumber() {
//   let num = 12345;
//   let res = num.toString().split("").reverse().join("");
//   console.log(res);
// }
// reverseNumber();

// // ******************************************************************************************
// // Q6: Write JS function that returns a passed string with letters in alphabetical order
// function alphabeticalOrder() {
//   let str = "javascript";
//   let res = str.split("").sort().join("");
//   console.log(res);
// }

// alphabeticalOrder();

// // ******************************************************************************************
// // Q7: Capitalise each starting word of string ?
// // I/P: this is javascript file
// // O/P: This Is Javascript File
// function capitaliseString() {
//   let str = "this is javascript file";
//   let res = str
//     .split(" ")
//     .map((word) => {
//       return word.charAt(0).toUpperCase() + word.substring(1);
//     })
//     .join(" ");
//   console.log(res);
// }
// capitaliseString();

// // ******************************************************************************************
// // Q8: Write javasript function to get number of occurences of each letter in specified string
// // The in operator will check if the property is present, either directly in an object or in its prototype chain;
// // whereas, the hasOwnProperty() method only checks if the property is directly present in the object.
// function countOccurences() {
//   let str = "javascript";
//   let obj = {};
//   str.split("").forEach((e) => {
//     // obj.hasOwnProperty(e)  we can use this method to check key in object
//     if (e in obj) {
//       obj[e] += 1;
//     } else {
//       obj[e] = 1;
//     }
//   });
//   console.log(obj);
// }
// function countOccurences(str) {
//   const charCount = {};
//   for(let char of str){
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   console.log(charCount)
// }
// countOccurences('javascript');

// // ******************************************************************************************
// // Q9: Filter the list of user based on gender
// function filterList() {
//   const users = [
//     { name: "Ritesh", gender: "male" },
//     { name: "Sameer", gender: "male" },
//     { name: "Deepika", gender: "female" },
//     { name: "Sagar", gender: "male" },
//     { name: "Ruchi", gender: "female" },
//   ];
//   let res = users.filter((user) => user.gender === "male");
//   console.log(res);
// }
// filterList();

// // ******************************************************************************************
// // Q10: Write promise and always print console if there is promise resolve or reject.
// let test = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });

// test
//   .then(
//     (success) => {
//       console.log("inside success");
//     },
//     (error) => {
//       console.log("inside error");
//     }
//   )
//   .finally(() => console.log("Inside finally")); //finally block always run in promise.

// ******************************************************************************************
// // Q11: Sort array
// function sortArray() {
//   let arr = [23, 4, 5, 12, 1, 6, 34];
//   // let res = arr.sort(); //Its consider number as string like '23'
//   let asce = arr.sort((a, b) => a - b); //ascending array
//   // let desc = arr.sort((a, b) => b - a);  //descending array
//   console.log(asce);
// }
// sortArray();

// // ******************************************************************************************
// // Q12: Make unique numbers of array from given array

// function uniqueArray() {
//   let arr = [1, 2, 3, 4, 4, 33, 5, 1, 5];
//   let res = new Set(arr);
//   res = [...res];
//   console.log(res);
// }
// uniqueArray();

// // ******************************************************************************************
// // Q13: How To find duplicate elements in array in javascript?
// function findDuplicate(arr) {
//   const res =  arr.filter((ele, index, arr) => arr.indexOf(ele) !== index)
//   console.log(res)
// }
// let arr = [1, 2, 3, 4, 4, 33, 5, 1, 5];
// findDuplicate(arr)

// // ******************************************************************************************
// // Q14: Write a JavaScript program to find the maximum number in an array.
// function findMax(arr) {
//   const res = arr.sort((a, b) => a - b)[arr.length - 1];
//   // const res = Math.max(...arr); //Another solution
//   console.log(res);
// }
// let arr = [1, 2, 3, 4, 4, 33, 5, 1, 5];
// findMax(arr);

// // ******************************************************************************************
// // Q15: Write a function that finds the longest word in a sentence.
// function findLongestString(sentence) {
//   let arr = sentence.split(" ");
//   return arr.reduce((acc, next) => {
//     if (acc.length > next.length) {
//       return acc;
//     } else {
//       return next;
//     }
//   });
// }
// let str = "The quick brown fox jumps over the lazy colordog";
// console.log(findLongestString(str));

// // ******************************************************************************************
// // Q16: Write a function that that flatten array and sort array withput inbuilt function with only one for loop
// let res = [];
// function flattenArray(arr, depth = 1) {
//   arr.forEach((a) => {
//     if (Array.isArray(a)) {
//       flattenArray(a, -1);
//     } else {
//       let max = [],
//         min = [];
//       res.push(a);
//       min = res.filter((f) => f < a);
//       max = res.filter((f) => f > a);
//       min.push(a);
//       res = [...min, ...max];
//     }
//   });
// }

// let arr = [
//   [10, 4, 5, [1, 12]],
//   [2, 6, 7],
//   [3, 8, 9],
// ];
// flattenArray(arr);
// console.log(res);

// // ******************************************************************************************
// // Q17: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// function reduceArr(arr) {
//   return arr.reduce((total, accum) => total * accum);
// }
// let res = [];
// function sample(arr) {
//   arr.map((a, index) => {
//     let filteredArr = arr.filter((f, filterIndex) => filterIndex !== index);
//     res.push(reduceArr(filteredArr));
//   });
// }

// sample([4, 3, 2, 1, 2]);
// console.log(res);

// // ******************************************************************************************
// // Q18: Sort array using quick sort
// const arr = [6, 1, 5, 3, 9, 6, 7, 10, 16, 4, 0, 12, 2];

// function qsort(arr) {
//   if (arr.length < 2) return arr;
//   // choose a pivot, p
//   // the choice of pivot can effect worst-case performance
//   // for this, we'll just use the first element.
//   const [p, ...rest] = arr;

//   // partition array into element greater and lesser that the pivot
//   // this can be optimized so you don't loop through the array twice
//   const low = rest.filter((n) => n <= p);
//   const high = rest.filter((n) => n > p);

//   // recurse on both partitions and reassemble as recursion unwinds
//   return [...qsort(low), p, ...qsort(high)];
// }
// console.log(qsort(arr).join(", "));

// // ******************************************************************************************
// // Q19: Find the addition of two numbers equal to 12 & store the index of these two numbers
// let arr = [1,2,3,4,5,6,7,8,9]
// let target = 12
// let ans = []
// function sample() {
//     for(let i=0; i<arr.length/2; i++) {
//         let diff = target-arr[i]
//         let index = arr.indexOf(diff)
//         if(index !== -1) {
//             ans.push(`${i}-${index}`)
//         }
//     }
// }

// sample();
// console.log(ans)

// // ******************************************************************************************
// // Q20: You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// let list1 = [2,4,5,1,3]
// let list2 = [1,2,11]
// let temp = 0
// let res = []

// let len = 0
// if(list1.length > list2.length) {
//     len = list1.length;
//     let diff = list1.length - list2.length
//     const myArray = new Array(diff).fill(0);
//     list2 = [...myArray, ...list2]
// } else {
//     len = list2.length;
//     let diff = list2.length - list1.length
//     const myArray = new Array(diff).fill(0);
//     list1 = [...myArray, ...list1]
// }

// for(let i=len-1; i>=0; i--) {
//     let data = list1[i] + list2[i] + temp
//     res.push(data%10)
//     temp = Math.floor(data/10)
//     console.log(temp)
// }

// console.log(res)

// // ******************************************************************************************

// // Q21: Write program that picks only four element from array which addition will be specific number
// Input: targetArr = [1,2,6,3,8,4,5,7], targetSum = 16
// Output: [1,2,6,7]

// function findFourElements(arr, targetSum) {
//   let n = arr.length;
//   // Sort the array to use two-pointer technique
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < n - 3; i++) {
//     for (let j = i + 1; j < n - 2; j++) {
//       let left = j + 1;
//       let right = n - 1;

//       console.log(i, j, left, right)
//       while (left < right) {
//         let sum = arr[i] + arr[j] + arr[left] + arr[right];
//         if (sum === targetSum) {
//           return [arr[i], arr[j], arr[left], arr[right]];
//         } else if (sum < targetSum) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     }
//   }
//   return null; // If no combination found
// }

// const arr = [1, 2, 4, 3, 5, 6, 7];
// const targetSum = 16;
// const result = findFourElements(arr, targetSum);

// if (result) {
//   console.log(`Four elements that sum up to ${targetSum} are: ${result}`);
// } else {
//   console.log(`No combination of four elements adds up to ${targetSum}`);
// }

// // ******************************************************************************************

// // Q22: Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k 
// // and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
// // Example 1:
// // Input: nums = [1,2,3,4,5]
// // Output: true
// // Explanation: Any triplet where i < j < k is valid.

// // Example 2:
// // Input: nums = [5,4,3,2,1]
// // Output: false
// // Explanation: No triplet exists.

// function increasingTriplet(nums) {
//   for(let i = 0, j = 1, k = 2; k < nums.length; i++, j++, k++) {
//       if(nums[i] < nums[j] && nums[j] < nums[k]) {
//           return true 
//           break;
//       } else {
//           if(k === nums.length-1)
//           return false 
//       }
//   }
// }

// let nums = [5,4,3,2,1]
// let res = increasingTriplet(nums)
// console.log(res)

// // ******************************************************************************************

// // Q23: Given an array of characters chars
// // Example 1:
// // Input: chars = ["a","a","b","b","c","c","c"]
// // Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// // Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// function compress(chars) {
//   let obj = {}
//   for(let char of chars) {
//     if(obj.hasOwnProperty(char)) {
//       obj[char]+=1
//     } else {
//       obj[char] = 1
//     }
//   }
//   console.log(obj)
// };

// let chars = ["a","a","b","b","c","c","c"];
// let res = compress(chars);

// // ******************************************************************************************

