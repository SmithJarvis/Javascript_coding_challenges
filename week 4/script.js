// FEB 24 2023
//
//
// QUESTION 1
//You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

// Examples
// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"

// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"

// //  SOLUTION
// function mostExpensive(obj) {
//   let expensive = 0;
//   let expensiveObj = "";
//   for (const [key, value] of Object.entries(obj)) {
//     if (value > expensive) {
//       expensiveObj = key;
//     }
//   }
//   return `The most expensive one is the ${expensiveObj}`;
// }

// console.log(
//   mostExpensive({
//     "Diamond Earrings": 980,
//     "Gold Watch": 250,
//     "Pearl Necklace": 4650,
//   })
// );
// console.log(
//   mostExpensive({
//     "Silver Bracelet": 280,
//     "Gemstone Earrings": 180,
//     "Diamond Ring": 3500,
//   })
// );

//
//
//
// QUESTION 2
//
// Legendre's formula finds the exponent of the largest power of some prime p that divides (is a factor of) the factorial of some number n.

// Legendre's formula example (p = 2 and n = 27):

// Legendre's Formula

// So 2^23 is the largest power of 2 that divides 27!.

// The formula returns the sum of many fractions (rounded down) with n as the numerator and a steadily increasing power of p as the denominator, stopping when it exceeds the numerator.

// To illustrate:

// p = 5
// n = 100

// int(100/5) + int(100/25)
// // No 100/125 because 125 > 100.
// p = 2
// n = 128

// int(128/2) + int(128/4) + int(128/8) + ... + int(128/128)
// Given p and n, return the result of Legendre's formula (see Resources).

// Examples
// legendre(5, 100) ➞ 24

// legendre(2, 128) ➞ 127

// legendre(3, 50) ➞ 22

// Notes
// p and n will be positive integers.
// When p exceeds n, the result should be 0.

// //  SOLUTION
// function legendre(p, n) {
//   let i = 1;
//   let total = 0;
//   while (p ** i <= n) {
//     total += Math.floor(n / p ** i);
//     i += 1;
//   }
//   return total;
// }

// console.log(legendre(5, 100));
// console.log(legendre(2, 128));
// console.log(legendre(3, 50));
//
//
//
// QUESTION 3
// JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers, sorting them in ascending order, but using a block you can sort the iterable in different ways.

// Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

// Examples
// sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

// sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

// sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]

// SOLUTION
function sortArray(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(sortArray([2, -5, 1, 4, 7, 8]));
console.log(sortArray([23, 15, 34, 17, -28]));
console.log(sortArray([38, 57, 45, 18, 47, 39]));
