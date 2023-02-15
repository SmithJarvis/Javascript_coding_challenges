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

//
//
//
//
//
// FEB 12 2023
//
// QUESTION 1
// Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. The second argument of the function represents the character to be used for the bar.

// histogram(arr, char) ➞ str
// Examples
// histogram([1, 3, 4], "#") ➞ "#\n###\n####"

// #
// ###
// ####

// histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

// ======
// ==
// ===============
// ===

// histogram([1, 10], "+") ➞ "+\n++++++++++"

// +
// ++++++++++
// //
// //  SOLUTION
// function histogram(arr, char) {
//   let output = "";
//   //   Outer loop for say values 1, 3, 4 according to example 1
//   for (let arr1 of arr) {
//     // Inner loop for printing individual " char "
//     for (let i = 1; i <= arr1; i++) {
//       output += char;
//     }
//     output += "\n";
//   }
//   return `${output}`;
// }

// console.log(histogram([1, 3, 4], "#"));
// console.log(histogram([6, 2, 15, 3], "="));
// console.log(histogram([1, 10], "+"));

//
//
//  QUESTION 2
// If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.
//
// Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.

// Examples
// aveSpd(18, 20, 60) ➞ 30
// aveSpd(30, 10, 30) ➞ 15
// aveSpd(30, 8, 24) ➞ 12

// // SOLUTION
// function aveSpd(uptime, uprate, downrate) {
//   const distance = uprate * (uptime / 60);
//   const downtime = distance / downrate;
//   const aveSpd = (distance * 2) / (downtime + uptime / 60);

//   return aveSpd;
// }

// console.log(aveSpd(18, 20, 60));
// console.log(aveSpd(30, 10, 30));
// console.log(aveSpd(30, 8, 24));

//
//
// // QUESTION 3
// Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.

// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3

// product(10,2)(5,0)(2,3) ➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// product(1,2)(2,3)(3,4) ➞ 30
// // 1 * 2 * 3 + 2 * 3 * 4

// product(1,2)(0,3)(3,0) ➞ 0
// // 1 * 0 * 3 + 2 * 3 * 0

// // SOLUTION
// function product(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       return a * c * e + b * d * f;
//     };
//   };
// }
// console.log(product(1, 2)(1, 1)(2, 3));
// console.log(product(10, 2)(5, 0)(2, 3));
// console.log(product(1, 2)(2, 3)(3, 4));
// console.log(product(1, 2)(0, 3)(3, 0));

//
//
//
//
// FEB 13 2023
//
// QUESTION 1
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]
//
// // SOLUTION
// function numInStr(arr) {
//   const newArr = [];
//   for (const array of arr) {
//     if (array.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) {
//       newArr.push(array);
//     }
//   }
//   return newArr;
// }

// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]));

//
//
//
// QUESTION 2
// Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

// Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

// fibSeq(4) ➞ [0, 1, 1, 2]
// fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]
// fibSeq(0) ➞ []

// Notes
// If 0 is given, return an empty array.
// If no argument is given, return undefined.
// The input will never be a negative integer.
//
// // SOLUTION
// function fibSeq(n) {
//   if (n === 0) return [];
//   if (!n) return;

//   let fib = [0, 1];

//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibSeq(4));
// console.log(fibSeq(7));
// console.log(fibSeq(-7));
// console.log(fibSeq(0));
// console.log(fibSeq());

//
//
//
// QUESTION 3
// Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.

// Examples
// combinations(2, 3) ➞ 6

// combinations(3, 7, 4) ➞ 84

// combinations(2, 3, 4, 5) ➞ 120

// // SOLUTION
// function combinations() {
//   let s = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     s *= arguments[i];
//   }
//   return s;
// }

// console.log(combinations(2, 3));
// console.log(combinations(3, 7, 4));
// console.log(combinations(2, 3, 4, 5));

//
//
//
//
// FEB 14 2023
//
//
// QUESTION 1
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Examples
// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

// textToNumberBinary("zero one zero one zero one zero three") ➞ ""

