// /* Q1: You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// */
// var mergeAlternately = function (word1, word2) {
//   let strLength = word1.length > word2.length ? word1.length : word2.length;
//   console.log(strLength);
//   let result = "";
//   for (let i = 0; i < strLength; i++) {
//     if (word1[i]) {
//       result = result+word1[i];
//     }
//     if (word2[i]) {
//       result = result+word2[i];
//     }
//   }
//   return result;
// };

// let word1 = "abcde";
// let word2 = "pqr";
// const outputStr = mergeAlternately(word1, word2);
// console.log(outputStr);

// ******************************************************************************************

// /* Q2: For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// */

// var gcdOfStrings = function (str1, str2) {
//   // handle the base case
//   if (str1 + str2 !== str2 + str1) return "";
//   let a = str1.length;
//   let b = str2.length;

//   // loop (divide) until you find the
//   // highest common factor (length of string)
//   // like we did in maths
//   while (b) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return str1.substring(0, a);
// };

// let str1 = "abcabc";
// let str2 = "abc";
// let result = gcdOfStrings(str1, str2);
// console.log(result);

// ******************************************************************************************

// /* Q3: There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies
// the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
// they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

// Example 1:
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

// Example 2:
// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// */
// var kidsWithCandies = function (candies, extraCandies) {
//   let result = [];
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies < Math.max(...candies)) {
//       result.push(false);
//     } else {
//       result.push(true);
//     }
//   }
//   console.log(result);
//   return result;
// };

// let candies = [12,1,12],
//   extraCandies = 10;

// kidsWithCandies(candies, extraCandies);

// ******************************************************************************************

// /* Q4: You have a long flowerbed in which some of the plots are planted, and some are not. However,
// flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0's and 1's,
// where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be
// planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
// */

// var canPlaceFlowers = function (flowerbed, n) {
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       flowerbed[i - 1] !== 1 &&
//       flowerbed[i + 1] !== 1
//     ) {
//       flowerbed[i] = 1;
//       n = n - 1;
//     }
//   }
//   return n <= 0;
// };

// let flowerbed = [1, 0, 0, 0, 0, 1],
//   n = 2;
// let res = canPlaceFlowers(flowerbed, n);
// console.log(res);

// ******************************************************************************************

// /* Q5: Reverse Words in a String
// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// */

// var reverseWords = function (str) {
//   let strArr = str.trim().split(" ").filter(e => e !== "");
//   return strArr.reverse().join(" ");
// };

// let str = "a good   example";
// let res = reverseWords(str);
// console.log(res);

// ******************************************************************************************

// /* Q6: Product of Array Except Self
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// */

// var productExceptSelf = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let filteredArr = nums.filter((e, index) => index !== i);
//     let product = filteredArr.reduce((a, b) => {
//       let res = a * b;
//       if (res === -0) return 0;
//       return res;
//     });
//     arr.push(product);
//   }
//   return arr;
// };

// // For 50000 numbers of array
// // var productExceptSelf = function(nums) {
// //   let res = new Array(nums.length);
// //   let cur = 1;
// //   for(let i=0; i<nums.length; i++) {
// //       res[i] = cur;
// //       cur *= nums[i];
// //   }
// //   cur = 1;
// //   for(let i=nums.length-1; i>=0; i--) {
// //       res[i] *=cur;
// //       cur *= nums[i];
// //   }
// //   return res;
// // };
// let nums = [9,0,-2];
// let res = productExceptSelf(nums);
// console.log(res);
