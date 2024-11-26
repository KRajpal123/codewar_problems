/**
 A hero is on his way to the castle to complete his mission. However, he's been told that 
the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return true if yes, false otherwise :)
 */

const heroCanService = (bullets, dragons) => {
    // If the hero has no bullets, he can't defeat any dragons, so return false
    if(bullets === 0){
        return false
    }
    // If the hero has enough bullets to defeat all the dragons, return true
    return bullets >= dragons * 2;

}
console.log("Hero can survive",heroCanService(10,5));

// Explanation :
// The function heroCanService takes two parameters, bullets and dragons. It first checks if the hero
// has no bullets, if so it returns false. Then it checks if the hero has enough bullets
// to defeat all the dragons, if so it returns true. Otherwise it returns false.

// Time & Space complexity of the function
// Time complexity is O(1) because it only contains a constant number of operations
// Space complexity is O(1) because it only uses a constant amount of space.

// Why should we compare a code with time & space complexity
// We should compare a code with time & space complexity because it helps us to understand how efficient the
// code is. It helps us to identify the bottlenecks in the code and improve it.

// Details about time & space complexity
// Time complexity is a measure of how long an algorithm takes to complete as a function of the size
// of the input. It is usually expressed as a function of n, where n is the size
// Space complexity is a measure of how much memory an algorithm uses as a function of the size of
// the input. It is usually expressed as a function of n, where n is the size of

// How to calculate time & space complexity
// Time complexity can be calculated by counting the number of operations in the code
// Space complexity can be calculated by counting the number of variables used in the code.

// what is an algorithm
// An algorithm is a set of instructions that are used to solve a problem or complete a task.
// It is a well-defined procedure that takes some input and produces a corresponding output.
// An algorithm can be expressed in a programming language or in a natural language.
// An algorithm can be used to solve a wide range of problems, from simple tasks like sorting a
// list of numbers to complex tasks like solving a system of linear equations.

// what is a data structure
// A data structure is a way to organize and store data in a computer so that it can be
// efficiently accessed and manipulated. Data structures can be used to solve a wide range of
// problems, from simple tasks like storing a list of numbers to complex tasks like
// searching for a specific item in a large database

// Explain with an example
// For example, consider a simple algorithm for sorting a list of numbers. The algorithm
// could be expressed as follows:
// 1. Start with the list of numbers
// 2. Compare each pair of adjacent numbers and swap them if they are in the wrong order
// 3. Repeat step 2 until the list is sorted
// This algorithm has a time complexity of O(n^2) because it involves comparing each pair of
// adjacent numbers, which takes O(n) time, and repeating this process n times, which takes
// O(n^2) time in total.

// code example sorting list of an entity students in a class
// let students = [
//     { name: 'John', age: 20 },
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 21 },
//     { name: 'Charlie', age: 19 }
// ];
// students.sort((a, b) => a.age - b.age
// console.log(students); // Output: [{ name: 'Charlie', age: 19 },
// { name: 'John', age: 20 },
// { name: 'Bob', age: 21 },
// { name: 'Alice', age: 22 }]
// This code has a time complexity of O(n log n) because the sort method uses a
// efficient sorting algorithm called quicksort, which has a time complexity of O(n log n) in
// the average case
// Space complexity is O(1) because the sort method does not use any additional space that


// how can we achive the similar task without using inbuilt methods like sort();
// we can use bubble sort algorithm to sort the list of students
// let students = [
//     { name: 'John', age: 20 },
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 21 },
//     { name: 'Charlie', age: 19 }
// ];

// write an algorithm to achive the task.

// 1. create an function that accepts the list of students as an argument.
// 2. loop through the list of students and compare each pair of adjacent students.
// 3. if the current student is older than the next student, swap them.
// 4. repeat step 2-3 until the list is sorted.
// 5. return the sorted list of students.

// go through the code and explain each line how it is working under the js hood.

