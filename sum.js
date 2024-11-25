/*
Write a function that takes an array of numbers and returns the sum of the numbers.
The numbers can be negative or non-integer. 
If the array does not contain any numbers then you should return 0.
*/

function sum_numbers(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0;
  }
  // Use the reduce method to sum up all the numbers in the array
  return arr.reduce((a, b) => a + b, 0);
}

// test
console.log(sum_numbers([1, 5.2, 4, 0, -1])); // 9.2

// Exlanation
// The function sum_numbers takes an array of numbers as an argument.
// It first checks if the array is empty. If it is, it returns 0.
// If the array is not empty, it uses the reduce method to sum up all the numbers in
// the array. The reduce method takes a callback function as an argument. This callback
// function takes two arguments: the accumulator (a) and the current element (b). It
// returns the sum of the accumulator and the current element. The initial value of
// the accumulator is 0. The reduce method returns the final value of the accumulator
// which is the sum of all the numbers in the array.

// write a dry run of the code
// sum_numbers([1, 5.2, 4, 0, -1])
// 1. Check if the array is empty: no, so return the sum of the numbers
// 2. Use the reduce method to sum up all the numbers in the array
// 2.1. The initial value of the accumulator is 0
// 2.2. The first element of the array is 1, so the accumulator is
// 2.3. The second element of the array is 5.2, so the
// accumulator is 6.2
// 2.4. The third element of the array is 4, so the accumulator is
// 10.2
// 2.5. The fourth element of the array is 0, so the accumulator is
// 10.2
// 2.6. The fifth element of the array is -1, so the accumulator is
// 9.2

// solution 2: using a for loop
function sum_numbers(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0;
  }
  // Initialize a variable to store the sum
  let sum = 0;
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the sum
    sum += arr[i];
  }
  // Return the sum
  return sum;
}

// Explanation 
// The function sum_numbers takes an array of numbers as an argument.
// It first checks if the array is empty. If it is, it returns 0.
// If the array is not empty, it initializes a variable sum to 0.
// It then loops through the array using a for loop. In each iteration, it adds the current
// element to the sum.
// Finally, it returns the sum.

// write a dry run of the code
// sum_numbers([1, 5.2, 4, 0, -1])
// 1. Check if the array is empty: no, so initialize sum to 0
// 2. Loop through the array
// 2.1. The first element of the array is 1, so add 1
// 2.2. The second element of the array is 5.2, so add
// 2.3. The third element of the array is 4, so add 4
// 2.4. The fourth element of the array is 0, so add 0
// 2.5. The fifth element of the array is -1, so add -1
// 3. Return the sum: 9.2

// Explain about loop control statements and how they are used in the code
// The code uses a for loop to iterate through the array. The loop control statements used are
// 1. for loop: used to iterate through the array
// 2. if statement: used to check if the array is empty
// 3. += operator: used to add the current element to the sum

// Explain about the time and space complexity of the code
// The time complexity of the code is O(n), where n is the number of elements in the
// array. This is because the code uses a for loop to iterate through the array, and the
// number of iterations is proportional to the number of elements in the array.
// The space complexity of the code is O(1), which means the space required does not grow
// with the size of the input array. This is because the code only uses a constant amount of
// space to store the sum.
