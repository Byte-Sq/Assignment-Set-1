// sudo code for question number 4
//1. create a function named firstPalindrome that takes a parameter: words
//2. From the words array, find the first word that is a palindrome.
//3. if there is no palindrome in the array, return null.
//4. if there is a palindrome, return the word.

let words = ["kayak", "noon", "hi", "hello", "madam"];
function firstPalindrome(words) {
  let palindrome = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
      palindrome.push(word);
      console.log(`${palindrome[0]} is a palindrome`);
      break;
    } else {
      console.log(`${word} is not a palindrome`);
    }
  }
  return;
}
firstPalindrome(words);