// textToNumberBinary("one one") ➞ ""

// // SOLUTION
// function textToNumberBinary(str) {
//   let outputString = "";
//   for (const word of str.split(" ")) {
//     if (word.toLowerCase() === "zero") outputString += "0";
//     else if (word.toLowerCase() === "one") outputString += "1";
//   }
//   if (outputString.length < 8) return '""';
//   return outputString.slice(0, 8);
// }

// console.log(textToNumberBinary("zero one zero one zero one zero one"));
// console.log(textToNumberBinary("Zero one zero ONE zero one zero one"));
// console.log(textToNumberBinary("zero one zero one zero one zero one one two"));
// console.log(textToNumberBinary("zero one zero one zero one zero three"));
// console.log(textToNumberBinary("one one"));

//
//
//
// QUESTION 2
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false
// // SOLUTION
// function isPositiveDominant(arr) {
//   // To only remain with unique values
//   arr = new Set(arr);
//   let positive = 0;
//   let negative = 0;
//   for (const value of arr) {
//     if (value > 0) positive += 1;
//     if (value < 0) negative += 1;
//   }
//   if (positive > negative) return true;
//   return false;
// }
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));
// console.log(isPositiveDominant([5, 0]));
// console.log(isPositiveDominant([0, -4, -1]));

//
//
//
// QUESTION 3
// // Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples;
// 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

// // SOLUTION
// function getTotalPrice(groceries) {
//   let total = 0;
//   for (const item of groceries) {
//     total += item["price"] * item["quantity"];
//   }
//   return console.log(total);
// }

// getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]);

// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Cereals", quantity: 1, price: 2.5 },
// ]);

// getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]);

// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.5 },
//   { product: "Eggs", quantity: 12, price: 0.1 },
//   { product: "Bread", quantity: 2, price: 1.6 },
//   { product: "Cheese", quantity: 1, price: 4.5 },
// ]);

// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.1 },
//   { product: "Lollipop", quantity: 1, price: 0.2 },
// ]);

//
//
//
//
//
// FEB 15 2023
//
//
//
// QUESTION 1
// Create a function that takes a number n as an argument and checks whether the given number can be expressed as a sum of two or more consecutive positive numbers.

// Examples
// consecutiveSum(9) ➞ true
// // 9 can be expressed as a sum of (2 + 3 + 4) or (4 + 5).

// consecutiveSum(10) ➞ true
// // 10 can be expressed as a sum of 1 + 2 + 3 + 4.

// consecutiveSum(64) ➞ false

// // SOLUTION
// function consecutiveSum(n) {
//   let start = 1;
//   while (start < n / 2) {
//     let sum = start;
//     let current = start + 1;
//     while (sum < n) {
//       sum += current;
//       if (sum === n) {
//         return console.log(true);
//       }
//       current++;
//     }
//     start++;
//   }
//   return console.log(false);
// }

// consecutiveSum(9);
// consecutiveSum(10);
// consecutiveSum(64);

//
//
// QUESTION 2
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]

// HTML elements are everything from the start tag to the end tag. An example of one div element would be: <div>edabit</div>.

// Find out how many <div> elements are used in a string. Use the character class \W in your expression.

// Example
// const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
// // 2 times

// const str = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
// // 2 times

// const str = "<div></div>"
// // 1 time

// // SOLUTION
// const REGEXP = /<div>\W*<\/div>/g;
// const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>";
// const matches = str.match(/<div>\W*<\/div>/g);

//
//
//
// QUESTION 3
// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

// SOLUTION
function reverseOdd(str) {
  let reverseStr = "";
  for (const word of str.split(" ")) {
    if (word.length % 2 == 1) {
      reverseStr += word.split("").reverse().join("") + " ";
    } else reverseStr += word + " ";
  }
  return console.log(reverseStr);
}
reverseOdd("Bananas");
reverseOdd("One two three four");
reverseOdd("Make sure uoy only esrever sdrow of ddo length");
