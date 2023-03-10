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