// 1. function was declared with bubblesort and taking array as an argument.
// 2. n is a variable declared with let keyword and it is storing the length of the array. which means n = 4 in this case
// 3. for loop is using for iterating over the array of students. it is looping through the array from index 0 to n-1
// 3.1 declared i = 0; checking if i < n-1; if true then execute the code inside the loop and increment i by 1.
// 4. declared inner for loop with j = 0; checking if j < n-i-1; if true then execute the code inside the loop and increment j
// 4.1 first outer iteration will get the value of i = 0 and j = 0;
// 4.2 it is comparing j< n - i - 1 which is 4 - 0 - 1 = 3; so it will execute
// 4.3 j variable increased by one
// 5. the two for loops are true so the code inside the loop will execute.
// 5.1 checking the condition with if block.
// 5.2 we are accessing the students age with . operator in array and comparing it with the next student age. this will doing by second loop or inner loop.
// 5.3 Now, the comparison is true, if block will be excuted
// 6. declared a varible temp that store the value of arr[j] which is 22
// 6.1 updating the temp variabl with arr[j+1] which is 21
// 6.2 updating the arr[j+1] with temp which is 22

// function bubbleSort(arr) {
//     let n = arr.length; n = 4
//     for (let i = 0; i < n - 1; i++) { 
//         for (let j = 0; j < n - i - 1; j
//             if (arr[j].age > arr[j + 1].age) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(students)); // Output: [{ name: 'Charlie', age:
// 19 },
// { name: 'John', age: 20 },
// { name: 'Bob', age: 21 },

// Explain the code or dry run the code
// The code is implementing the bubble sort algorithm to sort a list of students based on their age
// The bubble sort algorithm works by repeatedly swapping the adjacent elements if they are in wrong order
// The outer loop runs n-1 times where n is the number of elements in the array
// The inner loop runs n-i-1 times where i is the current iteration of the outer loop
// In each iteration of the inner loop, we compare the current element with the next element and if
// they are in wrong order, we swap them

// Explain about the role of for loop in this scenario
// The for loop is used to iterate over the array and perform the necessary operations to sort it
// The outer for loop is used to control the number of iterations of the inner loop
// The inner for loop is used to compare each pair of adjacent elements and swap them if they are
// in wrong order
// The for loop is used to repeat the process until the array is sorted

// Explain code line by line
// let students = [
//     { name: 'John', age: 20 },
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 21 },
//     { name: 'Charlie', age: 19 }
// ]; // This line is defining an array of objects where each object represents a student
// function bubbleSort(arr) { // This line is defining a function called bubbleSort that takes an
// array as an argument
// let n = arr.length; n = 4 // This line is getting the length of the
// array and assigning it to the variable n
// for (let i = 0; i < n - 1; i++) { //
// This line is starting a for loop that will run n-1 times
// for (let j = 0; j < n - i - 1; j
// This line is starting a nested for loop that will run n-i-1 times
// if (arr[j].age > arr[j + 1].age) {
// This line is checking if the current element is greater than the next element
// if they are in wrong order, we swap them
// let temp = arr[j];
// arr[j] = arr[j + 1];
// arr[j + 1] = temp;
// This line is swapping the current element with the next element
// }

// Explain about bubble sort algorithm
// Bubble sort is a simple sorting algorithm that works by repeatedly swapping the adjacent
// elements if they are in wrong order.
// The pass through the list is repeated until the list is sorted.
// The algorithm, which is a comparison sort, is named for the way smaller elements "bubble"
// to the top of the list.
// Here is a step by step explanation of how bubble sort works
// 1. Start at the beginning of the list
// 2. Compare the first two elements. If they are in the correct order, move on
// 3. If the first element is greater than the second element, swap them
// 4. Move on to the next pair of elements and repeat steps 2 and 3
// 5. Continue this process until the end of the list is reached
// 6. Repeat steps 1-5 until no more swaps are needed, indicating that the
// list is sorted
// Time complexity of bubble sort is O(n^2) in the worst case scenario, where n
// is the number of items being sorted. This is because in the worst case scenario, the
// algorithm has to compare each pair of elements once, resulting in n*(n-1)/2
// comparisons. In the best case scenario, the list is already sorted, and the algorithm
// only needs to make one pass through the list, resulting in a time complexity of O(n)
// Space complexity of bubble sort is O(1) because the algorithm only uses a
// constant amount of space to store the temporary swap variable