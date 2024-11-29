/**
 * Given a non-negative integer, 3 for example, return a string with a murmur:
 * "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

function sheepCount(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i + " sheep...";
  }
  return result.slice(0, -3);
}
console.log(sheepCount(3)); // "1 sheep...2 sheep...3 sheep

// Explanation
// initialized a variable called result for storing final output.
// using for loop intialized variable called i looping from 1 to n.
// inside the loop we are adding i and " sheep..." to the result variable.
// 1. first loop i = 1, result = "1 sheep...".
// 2. second loop i = 2, result = "1 sheep...2 sheep...".
// 3. third loop i = 3, result = "1 sheep...2 sheep...3 sheep...
// 4. after the loop we are using slice method to remove the last three characters from the result variable.

// slice() method usage with examples.
// slice() method returns a shallow copy of a portion of an array into a new array object selected
// from start up to but not including end (end can be negative). If start equals end,
// an empty array is returned. If start is negative lookback from the end of the array.
// If end is negative lookback from the end of the array. If both start and end are
// negative lookback from the end of the array. If start is greater than end, an empty
// array is returned.

// Examples of slice() method usage.
// const students = ["John", "Mary", "David", "Emma"];
// console.log(students.slice(1, 3)); // ["Mary", "David"]
// console.log(students.slice(2)); // ["David", "Emma"]
// console.log(students.slice(-2)); // ["David", "Emma"]
// console.log(students.slice(1, -1)); // ["Mary", "David"]
// console.log(students.slice(-1)); // ["Emma"]
// console.log(students.slice(1,1)); // []
// console.log(students.slice(-2,-2)) // []
// console.log(students.slice(10, 1)); // []