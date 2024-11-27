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