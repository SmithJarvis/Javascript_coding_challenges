// FEB 04 2023

// QUESTION 1

// // Reverse a string: Write a function that takes in a string and returns the reversed version of that string. For example, "hello" should return "olleh".

// // SOLUTION
// function reverseString(word) {
//   let rev = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     rev += word[i];
//   }

//   return console.log(rev);
// }

// reverseString("hello");
// reverseString("word");
// reverseString("things");
// reverseString("world");
// reverseString("coding");

// QUESTION 2

// Caesar Cipher: Write a function that takes a string and a number (the "shift") as arguments and returns a new string with each letter shifted by the number of positions specified. For example, if the shift is 2, the letter "a" would become "c".

// // SOLUTION
// const encrypted = function (str, num) {
//   str = str.toLowerCase();
//   a_to_Z = "abcdefghijklmnopqrstuvwxyz";
//   cipher = "";

//   // Looping through the str input
//   for (let i = 0; i < str.length; i++) {
//     // if Char is not alphabet return empty
//     if (!a_to_Z.includes(str[i])) return;

//     // If encrpted char execeeds 26 subtract 26 and  refresh
//     if (a_to_Z.indexOf(str[i]) + num > a_to_Z.length) {
//       cipher += a_to_Z.charAt(a_to_Z.indexOf(str[i]) + num - 26);
//     }
//     cipher += a_to_Z.charAt(a_to_Z.indexOf(str[i]) + num);
//   }
//   return console.log(cipher);
// };

// encrypted("a", 2);
// encrypted("CAT", 3);
// encrypted("challenge", 5);
// encrypted("javas23cript", 10);
// encrypted("coding", 7);
// encrypted("javascript", 10);

//
//
//
//
//
// FEB 05 2023

// QUESTION 1

// Anagram checker: Write a function that takes two strings as arguments and returns true if they are anagrams (contain the same letters but in a different order), and false otherwise.

// // SOLUTION
// function anagramChecker(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (!str1.includes(str2[j])) return false;
//       else if (!str2.includes(str1[i])) return false;
//       else return true;
//     }
//   }
// }

// console.log(anagramChecker("coding", "ingcod"));
// console.log(anagramChecker("htmt", "rmlth"));
// console.log(anagramChecker("health", "health"));
// console.log(anagramChecker("script", "java"));
// console.log(anagramChecker("date", "teda"));
// console.log(anagramChecker("jarvis", "dot"));

// QUESTION 2

// FizzBuzz: Write a function that takes a number as an argument and returns "Fizz" if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both.

// // SOLUTION
// function fizzbizz(num) {
//   num = parseInt(num, 10);
//   if (num % 5 == 0 && num % 3 == 0) {
//     return "FizzBuzz";
//   } else if (num % 5 == 0) {
//     return "Buzz";
//   } else if (num % 3 == 0) {
//     return "Fizz";
//   } else return "No Fizz or Buzz or FizzBuzz";
// }

// console.log(fizzbizz(543));
// console.log(fizzbizz("1200"));
// console.log(fizzbizz(559));
// console.log(fizzbizz(100));
// console.log(fizzbizz("1212"));
// console.log(fizzbizz(90));
// console.log(fizzbizz("p"));

// QUESTION 3

// Palindrome checker: Write a function that takes a string as an argument and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

// // SOLUTION
// function palindromeChecker(str) {
//   str = str.toLowerCase();
//   if (str.split("").reverse().join("") != str) return false;
//   else return true;
// }

// console.log(palindromeChecker("hello"));
// console.log(palindromeChecker("bob"));
// console.log(palindromeChecker("Bob"));
// console.log(palindromeChecker("mum"));
// console.log(palindromeChecker("feb"));
// console.log(palindromeChecker("DAD"));

//
// QUESTION 4

// Two Sum: Write a function that takes an array of numbers and a target sum as arguments and returns the indices of the two numbers in the array that add up to the target sum.

// // SOLUTION
// function twoSum(nums, target) {
//   let index = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target && nums[i] != nums[j]) {
//         return [nums[i], nums[j]];
//       }
//     }
//   }
// }

// console.log(twoSum([1, 3, 7, 9, 10], 4));
// console.log(twoSum([5, 9, 11, 15], 20));
// console.log(twoSum([5, 23, 17, 4], 21));
// console.log(twoSum([1, 3, 23, 10], 13));
// console.log(twoSum([15, 23, 3, 45], 68));

//
//
// QUESTION 5

// Longest common prefix: Write a function that takes an array of strings as an argument and returns the longest common prefix among them.

// // SOLUTION
// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";
//   let prefix = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[0][i] !== strs[j][i]) return prefix;
//     }
//     prefix += strs[0][i];
//   }
//   return prefix;
// }

// console.log(longestCommonPrefix(["learn", "love", "list", "low", "lo"]));
// console.log(longestCommonPrefix(["java", "javascript", "just", "jarvis"]));
// console.log(longestCommonPrefix(["code", "coding", "codi"]));
// console.log(
//   longestCommonPrefix(["script", "scripting", "scrutch", "scrumble"])
// );

//
// FEB 07 2023

// QUESTION 1
// Array flattening: Write a function that takes an array of nested arrays as an argument and returns a flattened version of the array.

// function flattenArr(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       newArr.push(arr[i]);
//     } else {
//       newArr.push(...flattenArr(arr[i]));
//     }
//   }
//   return newArr;
// }
// flattenArr([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]);

//
// FEB 09 2023
//
//
// QUESTION 1
//
// // Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// // Examples
// // sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // // 7 contains the number seven.

// // sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // // None of the items contain 7 within them.

// // sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // // 97 contains the number seven.

// // SOLUTION
// function sevenBoom(arr) {
//   return arr.includes(7) ? "Boom!" : "There is no 7 in the array";
// }
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// console.log(sevenBoom([8, 6, 33, 100]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));

// QUESTION 2
//
//
//
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"
// whichIsLarger(() => 25,  () => 25) ➞ "neither"
// whichIsLarger(() => 505050, () => 5050) ➞ "f"

// // SOLUTION
// function whichIsLarger(f, g) {
//   f = f();
//   g = g();
//   if (f > g) {
//     return "f";
//   } else if (g > f) {
//     return "g";
//   } else {
//     return "neither";
//   }
// }
// console.log(whichIsLarger(() => 5, () => 10))
// console.log(whichIsLarger(() => 25,  () => 25) )
// console.log(whichIsLarger(() => 505050, () => 5050) )

// QUESTION 3
//
//
//
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// // SOLUTION
// function canNest(arr1, arr2) {
//   const min_arr1 = Math.min(...arr1);
//   const max_arr1 = Math.max(...arr1);
//   const min_arr2 = Math.min(...arr2);
//   const max_arr2 = Math.max(...arr2);

//   if (min_arr1 > min_arr2 && max_arr1 < max_arr2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log(canNest([3, 1], [4, 0]));
// console.log(canNest([9, 9, 8], [8, 9]));
// console.log(canNest([1, 2, 3, 4], [2, 3]));
