// FEB 17 2023
//
//
// QUESTION 1
// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

// Examples
// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

// getFrequencies([]) ➞ {}

// // SOLUTION
// function getFrequencies(arr) {
//   let output = {};
//   for (const value of arr) {
//     if (output[value]) {
//       output[value] += 1;
//     } else if (!output[value]) {
//       output[value] = 1;
//     }
//   }
//   return output;
// }

// console.log(getFrequencies(["A", "B", "A", "A", "A"]));
// console.log(getFrequencies([1, 2, 3, 3, 2]));
// console.log(getFrequencies([true, false, true, false, false]));
// console.log(getFrequencies([]));

//
//
//
// QUESTION 2
// Create a function that outputs the result of a math expression in words.

// Examples
// wordedMath("One plus one") ➞ "Two"

// wordedMath("zero Plus one") ➞ "One"

// wordedMath("one minus one") ➞ "Zero"

// // SOLUTION
// function wordedMath(str) {
//   const digits = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     zero: 0,
//   };

//   const output = {
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     0: "zero",
//   };

//   let value1,
//     value2,
//     results = 0;
//   let arr = str.split(" ");
//   for (const num of arr) {
//     if (num.toLowerCase() === "plus") {
//       results = digits[arr[0].toLowerCase()] + digits[arr[2].toLowerCase()];
//     } else if (num.toLowerCase() === "minus") {
//       results = digits[arr[0].toLowerCase()] - digits[arr[2].toLowerCase()];
//     }
//   }
//   return output[results][0].toUpperCase() + output[results].slice(1);
// }
// console.log(wordedMath("One plus one"));
// console.log(wordedMath("zero Plus one"));
// console.log(wordedMath("one minus one"));

//
//
//
// QUESTION 3
// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.

// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // 10 + 4 = 14
// Examples
// colorPatternTimes(["Blue"]) ➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13
// Notes
// Only change coloring pencils if the next color is different to the color before it.
// Return a number in seconds.

// // SOLUTION
// function colorPatternTimes(cols) {
//   return cols.length * 2 + cols.length - 1;
// }
// console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
// console.log(colorPatternTimes(["Blue"]));
// console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));
// console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));

//
//
//
//
// FEB 18 2023
//
//
//
// QUESTION 1
// Create two functions:

// The first is isOdd() to check if a given number is odd using bitwise operator.
// The second is isEven() to check if a given input is even using regular expressions.
// Use of % operator is disallowed.

// Examples
// isOdd(3) ➞ "Yes"
// // Use Bitwise Operator

// isOdd(58) ➞ "No"
// // Use Bitwise Operator

// isEven("0") ➞ "Yes"
// // Use Regular Expression

// isEven("-99") ➞ "No"
// // Use Regular Expression
// Notes
// Input will only be integers (positive/negative/zero).
// For the second function, input will be numbers in string.

// // SOLUTION
// function isOdd(num) {
//   if ((num ^ 1) == num + 1) {
//     return "Even";
//   } else return "Odd";
// }

// function isEven(num) {
//   if (Number(num) % 2 === 0) {
//     return "Even";
//   } else return "Odd";
// }

// console.log(isOdd(3));
// console.log(isOdd(58));

// console.log(isEven("0"));
// console.log(isEven("-99"));

//
//
//
// QUESTION 2
// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and even positions will be represented as 0.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.
// Examples
// toBoolArray("deep") ➞ [false, true, true, false]
// // deep converts to 0110
// // d is the 4th alphabet - 0
// // e is the 5th alphabet - 1
// // e is the 5th alphabet - 1
// // p is the 16th alphabet - 0

// toBoolArray("loves") ➞ [false, true, false, true, true]

// toBoolArray("tesh") ➞ [false, true, true, false]
// Notes
// The letter A is at position 1 and Z at 26.

// // SOLUTION
// function toBoolArray(word) {
//   let outputBool = [];
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   for (const letter of word) {
//     if (alphabet.indexOf(letter) % 2 === 0) {
//       outputBool.push(true);
//     } else if (alphabet.indexOf(letter) % 2 === 1) {
//       outputBool.push(false);
//     }
//   }
//   return outputBool;
// }

// console.log(toBoolArray("deep"));
// console.log(toBoolArray("loves"));
// console.log(toBoolArray("tesh"));

//
//
//
// QUESTION 3A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// Create a function that determines whether a number is a Disarium or not.

// Examples
// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32

// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// isDisarium(544) ➞ false
// isDisarium(518) ➞ true
// isDisarium(8) ➞ true
// isDisarium(466) ➞ false

// // SOLUTION
// function isDisarium(num) {
//   let total = 0;
//   for (let i = 0; i < String(num).length; i++) {
//     total += Number(String(num)[i]) ** (i + 1);
//   }
//   if (total === num) return true;
//   else return false;
// }

// console.log(isDisarium(75));
// console.log(isDisarium(135));
// console.log(isDisarium(544));
// console.log(isDisarium(518));
// console.log(isDisarium(8));
// console.log(isDisarium(466));
