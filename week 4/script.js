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

// // SOLUTION
// function sortArray(arr) {
//   const n = arr.length;
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }

// console.log(sortArray([2, -5, 1, 4, 7, 8]));
// console.log(sortArray([23, 15, 34, 17, -28]));
// console.log(sortArray([38, 57, 45, 18, 47, 39]));
//
//
//
//
//
// FEB 25 2023
//
//
//
// QUESTION
// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

// Examples
// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
// Notes
// Each word in the phrase will be at least two characters long.

// // // SOLUTION
// function insertWhitespace(str) {
//   let outputStr = "";
//   for (const letter of str) {
//     if (letter === letter.toLowerCase()) outputStr += letter;
//     else outputStr += " " + letter;
//   }
//   return outputStr;
// }
// console.log(insertWhitespace("SheWalksToTheBeach"));
// console.log(insertWhitespace("MarvinTalksTooMuch"));
// console.log(insertWhitespace("TheGreatestUpsetInHistory"));

//
//
//
// QUESTION 2
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)
// Examples
// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

// Notes
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.

// // SOLUTION
// function findBrokenKeys(str1, str2) {
//   let broken = [];
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i] && !broken.includes(str1[i])) {
//       broken.push(str1[i]);
//     }
//   }
//   return broken;
// }

// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));
//
//
//
// QUESTION 3
// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

// Examples
// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]

// Notes
// Keep the same ordering in the output.

// // SOLUTION
// function returnUnique(arr) {
//   let output_arr = [];
//   for (const val of arr) {
//     let count = 0;
//     for (const val2 of arr) {
//       if (val === val2) {
//         count += 1;
//       }
//     }
//     if (count === 1) {
//       output_arr.push(val);
//     }
//   }
//   return output_arr;
// }

// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));
//
//
//
//
// 26 FEB 2023
//
//
//
// QUESTION 1
// Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

// Examples
// vowelLinks("a very large appliance") ➞ true

// vowelLinks("go to edabit") ➞ true

// vowelLinks("an open fire") ➞ false

// vowelLinks("a sudden applause") ➞ false

// Notes
// You can expect sentences in lowercase/uppercase.

// // SOLUTION
// function vowelLinks(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const str_arr = str.toLowerCase().split(" ");
//   for (let i = 0; i < str_arr.length - 1; i++) {
//     if (
//       vowels.includes(str_arr[i][str_arr[i].length - 1]) &&
//       vowels.includes(str_arr[i + 1][0])
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(vowelLinks("a very large appliance"));
// console.log(vowelLinks("go to edabit"));
// console.log(vowelLinks("an open fire"));
// console.log(vowelLinks("a sudden applause"));
//
//
//
// QUESTION 2
// You are given an input array of bigrams, and an array of words.

// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

// Examples
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" does not exist in any of the words.

// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
// Notes
// A bigram is string of two consecutive characters in the same word.
// If the array of words is empty, return false.

// // SOLUTION
// function canFind(bigrams, words) {
//   const sentence = words.join(" ");
//   for (const bigram of bigrams) {
//     if (!sentence.includes(bigram)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
// console.log(
//   canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])
// );
// console.log(
//   canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])
// );
// console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));
//
//
//
//
// QUESTION 3
// Write a function that takes an array of arrays and returns the value of all of the symbols in it, where each symbol adds or takes something from the total score. Symbol values:

// # = 5
// O = 3
// X = 1
// ! = -1
// !! = -3
// !!! = -5
// An array of arrays containing 2 #s, a O, and a !!! would equal (0 + 5 + 5 + 3 - 5) 8.

// If the final score is negative, return 0 (e.g. 3 #s, 3 !!s, 2 !!!s and a X would be (0 + 5 + 5 + 5 - 3 - 3 - 3 - 5 - 5 + 1) -3, so return 0.

// Examples
// checkScore([
//   ["#", "!"],
//   ["!!", "X"]
// ]) ➞ 2

// checkScore([
//   ["!!!", "O", "!"],
//   ["X", "#", "!!!"],
//   ["!!", "X", "O"]
// ]) ➞ 0

// checkScore([
//   ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
//   ["!!!", "!!!", "!!", "!!", "!", "!", "X", "!", "!!!", "O", "!", "!!!", "X", "#"],
//   ["#", "X", "#", "!!!", "!", "!!", "#", "#", "!!", "X", "!!", "!!!", "X", "O"],
//   ["!!", "X", "!!", "!!", "!!!", "#", "O", "O", "!!!", "#", "O", "O", "#", "!!"],
//   ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
//   ["!!", "!!!", "X", "!!!", "!!", "!!", "!!!", "X", "O", "!", "#", "!!", "!!", "!!!"],
//   ["!!", "!!", "#", "O", "!", "!!", "!", "!!!", "#", "O", "#", "!", "#", "!!"],
//   ["X", "X", "O", "X", "!!!", "#", "!!!", "!!!", "X", "X", "X", "!", "#", "!!"],
//   ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
//   ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
//   ["!", "!!", "!!", "O", "!!", "!!", "#", "#", "!", "!!!", "O", "!", "#", "#"],
//   ["!", "!!!", "!!", "X", "!!", "!!", "#", "!!!", "O", "!!", "!!!", "!", "!", "!"],
//   ["!!!", "!!!", "!!", "O", "!", "!", "!!!", "!!!", "!!", "!!", "X", "!", "#", "#"],
//   ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"]
// ]) ➞ 12
// Notes

// // SOLUTION
// function checkScore(str) {
//   let total = 0;
//   const objSymbol = {
//     "#": 5,
//     O: 3,
//     X: 1,
//     "!": -1,
//     "!!": -3,
//     "!!!": -5,
//   };
//   for (const symbol of str.flat(2)) {
//     total += objSymbol[symbol];
//   }
//   return total;
// }

// console.log(
//   checkScore([
//     ["#", "!"],
//     ["!!", "X"],
//   ])
// );
// console.log(
//   checkScore([
//     ["!!!", "O", "!"],
//     ["X", "#", "!!!"],
//     ["!!", "X", "O"],
//   ])
// );
// console.log(
//   checkScore([
//     ["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
//     [
//       "!!!",
//       "!!!",
//       "!!",
//       "!!",
//       "!",
//       "!",
//       "X",
//       "!",
//       "!!!",
//       "O",
//       "!",
//       "!!!",
//       "X",
//       "#",
//     ],
//     [
//       "#",
//       "X",
//       "#",
//       "!!!",
//       "!",
//       "!!",
//       "#",
//       "#",
//       "!!",
//       "X",
//       "!!",
//       "!!!",
//       "X",
//       "O",
//     ],
//     [
//       "!!",
//       "X",
//       "!!",
//       "!!",
//       "!!!",
//       "#",
//       "O",
//       "O",
//       "!!!",
//       "#",
//       "O",
//       "O",
//       "#",
//       "!!",
//     ],
//     ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
//     [
//       "!!",
//       "!!!",
//       "X",
//       "!!!",
//       "!!",
//       "!!",
//       "!!!",
//       "X",
//       "O",
//       "!",
//       "#",
//       "!!",
//       "!!",
//       "!!!",
//     ],
//     [
//       "!!",
//       "!!",
//       "#",
//       "O",
//       "!",
//       "!!",
//       "!",
//       "!!!",
//       "#",
//       "O",
//       "#",
//       "!",
//       "#",
//       "!!",
//     ],
//     [
//       "X",
//       "X",
//       "O",
//       "X",
//       "!!!",
//       "#",
//       "!!!",
//       "!!!",
//       "X",
//       "X",
//       "X",
//       "!",
//       "#",
//       "!!",
//     ],
//     ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
//     ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
//     [
//       "!",
//       "!!",
//       "!!",
//       "O",
//       "!!",
//       "!!",
//       "#",
//       "#",
//       "!",
//       "!!!",
//       "O",
//       "!",
//       "#",
//       "#",
//     ],
//     [
//       "!",
//       "!!!",
//       "!!",
//       "X",
//       "!!",
//       "!!",
//       "#",
//       "!!!",
//       "O",
//       "!!",
//       "!!!",
//       "!",
//       "!",
//       "!",
//     ],
//     [
//       "!!!",
//       "!!!",
//       "!!",
//       "O",
//       "!",
//       "!",
//       "!!!",
//       "!!!",
//       "!!",
//       "!!",
//       "X",
//       "!",
//       "#",
//       "#",
//     ],
//     ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"],
//   ])
// );
//
//
//
//
// FEB 27 2023
//
//
// QUESTION 1
// Create a function which replaces all the x's in the string in the following ways:

// Replace all x's with "cks" UNLESS:

// The word begins with "x", therefore replace it with "z".
// The word is just the letter "x", therefore replace it with "ecks".
// Examples
// xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"

// xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"

// xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"
// Notes
// All x's are lowercase.
// I know that not all words with x's follow this rule, but there are too many edge cases to count!

// // SOLUTION
// function xPronounce(str) {
//   let newStr = "";
//   for (const word of str.split(" ")) {
//     if (word[0] === "x" && word.length === 1) {
//       newStr += word.replace("x", "ecks") + " ";
//     } else if (word[0] === "x") {
//       newStr += word.replace("x", "z");
//     } else if (word.includes("x")) {
//       newStr += word.replace("x", "cks") + " ";
//     } else {
//       newStr += word + " ";
//     }
//   }
//   return newStr;
// }

// console.log(xPronounce("Inside the box was a xylophone"));
// console.log(xPronounce("The x ray is excellent"));
// console.log(xPronounce("OMG x box unboxing video x D"));

//
//
//
// QUESTION 2
// Create a RegExp myRegExp to test if a string is a valid pin or not.

// A valid pin has:

// Exactly 4 or 6 characters.
// Only numerical characters (0-9).
// No whitespace.

// Examples
// myRegExp.test("1234") ➞ true

// myRegExp.test("45135") ➞ false

// myRegExp.test("89abc1") ➞ false

// myRegExp.test("900876") ➞ true

// myRegExp.test(" 4983") ➞ false

// Notes
// Empty strings should return false when tested.

// // SOLUTION
// const myRegExp = new RegExp("^(\\d{4}|\\d{6})$");

// console.log(myRegExp.test("1234"));
// console.log(myRegExp.test("45135"));
// console.log(myRegExp.test("89abc1"));
// console.log(myRegExp.test("900876"));
// console.log(myRegExp.test(" 4983"));

//
//
//
// QUESTION 3
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

// // SOLUTION
// function commonElements(arr1, arr2) {
//   let output_arr = [];
//   for (const value of arr1) {
//     if (arr2.includes(value) && !output_arr.includes(value)) {
//       output_arr.push(value);
//     }
//   }
//   return output_arr;
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));
//
//
//
//
// FEB 28 2023
//
// QUESTION 1
// // Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// Examples
// chosenWine([
//   { name: "Wine A", price: 8.99 },
//   { name: "Wine 32", price: 13.99 },
//   { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null

