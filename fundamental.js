// Given an array of integers your solution should find the smallest integer.
// Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345

function findSmallestInt(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return null;
  }
  // Use the Math.min function to find the smallest integer in the array
  return Math.min(...arr);
}
// Test the function
console.log(findSmallestInt([34, 15, 88, 2])); // Output : 2
console.log(findSmallestInt([34, -345, -1, 100])); // Output : -345

// Explanation
// The function findSmallestInt takes an array of integers as an argument.
// It first checks if the array is empty. If it is, the function returns null.
// If the array is not empty, the function uses the spread operator to pass the array elements as
// separate arguments to the Math.min function, which returns the smallest integer in the array.

// solution 2
function findSmallestInt(arr) {
  // Check if the array is empty
  return Math.min(...arr);
}
// Test the function
console.log(findSmallestInt([34, 15, 88, 2])); // Output : 2
console.log(findSmallestInt([])); // Output : null

// Explanation
// The function findSmallestInt takes an array of integers as an argument.
// It uses the spread operator to pass the array elements as separate arguments to the Math.min function,
// which returns the smallest integer in the array. The function does not check if the array is empty
// because the Math.min function will return Infinity if the array is empty.

// solution 3
function findSmallestInt(arr) {
  // Check if the array is empty
  return Math.min.apply(null, ...arr);
}
// Test the function
console.log(findSmallestInt([34, 15, 88, 2])); // Output : 2
console.log(findSmallestInt([])); // Output : Infinity
// Explanation
// The function findSmallestInt takes an array of integers as an argument.
// It uses the apply method to pass the array elements as separate arguments to the Math.min function,
// which returns the smallest integer in the array. The function does not check if the array is empty
// because the Math.min function will return Infinity if the array is empty.

// solution 4
function findSmallestInt(arr) {
  return arr.sort((a, b) => a - b)[0];
}
// Test the function
console.log(findSmallestInt([34, 15, 88, 2])); // Output : 2
console.log(findSmallestInt([])); // Output : undefined

// Explanation
// The function findSmallestInt takes an array of integers as an argument.
// It sorts the array in ascending order using the sort method and the compare function (a, b
// => a - b). The function then returns the first element of the sorted array, which is
// the smallest integer in the array. If the array is empty, the function returns undefined.

console.log(findSmallestInt(["34", "15", "88", "2"])); 
// Explaination: The function will return the smallest string in the array, not the smallest integer. This is
// because the sort method sorts strings lexicographically, not numerically. To sort the array numer
// ically, you would need to convert the strings to numbers before sorting. Here is how you
// output is 
