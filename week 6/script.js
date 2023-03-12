// MAR 10 2023
//
//
// QUESTION 1
// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

// Examples
// pluralize(["cow", "pig", "cow", "cow"]) ➞ ["cows", "pig"]

// pluralize(["table", "table", "table"]) ➞ ["tables"]

// pluralize(["chair", "pencil", "arm"]) ➞ ["chair", "pencil", "arm"]
// Notes
// This is an oversimplification of the English language so no edge cases will appear.
// Only focus on whether or not to add an s to the ends of words.
// All tests will be valid.

// // SOLUITON
// function pluralize(arr) {
//   let output_arr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!output_arr.includes(arr[i]) && arr[i] !== "*") {
//       output_arr.push(arr[i]);
//     } else {
//       output_arr = output_arr
//         .join(" ")
//         .replace(arr[i], arr[i] + "s")
//         .split(" ");
//       arr = arr.join(" ").replaceAll(arr[i], "").split("*");
//     }
//   }
//   return output_arr;
// }

// console.log(pluralize(["cow", "pig", "cow", "cow"]));
// console.log(pluralize(["table", "table", "table"]));
// console.log(pluralize(["chair", "pencil", "arm"]));
//
//
//
//
//
// QUESTION 2
// You are given an array of strings consisting of grocery items, with prices in parentheses. Return an array of prices in float format.

// Examples
// getPrices(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]) ➞ [5.99, 0.2, 8.50, 1.99]

// getPrices(["salad ($4.99)"]) ➞ [4.99]
// Notes
// See if you can use RegExp to solve (but it's not necessary).

// // SOLUTION
// function getPrices(arr) {
//   const prices = [];
//   for (let i = 0; i < arr.length; i++) {
//     const str = arr[i];
//     const priceStr = str.match(/\d+(\.\d{1,2})?/)[0];
//     const price = parseFloat(priceStr);
//     prices.push(price);
//   }
//   return prices;
// }

// console.log(
//   getPrices([
//     "ice cream ($5.99)",
//     "banana ($0.20)",
//     "sandwich ($8.50)",
//     "soup ($1.99)",
//   ])
// );
// console.log(getPrices(["salad ($4.99)"]));
//
//
//
//
// QUESTION 3
// Write a function that takes a list of hours and returns the total weekly salary.

// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.
// Examples
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400

// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410

// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280
// Notes
// Every element in the array is greater than or equal to 0.

// // SOLUTION
// function weeklySalary(hours) {
//   let total = 0;
//   for (let i = 0; i < hours.length; i++) {
//     console.log();
//     if (i >= 0 && i <= 4) {
//       if (hours[i] <= 8) total += hours[i] * 10;
//       else total += (hours[i] - 8) * 15 + 8 * 10;
//     }
//     if (i === 5 || i === 6) {
//       if (hours[i] <= 8) total += hours[i] * 20;
//       else total += (hours[i] - 8) * 30 + 8 * 20;
//     }
//   }
//   return total;
// }
// console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
// console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
// console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
//
//
//
//
//
// MAR 11 2023
//
// QUESTION 1
// While useful, the modulo operator in JavaScript is not infallible when negative numbers are thrown into the mix. For example, -13 % 64 = -13, when the actual answer is 51. Create a function to fix this. It should also work for positive numbers.

// Examples
// mod(-13, 64) ➞ 51

// mod(50, 25) ➞ 0

// mod(-6, 3) ➞ 0
// Notes
// All test cases contain valid numbers.

// SOLUTION

// // Should return a mod b
// function mod(a, b) {
//   return ((a % b) + b) % b;
// }

// console.log(mod(-13, 64));
// console.log(mod(50, 25));
// console.log(mod(-6, 3));

//
//
//
//
// QUESTION 2
// Write a function that takes a string input and returns the string in a reversed case and order.

// Examples
// invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

// invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

// invert("step on NO PETS") ➞ "step on NO PETS"

// invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
// Notes
// No empty strings and will neither contain special characters nor punctuation.
// A recursive version of this challenge can be found via this link.

// // SOLUTOIN

// function invert(str) {
//   if (!str.includes(" ")) return str.split("").reverse().join("");
//   else {
//     return str
//       .split(" ")
//       .map((word) => word.split("").reverse().join(""))
//       .reverse()
//       .join(" ");
//   }
// }

// console.log(invert("dLROW YM sI HsEt"));
// console.log(invert("ytInIUgAsnOc"));
// console.log(invert("step on NO PETS"));
// console.log(invert("XeLPMoC YTiReTXeD"));
//
//
//
//
// QUESTION 3
// Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

// Examples
// leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// // Note that 20 is greater than all the elements to it's
// // right side, similarly 15 and so on.

// leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// // Note that 20 cannot be added because it is not greater than 25.

// leader([1, 2, 3, 4, 5]) ➞ [5]
// // 5 is technically greater than the (zero) remaining items.

// leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
// // 10 is greater than all items to the right of it, so include.
// // 3 is not greater than all items to the right of it, so exclude.
// // 5 is greater than the remaining items, so include.
// Notes
// Add elements in the new array in the same order they occur in the input array.

// // SOLUTION
// function leader(arr) {
//   let output_arr = [];
//   arr.push(0);
//   const maxi = Math.max(...arr);
//   for (let i = arr.indexOf(maxi); i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       output_arr.push(arr[i]);
//     }
//   }
//   return output_arr;
// }

// console.log(leader([2, 3, 20, 15, 8, 3]));
// console.log(leader([2, 3, 20, 15, 8, 25, 3]));
// console.log(leader([1, 2, 3, 4, 5]));
// console.log(leader([8, 7, 1, 2, 10, 3, 5]));

//
//
//
//
//
// MAR 12 2023
//
//
// QUESTION 1
// Mubashir needs your help to count a specific digit in an array.

// You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.

// Examples
// countDigits(10, 1) ➞ 4
// // Squared array from 0 to 10 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// // Digit 1 appeared 4 times in the array

// countDigits(25, 2) ➞ 9

// countDigits(10, 1) ➞ 4
// Notes
// d will always be 0<=d<10.

// // SOLUTION
// function countDigits(n, d) {
//   let arr = [];
//   let d_times = 0;
//   for (let i = 0; i <= n; i++) {
//     arr.push(i ** 2);
//   }
//   for (const letter of arr) {
//     if (String(letter).includes(d)) d_times += 1;
//   }
//   return d_times;
// }
// console.log(countDigits(10, 1));
// console.log(countDigits(25, 2));
// console.log(countDigits(10, 1));
// 
// 
// 
// QUESTION 2
// For this challenge, forget how to add two numbers together. The best explanation on what to do for this function is this meme:

// Examples
// memeSum(26, 39) ➞ 515
// // 2+3 = 5, 6+9 = 15
// // 26 + 39 = 515

// memeSum(122, 81) ➞ 1103
// // 1+0 = 1, 2+8 = 10, 2+1 = 3
// // 122 + 81 = 1103

// memeSum(1222, 30277) ➞ 31499

// // SOLUTION
// function memeSum(a, b) {
// 	let a_=String(a)
// 	let b_=String(b)

//     return String(a)
// }

// console.log(memeSum(26, 39))
// console.log(memeSum(122, 81) )
// console.log(memeSum(1222, 30277))
