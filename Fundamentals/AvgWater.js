/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
 */

function litres(time) {
  return Math.floor(time * 0.5);
}

// test the code
console.log(litres(3)); // expected output: 1
console.log(litres(6.7)); // expected output: 3

// Explanation
// The function litres takes one argument, time, which is the number of hours Nathan will be cycling
// The function returns the number of litres Nathan will drink, which is calculated by multiplying time by
// 0.5 and then rounding down to the nearest whole number using Math.floor

// time and space complexity of code
// time complexity: O(1) because the function performs a constant number of operations regardless of the
// input size
// space complexity: O(1) because the function uses a constant amount of space to store the
// result and the input variable

// Explain about the time complexity and space complexity of any code
// Time complexity is a measure of how long an algorithm takes to complete as a function of the size
// of the input. It is usually expressed as a function of the input size, often using Big
// notation (e.g. O(n), O(n^2), etc.).
// Space complexity is a measure of how much memory an algorithm uses as a function of the size of
// the input. It is also usually expressed as a function of the input size, often using Big
// notation (e.g. O(n), O(n^2), etc.).
