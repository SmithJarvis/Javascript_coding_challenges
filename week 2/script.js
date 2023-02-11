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
// QUESTION 3
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

//
//
//
//
//
// FEB 11 2023
//
//
//
//
//
// //  QUESTION 1
// // Create a function that takes two dates and returns the number of days between the first and second date.
// //
// // Examples
// // getDays(
// //   new Date("June 14, 2019"),
// //   new Date("June 20, 2019")
// // ) ➞ 6

// // getDays(
// //   new Date("December 29, 2018"),
// //   new Date("January 1, 2019")
// // ) ➞ 3
// // // Dates may not all be in the same month/year.

// // getDays(
// //   new Date("July 20, 2019"),
// //   new Date("July 30, 2019")
// // ) ➞ 10

// // SOLUTION
// function getDays(date1, date2) {
//   return `${Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))} days`;
// }

// console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
// console.log(getDays(new Date("Dec 29, 2018"), new Date("Jan 1, 2019")));
// console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));

//
//
//
// QUESTION 2
//
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
//
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5

// // SOLUTION

// function getLength(arr) {
//   let total = 0;

//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       total += getLength(item);
//     } else {
//       total++;
//     }
//   }

//   return total;
// }

// console.log(getLength([1, [2, 3]]));
// console.log(getLength([1, [2, [3, 4]]]));
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
// console.log(getLength([1, [2], 1, [2], 1]));
// console.log(getLength([]));

//
//
//
//
// QUESTION 3
//
// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

// Examples
// doesBrickFit(1, 1, 1, 1, 1) ➞ true

// doesBrickFit(1, 2, 1, 1, 1) ➞ true

// doesBrickFit(1, 2, 2, 1, 1) ➞ false
//
// Notes
//     1. You can turn the brick with any side towards the hole.
//     2. We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
//     3. You can't put a brick in at a non-orthogonal angle.

// // SOLUTION

// // (a,b,c) -- dimensions of the brick
// // (w,h) -- dimensions of the hole
// function doesBrickFit(a, b, c, w, h) {
//   if ((a <= h && b <= w) || (a <= w && b <= h)) return true;
//   return false;
// }

// console.log(doesBrickFit(1, 1, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 1, 1, 1));
// console.log(doesBrickFit(1, 2, 2, 1, 1));