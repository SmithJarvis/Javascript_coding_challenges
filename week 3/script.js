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
//
// QUESTION 3
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

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
//
//
//
//
//
//  FEB 21 2023
//
//
//
// QUESTION 1
// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Examples
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"

// // // SOLUTION
// function doubleSwap(str, c1, c2) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === c1) {
//       newStr += str[i].replace(c1, c2);
//       //   console.log(str);
//     } else if (str[i] === c2) {
//       newStr += str[i].replace(c2, c1);
//       //   console.log(str);
//     } else newStr += str[i];
//   }
//   return newStr;
// }

// console.log(doubleSwap("aabbccc", "a", "b"));
// console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
// console.log(doubleSwap("128 895 556 788 999", "8", "9"));

//
//
//
//  QUESTION 2
//Create a function that takes two numbers as arguments and return the LCM of the two numbers.

// Examples
// lcm(3, 5) ➞ 15
// lcm(14, 28) ➞ 28
// lcm(4, 6) ➞ 12

// // SOLUTION
// function lcm(num1, num2) {
//   let i = 1;
//   while (i > 0) {
//     if (i % num1 === 0 && i % num2 === 0) {
//       return i;
//     }
//     i += 1;
//   }
//   return i;
// }

// console.log(lcm(3, 5));
// console.log(lcm(14, 28));
// console.log(lcm(4, 6));

//
//
//
//  QUESTION 3
// Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").

// Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.

// eval() is not allowed. In case of division, whenever the second number equals "0" return -1.

// For example:

// "15 / 0"  ➞ -1
// Examples
// arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24

// arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0

// arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144

// arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1

// // SOLUTION
// function arithmeticOperation(task) {
//   let output = 0;
//   let operator = task.split(" ")[1],
//     first_num = task.split(" ")[0],
//     second_num = task.split(" ")[2];

//   if (operator === "+") output = Number(first_num) + Number(second_num);
//   else if (operator === "-") output = Number(first_num) - Number(second_num);
//   else if (operator === "*") output = Number(first_num) * Number(second_num);
//   else if (operator === "/") output = Number(first_num) / Number(second_num);

//   if (output === "Infinity") return -1;
//   else return output;
// }

// console.log(arithmeticOperation("12 + 12"));
// console.log(arithmeticOperation("12 - 12"));
// console.log(arithmeticOperation("12 * 12"));
// console.log(arithmeticOperation("12 / 0"));

//
//
//
//
//
// FEB 22 2023
//
//
// QUESTION 1
//
// Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.

// Examples
// isFactorial(2) ➞ true
// // 2 = 2 * 1 = 2!

// isFactorial(27) ➞ false

// isFactorial(24) ➞ true
// // 24 = 4 * 3 * 2 * 1 = 4!

// // SOLUTION
// function isFactorial(num) {
//   let arr_multiples = [];
//   for (let i = 1; i < 24; i++) {
//     if (num !== 1 && num % i === 0) {
//       num /= i;
//       arr_multiples.push(i);
//     }
//   }

//   for (let i = 0; i < arr_multiples.length; i++) {
//     if (arr_multiples[i] !== i + 1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isFactorial(2));
// console.log(isFactorial(27));
// console.log(isFactorial(24));

//
//
//
//
// QUESTION 2
// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

// Example
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
// uncensor("abcd", "") ➞ "abcd"
// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

// // SOLUTION
// function uncensor(str, vowels) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "*") {
//       newStr += str[i].replace("*", vowels[0]);

//       vowels = vowels.slice(1);
//     } else newStr += str[i];
//   }
//   return newStr;
// }

// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
// console.log(uncensor("abcd", ""));
// console.log(uncensor("*PP*RC*S*", "UEAE"));

//
//
//
// QUESTION 3
// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// // Notes
// Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
// Valid input will always be a string of four digits. Output will be a string array.
// If the input is not four valid numbers, return the string, "Invalid input."

// Examples
// danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
// danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
// danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
// danceConvert("32a1") ➞ "Invalid input."

