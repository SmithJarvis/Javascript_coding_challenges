// MAR 3 2023
//
//
// QUESTION 1
// Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.

// Examples
// countLoneOnes(101) ➞ 2
// countLoneOnes(1191) ➞ 1
// countLoneOnes(1111) ➞ 0
// countLoneOnes(462) ➞ 0

// Notes
// Tests will include positive whole numbers only.

// // SOLUTION
// function countLoneOnes(n) {
//   let sum = 0;
//   n = String(n);
//   for (let i = 0; i < n; i++) {
//     if (n[i] === "1" && n[i + 1] !== "1" && n[i - 1] !== "1") {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// console.log(countLoneOnes(101));
// console.log(countLoneOnes(1191));
// console.log(countLoneOnes(1111));
// console.log(countLoneOnes(462));

//
//
//
//
// QUESTION 2
// Your task, is to create N x N multiplication table, of size n provided in parameter.

// For example, when n is 5, the multiplication table is:

// 1, 2, 3, 4, 5
// 2, 4, 6, 8, 10
// 3, 6, 9, 12, 15
// 4, 8, 12, 16, 20
// 5, 10, 15, 20, 25
// This example will result in:

// [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
// Examples
// multiplicationTable(1) ➞ [[1]]
// multiplicationTable(3) ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

// // SOLUTION
// function multiplicationTable(n) {
//   let table = [];
//   for (let i = 1; i <= String(n); i++) {
//     let multiples = [];
//     for (let j = 1; j <= String(n); j++) {
//       multiples.push(i * j);
//     }
//     table.push(multiples);
//   }
//   return table;
// }

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(3));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(4));
//
//
//
//
// QUESTION 3
// Create a function that takes numbers b, m, and n as arguments and returns the definite integral of the function f(x)=(b+1)*x^b with respect to x from x=m to x=n, where b, m, and n are constants.

// Examples
// integral(0, 2, 5) ➞ 3
// integral(2, 4, 7) ➞ 279
// integral(5, 9, 3) ➞ -530712

// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
// Assume that b will be an integer greater than or equal to 0.
// m and n can be any integer, both positive and negative.

// // SOLUTION
// function integral(b, m, n) {
//   return n ** (b + 1) / (b + 1) - m ** (b + 1) / (b + 1);
// }
// console.log(integral(0, 2, 5));
// console.log(integral(2, 4, 7));
// console.log(integral(5, 9, 3));


MAR 04 2023
//
//
//
//
//QUESTION 1
//
// SOLUTION
