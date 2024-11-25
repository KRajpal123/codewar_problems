/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

function better_than_average(class_points, your_points) {
  let sum = class_points.reduce((a, b) => a + b, 0);
  let average = sum / class_points.length;
  return your_points > average;
}
// Test the function
console.log(better_than_average([2, 3, 4, 5], 3));
// Output: false
console.log(better_than_average([2, 3], 5));
// Output: true

// Explanation
// The function takes two parameters: an array of class points and your points.
// It calculates the sum of all class points using the reduce method.
// Then it calculates the average by dividing the sum by the number of class points.
// Finally, it compares your points with the average and returns true if you're better, else false

// Dry run the function
// Input: [2, 3, 4, 5], 3
// Sum: 2 + 3 + 4 + 5 = 14
// Average: 14 / 4 = 3.5
// Output: false

// solution 2
function better_than_average(class_points, your_points) {
  for (let i = 0; i <= class_points.length; i++) {
    if (your_points > class_points[i]) {
      return true;
    }
  }
  return false;
}
// Test the function
console.log(better_than_average([2, 3, 4, 5], 3));
console.log(better_than_average([29, 55, 74, 60, 11, 90, 67, 28], 21)); // should return False

// better_than_average([41, 75, 72, 56, 80, 82, 81, 33], 50);
// explaination 


// Explanation
// The function takes two parameters: an array of class points and your points.
// It loops through the class points array and checks if your points are greater than the current point.
// If your points are greater, it returns true, indicating you're better than the average
// If it loops through the entire array without finding a point where your points are greater, it returns
// false, indicating you're not better than the average.

// Dry run the function
// Input: [2, 3, 4, 5], 3
// Loop through the array: 2, 3, 4, 5
// Since 3 is not greater than any of the points, return false


// problem using var keyword
function better_than_average(class_points, your_points) {
    for (var i = 0; i <= class_points.length; i++) {
      if (your_points > class_points[i]) {
        return true;
      }
    }
    return false;
  }
  // Test the function
  console.log(better_than_average([2, 3, 4, 5],3));
  // Explanation if we use var keyword then the loop will not work as expected because var i is declared in the global;
  // so when we do i <= class_points.length then it will be true and the loop will
  // run one extra time and it will throw an error because class_points[i] will be undefined
  // so we should use let keyword instead of var keyword to declare the variable i.

  // Explain how let and var keyword work in JavaScript
  // var keyword is function scoped, it means that the variable declared with var keyword is accessible in
  // the entire function, not just in the block where it is declared.
  // let keyword is block scoped, it means that the variable declared with let keyword is accessible only
  // in the block where it is declared.
  // In the case of the loop, the block is the loop itself, so the variable i
  // declared with let keyword is accessible only in the loop, not in the entire function.
  // So, if we use let keyword to declare the variable i, then the loop will work
  // as expected and it will not throw an error.

  //Explain the code differentiating the var and let in above code.
  // var i = 0; // declare and initialize the variable i with var keyword
  // let i = 0; // declare and initialize the variable i with let keyword
  // for (var i = 0; i <= class_points.length; i++) {
  //   console.log(i); // output: 0, 1, 2,
  //   console.log(class_points[i]); // output: 2, 3, 4
  // }
  // for (let i = 0; i <= class_points.length; i++) {
  //   console.log(i); // output: 0, 1, 2,
  //   console.log(class_points[i]); // output: 2, 3, 4
  // }
  // The code will run without any errors if we use let keyword to declare the variable i.
  // But if we use var keyword to declare the variable i, then the code will throw an
  // error because class_points[i] will be undefined when i is equal to class_points.length.
  // So, we should use let keyword instead of var keyword to declare the variable i.
  // The final answer is: false
  // The final answer is: false.

  // Why it is not working with var keyword? 
  // The reason is that var keyword is function scoped, it means that the variable declared with var
  // keyword is accessible in the entire function, not just in the block where it is declared.
  // So, when we do i <= class_points.length, it will be true and the loop
  // will run one extra time and it will throw an error because class_points[i] will be
  // undefined.
  // So, we should use let keyword instead of var keyword to declare the variable i.

  // How it is working in the js engine ?
  // The JavaScript engine will execute the code line by line
  // When we do var i = 0, it will declare and initialize the variable i with
  // the value 0.
  // When we do for (var i = 0; i <= class_points.length; i
  // it will execute the loop and it will run one extra time because i <= class_points.length
  // will be true
  // When we do console.log(class_points[i]), it will throw an error because class_points[i
  // will be undefined.
  // So, we should use let keyword instead of var keyword to declare the variable i.
  // The final answer is: false


// use var instead of let
function better_than_average(class_points, your_points) {
  var sum = 0;
  for (var i = 0; i < class_points.length; i++) {
    sum += class_points[i];
  }
  var average = sum / class_points.length;
  return your_points > average;
}

// Test the function
console.log(better_than_average([2, 3, 4, 5], 3));

// Explanation
// The function takes two parameters: an array of class points and your points.
// It initializes a variable sum to 0 and loops through the class points array, adding each point
// to the sum.
// After the loop, it calculates the average by dividing the sum by the length of the array.
// It then returns true if your points are greater than the average, and false otherwise.


// time and space complexity of for  loop and reduce method
// Time complexity of for loop is O(n) where n is the number of elements in the array
// Space complexity of for loop is O(1) because we are using a constant amount of space
// Time complexity of reduce method is O(n) where n is the number of elements in the array
// Space complexity of reduce method is O(1) because we are using a constant amount of space

// The final answer is: O(n) and O(1) for for loop and O(n
// and O(1) for reduce method.

// which one is better for loop or reduce method
// Both for loop and reduce method have the same time and space complexity
// The choice between for loop and reduce method depends on personal preference and the specific use case
// For loop is more readable and easier to understand, especially for beginners