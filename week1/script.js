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

const encrypted = function (str, num) {
  str = str.toLowerCase();
  a_to_Z = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
};

encrypted("a", 2);
// encrypted("CAT", 3);
// encrypted("challenge", 5);
// encrypted("coding", 7);
// encrypted("javascript", 10);
