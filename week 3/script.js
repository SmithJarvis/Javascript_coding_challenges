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
//   for (const color of cols) {
//     if (cols[color + 1] === color) {
//       timeNeeded = (cols.length - 2) * 2 + cols.length - 2;
//     } else timeNeeded = cols.length * 2 + 1 * (cols.length - 1);
//   }
//   return timeNeeded;
// }
// console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]));
// console.log(colorPatternTimes(["Blue"]));
// console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"]));
// console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));
