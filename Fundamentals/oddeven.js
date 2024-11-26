/**
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

const oddoreven = (num) => (num % 2 === 0 ? "even" : "odd");

const evnorodd = (number =
  number.toString(2).slice(-1) === "0" ? "Even" : "Odd");

// Explanation
// The function takes an integer as an argument and returns a string indicating whether the number is even or
// the fun is using tostring method to convert the number to binary and then check the last digit of the binary number
// if it is 0 then the number is even otherwise it is odd.
// the slice method is used to get the last digit of the binary number.

// example usage let give a number 5
// number.tostring(2) is convert 5 to binary which is 101, the tostring method is taking 2 as a base and the slice(-1) is getting the last digit of the binary number which is 1

/**
 * Write a function that takes an array of words and smashes them together into a 
 * sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation,
 *  but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning 
 * or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # returns "hello world this is great"
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you do get an array.

What We're Testing
We're testing basic loops and string manipulation.
This is for beginners who are just learning loops and string manipulation.

Disclaimer
This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.
 */

const smash = (words) => (words === [] ? "" : words.join(" "));
console.log("text", smash([]));
console.log("text", smash(["hello", "world"]));

// solution 2 using loops
const smash2 = (words) => {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }
  return sentence.trim();
};
console.log("text", smash2([]));

// dry run the code

// 1. declaring a variable called sentence and assigned empty string.
// 2. using for loop to iterate over the array of words
// 2.1 initialized i variable and assigned 0.
// 2.2 check if i is less than the length of the array of words
// 2.3 if it is true i is increasing by 1.
// 2.4 if it is true, add the word at the index i to the sentence and
// 2.5 add a space to the sentence
// 3. after the loop, return the sentence and remove the last space using trim method.
// 4. trim method removes the spaces both sides of a string.    
// 5. using a regular expression to remove the spaces at the beginning and the end of the string.


// Regular expression for removing the white space at the beginning and the end of the string
// ^ matches the start of the string
// $ matches the end of the string
// \s+ matches one or more white spaces
// g flag is used to find all matches in the string, not just the first one.
// 1. ^\s+ matches the white space at the beginning of the string
// 2. \s+$ matches the white space at the end of the string
// 3. \s+ matches one or more white spaces in the middle of the string
// example : "   hello   world   "