// // SOLUTION
// const MOVES = [
//   "Shimmy",
//   "Shake",
//   "Pirouette",
//   "Slide",
//   "Box Step",
//   "Headspin",
//   "Dosado",
//   "Pop",
//   "Lock",
//   "Arabesque",
// ];

// function danceConvert(pin) {
//   if (pin.length !== 4 || /[a-z]/i.test(pin)) return "Invalid pin";

//   let dance_output = [];

//   for (let i = 0; i < pin.length; i++) {
//     let number = i + Number(pin[Number(i)]);
//     if (number >= MOVES.length) number -= MOVES.length;

//     dance_output.push(MOVES[number]);
//   }
//   return dance_output;
// }

// console.log(danceConvert("0000"));
// console.log(danceConvert("3856"));
// console.log(danceConvert("9999"));
// console.log(danceConvert("32a1"));
//
//
//
//
// FEB 23 2023
//
//
//
// QUESTION 1
// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.

// Examples
// reversedBinaryInteger(10) ➞ 5
// // 10 = 1010 -> 0101 = 5

// reversedBinaryInteger(12) ➞ 3
// // 12 = 1100 -> 0011 = 3

// reversedBinaryInteger(25) ➞ 19
// // 25 = 11001 -> 10011 = 19

// reversedBinaryInteger(45) ➞ 45
// // 45 = 101101 -> 101101 = 45

// // SOLUTION
// function reversedBinaryInteger(num) {
//   let binary = num.toString(2).split("").reverse().join("");
//   return parseInt(binary, 2);
// }

// console.log(reversedBinaryInteger(10));
// console.log(reversedBinaryInteger(12));
// console.log(reversedBinaryInteger(25));
// console.log(reversedBinaryInteger(45));

//
//
//
//
// QUESTION 2
// Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.

// Examples
// hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"

// hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"

// hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"
// Notes
// Time t1 will always be the starting time and t2, the ending time.
// Return the string "No time has passed." if t1 is equal to t2.

// // SOLUTION
// function _12hrs_to_24hrs(time) {
//   const part = time.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
//   let hh = parseInt(part[1], 10);
//   const mm = parseInt(part[2], 10);
//   const ap = part[3] ? part[3].toUpperCase() : null;
//   if (ap === "AM") {
//     if (hh == 12) {
//       hh = 0;
//     }
//   }
//   if (ap === "PM") {
//     if (hh != 12) {
//       hh += 12;
//     }
//   }
//   return hh;
// }
// function hoursPassed(time1, time2) {
//   const time1_24 = _12hrs_to_24hrs(time1);
//   const time2_24 = _12hrs_to_24hrs(time2);
//   return `${time2_24 - time1_24} hours`;
// }

// console.log(hoursPassed("3:00 AM", "9:00 AM"));
// console.log(hoursPassed("2:00 PM", "4:00 PM"));
// console.log(hoursPassed("1:00 AM", "3:00 PM"));

//
//
//
//  QUESTION 3
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
//
// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

// Examples
// countNumberOfOccurrences({
//   a: "moron",
//   b: "scumbag",
//   c: "moron",
//   d: "idiot",
//   e: "idiot"
// }) ➞ { moron: 2, scumbag: 1, idiot: 2 }

// countNumberOfOccurrences({
//   a: "moron",
//   b: "moron",
//   c:"moron"
// }) ➞ { moron: 3 }

// countNumberOfOccurrences({
//   a: "idiot",
//   b: "scumbag"
// }) ➞ { idiot: 1, scumbag: 1 }

// // SOLUTION
// function countNumberOfOccurrences(obj) {
//   let output_obj = {};
//   for (const [key, value] of Object.entries(obj)) {
//     if (!output_obj[value]) {
//       output_obj[value] = 1;
//     } else {
//       output_obj[value] += 1;
//     }
//   }
//   return output_obj;
// }

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot",
//   })
// );

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "moron",
//     c: "moron",
//   })
// );

// console.log(
//   countNumberOfOccurrences({
//     a: "idiot",
//     b: "scumbag",
//   })
// );
