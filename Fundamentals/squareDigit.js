/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
 */

const squareDigit = (num) => {
  let result = "";
  let strNum = num.toString();
  for (let i = 0; i < strNum.length; i++) {
    let digit = parseInt(strNum[i]);
    let square = digit * digit;
    result += square.toString();
  }
  return parseInt(result);
};

console.log(squareDigit(9119)); // 811181

// Explanation 
// result variable is declared for storing the result of the function.
// strNum variable is declared for converting the number into string.
// for loop is used for iterating over each character in the string.
// parseInt() function is used for converting the character into integer.
// digit * digit is used for squaring the digit.
// result += square.toString() is used for concatenating the squared digit to the result.
// parseInt(result) is used for converting the result back into integer.
// console.log() is used for printing the result. 9119 is resulting into 811181.