// // SOLUTION
// function chosenWine(wines) {
//   if (wines.length === 0) {
//     return null;
//   } else if (wines.length === 1) {
//     return wines[0].name;
//   } else {
//     wines.sort((a, b) => a.price - b.price);

//     return wines[1].name;
//   }
// }

// console.log(
//   chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine 32", price: 13.99 },
//     { name: "Wine 9", price: 10.99 },
//   ])
// );
// console.log(chosenWine([{ name: "Wine A", price: 8.99 }]));
// console.log(chosenWine([]));
//
//
//
// QUESTION 2
// Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

// Examples
// primeInRange(10, 15) ➞ true
// // Prime numbers in range: 11, 13

// primeInRange(62, 66) ➞ false
// // No prime numbers in range.

// primeInRange(3, 5) ➞ true
// // Prime numbers in range: 3, 5

// Notes
// n2 is always greater than n1.

// // SOLUTION
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function primeInRange(n1, n2) {
//   for (let i = n1; i <= n2; i++) {
//     if (isPrime(i)) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(primeInRange(10, 15));
// console.log(primeInRange(62, 66));
// console.log(primeInRange(3, 5));

//
//
//
// QUESTION 3
// Given a date, return how many days date is away from 2021 (end date not included). date will be in mm/dd/yyyy format.

// Examples
// daysUntil2021("12/28/2020") ➞ "3 days"

// daysUntil2021("1/1/2020") ➞ "366 days"

// daysUntil2021("2/28/2020") ➞ "308 days"
// Notes
// All given dates will be in the year 2020.

// // SOLUTION
// function daysUntil2021(date) {
//   const date1 = new Date(date);
//   const date2 = new Date("1/1/2021")

//   diff = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));

//   console.log(`${diff} days`);
// }

// console.log(daysUntil2021("12/28/2020"));
// console.log(daysUntil2021("1/1/2020"));
// console.log(daysUntil2021("2/28/2020"));

//
//
//
//
//
// MAR 01 2023
//
//
// QUESTION 1
//Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
// Examples
// allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

// // SOLUTION
// function allAboutStrings(str) {
//   const length = str.length;
//   const firstChar = str[0];
//   const lastChar = str[length - 1];
//   const middleChars =
//     length % 2 === 0
//       ? str.slice(length / 2 - 1, length / 2 + 1)
//       : str[Math.floor(length / 2)];
//   const secondChar = str[1];
//   const secondCharIndex = str.indexOf(secondChar, 2);
//   const secondCharIndexStr =
//     secondCharIndex !== -1 ? `@ index ${secondCharIndex}` : "not found";

//   return [length, firstChar, lastChar, middleChars, secondCharIndexStr];
// }

// console.log(allAboutStrings("LASA"));
// console.log(allAboutStrings("Computer"));
// console.log(allAboutStrings("Science"));

//
//
//
// QUESTION 2
// Write a function that takes a positive integer num and calculates how many dots exist in a pentagonal shape around the center dot on the Nth iteration.

// In the image below you can see the first iteration is only a single dot. On the second, there are 6 dots. On the third, there are 16 dots, and on the fourth there are 31 dots.

// alt text

// Return the number of dots that exist in the whole pentagon on the Nth iteration.

// Examples
// pentagonal(1) ➞ 1

// pentagonal(2) ➞ 6

// pentagonal(3) ➞ 16

// pentagonal(8) ➞ 141

// // SOLUTION
// function pentagonal(num) {
//   return (5 * num * num - 5 * num + 2) / 2;
// }

// console.log(pentagonal(1));
// console.log(pentagonal(2));
// console.log(pentagonal(3));
// console.log(pentagonal(8));

//
//
//
//
// QUESTION 3
// // Create a function that converts Celsius to Fahrenheit and vice versa.

// Examples
// convert("35°C") ➞ "95°F"

// convert("19°F") ➞ "-7°C"

// convert("33") ➞ "Error"
// Notes
// Round to the nearest integer.
// If the input is incorrect, return "Error".

// // SOLUTION
// function convert(deg) {
//   if (!deg.includes("°")) return "Error";
//   const splitdegree = deg.split("°");
//   let num = Number(splitdegree[0]);

//   return splitdegree[1] === "C"
//     ? `${Math.floor(num * 9) / 5 + 32}°F`
//     : `${Math.ceil(((num - 32) * 5) / 9)}°C`;
// }

// console.log(convert("35°C"));
// console.log(convert("19°F"));
// console.log(convert("33"));
//
//
//
//
//
// MAR 02 2023
//
//
// QUESTION 1
// In this challenge, you are given an array and in turn, you must obtain a smaller array, following three steps:

// Split the array into two parts of equal length. If the given array has an odd length, then you have to eliminate the number in the middle of the array for obtaining two equal parts.
// Sum each number of the first part with each number of the reversed second part, obtaining a new single array having the same length of the previous two.
// Divide by two each number in the final array.
// Given an array of integers arr, implement a function that returns a new array applying the above algorithm.

// Examples
// antipodesAverage([1, 2, 3, 4]) ➞ [2.5, 2.5]
// // Left part = [1, 2]
// // Reversed right part = [4, 3]
// // Array resulting from the sum of each pair = [5, 5]
// // Each number is divided by two = [2.5, 2.5]

// antipodesAverage([1, 2, 3, 4, 5]) ➞ [3, 3]
// // The length of array is odd, number 3 (in the middle) is eliminated
// // Left = [1, 2]
// // Reversed right = [5, 4]
// // Sum = [6, 6]
// // Division by two = [3, 3]

// antipodesAverage([-1, -2]) ➞ [-1.5]
// //  (-1 + -2) / 2 = [-1.5]

// Notes
// Every given arr will contain at least two numbers.
// Into the given arr, numbers will always be whole (either positives or negatives), but the numbers into the returned final array can also be a float (either positives or negatives, see the examples #1 and #3).
// You can do three separated steps, or thinking about how the algorithm can be synthesized for obtaining the result.

// // SOLUTION
// function antipodesAverage(arr) {
//   const length = arr.length;
//   const midpoint = Math.floor(length / 2);

//   // Split the array into two parts of equal length
//   const left = arr.slice(0, midpoint);
//   const right = arr.slice(midpoint + (length % 2 === 0 ? 0 : 1)).reverse();

//   // Sum each number of the first part with each number of the reversed second part
//   const sum = left.map((num, i) => num + right[i]);

//   // Divide by two each number in the final array
//   const result = sum.map((num) => num / 2);

//   return result;
// }

// console.log(antipodesAverage([1, 2, 3, 4]));
// console.log(antipodesAverage([1, 2, 3, 4, 5]));
// console.log(antipodesAverage([-1, -2]));
//
//
//
//
// QUESTION 2
// Create a function to partition an array from left to right.

// Examples
// movingPartition([-1, -1, -1, -1])
// ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

// movingPartition([1, 2, 3, 4, 5])
// ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

// movingPartition([]) ➞ []
// Notes
// With an n input, your output should be an array containing n-1 subarrays. Each subarray should have two elements: the left and the right side of the partition (both should be non-empty, unless the input array is empty).
// An empty array should return an empty array: []

// SOLUTION

// function movingPartition(arr) {
//   let output = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     first_arr = arr.slice(0, i + 1);
//     second_arr = arr.slice(i + 1);
//     output.push(first_arr, second_arr);
//   }
//   return output;
// }
//
// console.log(movingPartition([-1, -1, -1, -1]));
// console.log(movingPartition([1, 2, 3, 4, 5]));
// console.log(movingPartition([]));
//
//
//
// QUESTION 3
//
// SOLUTION
