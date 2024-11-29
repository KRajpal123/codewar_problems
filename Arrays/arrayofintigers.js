/**
 * Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

const countPositivesSumNegatives = (arr) => {
  if (!arr) return [];
  const positives = arr.filter((num) => num > 0).length;
  const negatives = arr
    .filter((num) => num < 0)
    .reduce((acc, num) => acc + num, 0);
  return [positives, negatives];
};
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10,-65]
console.log(countPositivesSumNegatives([])); // []
console.log(countPositivesSumNegatives(null)); // []

// filter method is used to create a new array with all elements that pass the test implemented by the provided function. In this
// case, the test is to check if the number is greater than 0. The length property
// is used to get the number of elements in the array. The reduce method is used to add
// up all the negative numbers in the array. The initial value of the accumulator is 0.


/**
 * Complete the square sum function so that it squares each number passed into it 
 * and then sums the results together.
For example, for [1, 2, 2] it should return 9 
 */

// solution 1
const squareSum = (arr) => {
  return arr.reduce((acc, num) => acc + num ** 2, 0);
  };
  console.log(squareSum([1, 2, 2])); // 9

  // solution 2
  function sumofsquare (arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i]**2;
      }
      return sum;
  }

  // solution 3
  function squareAndSum (arr){
    let square = arr.map((num) => num * num);
    return square.reduce((acc, num) => acc + num, 0);
  }

  // soultion 4

  function sumSquare(arr){
    let sumSquare = arr.map((num) => Math.pow(num)).reduce((acc,cur) => acc + cur,0);
    return sumSquare;
  }

  // Explain the difference approaches their time complexity and space complexity
  // Time complexity: O(n) for all solutions because they all iterate over the array once.
  // Space complexity: O(n) for solution 1 and solution 3 because they both create
  // a new array with the squared numbers. Solution 2 has a space complexity of O(
  // 1) because it only uses a single variable to store the sum. Solution 4
  // has a space complexity of O(n) because it uses the map method to create a new
  // array with the squared numbers.
  // Solution 1 is the most efficient in terms of space complexity because it only
  // uses a single variable to store the accumulator. Solution 3 is the most efficient
  // in terms of time complexity because it uses the map method to create a new array
  // with the squared numbers, which is faster than the for loop in solution 2. Solution
  // 4 is the least efficient in terms of time complexity because it uses the pow method
  // to square each number, which is slower than the exponentiation operator in solution 1 and
  // solution 3.