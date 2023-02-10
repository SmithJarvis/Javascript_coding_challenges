// FEB 10 2023
//
//
// QUESTION 1
// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, https://www.tutorialspoint.com/data_structures_algorithms/tower_of_hanoi.htm

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

// Examples
// towerHanoi(3) ➞ 7
// towerHanoi(5) ➞ 31
// towerHanoi(0) ➞ 0

// // SOLUTION
// // Tower of Hanoi puzzle with n disks can be solved in minimum 2n−1 steps.
// function towerHanoi(n) {
//   return 2 ** n - 1;
// }

// console.log(towerHanoi(3));
// console.log(towerHanoi(5));
// console.log(towerHanoi(0));

//
//
//
// QUESTION 2
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5] ➞ 3

// Create a function that returns the total number of boomerangs in an array.

// To illustrate:
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

// Be aware that boomerangs can overlap, like so:
// [1, 7, 1, 7, 1, 7, 1]
// // 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

// Examples
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

// // SOLUTION
// function countBoomerangs(arr) {
//   let boomCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i + 2] !== "number") return boomCount;
//     if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) {
//       boomCount += 1;
//     }
//   }
//   return boomCount;
// }
// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

//
//
//
// QUESTION 2
//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0

// // SOLUTION
// function oddishOrEvenish(num) {
//   let sum = 0;
//   for (let i = 0; i < String(num).length; i++) {
//     sum += Number(String(num)[i]);
//   }
//   if (sum % 2 === 0) return "Evenish";
//   else return "Oddish";
// }
// console.log(oddishOrEvenish(43));
// console.log(oddishOrEvenish(373));
// console.log(oddishOrEvenish(4433));
