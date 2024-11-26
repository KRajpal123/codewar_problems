/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string 
in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
 */

function football_points(matches) {
  let points = 0;
  for (let match of matches) {
    let [x, y] = match.split(":").map(Number);
    if (x > y) {
      points += 3;
    } else if (x < y) {
      points += 0;
    } else points += 1;
  }
  return points;
}

// Explanation
// The function takes a collection of strings representing match results as input.
// It iterates over each match, splits the string into our team's score and the opponent's
// score, and compares them. If our team wins, it adds 3 points to the total
// If the match is a tie, it adds 1 point. If our team loses, it
// does not add any points.
// Finally, it returns the total number of points our team has earned.

console.log(football_points(["3:1", "2:2", "0:1"])); // Output: 4

// Dry run code for better understanding of the problem and solution
// let matches = ["3:1", "2:2", "0:1"];
// 1. intializing the variable points and assigned it a value of 0
// 2. for loop to iterate over each match in the array of matches
// 2.1 first it takes the match means in our case it will take "3:1"
// 2.2 then it split the match into two parts by ":" and convert them into integers and store in x and y, in our case x will be the first element of the array and y will be the second element of the array
// 2.3 the split method removes the colon from the string and returns an array of two strings, then we convert them into integers using the map
// 2.4 then we check if x is greater than y, if yes then we updating the points by adding 3 to it
// 2.5 then we check if x is less than y, if yes then we we updating the points by adding 0 to it
// 2.6 then we check if x is equal to y, if yes then we updating the points by adding 1 to it
// 2.7 then we return the points

// solution 2
function football_points(matches) {
  return matches.reduce(
    (points, match) =>
      (points += match[0] > match[2] ? 3 : match[0] === match[2] ? 1 : 0)
  );
}

// Explanation
// The function takes a collection of strings representing match results as input.
// It uses the reduce method to iterate over each match and calculate the total points.
// For each match, it checks if our team wins, ties, or loses, and adds the
// corresponding points to the total.
// Finally, it returns the total number of points our team has earned.

// where is the colon gone and how it is compared with reduce method
// the reduce method is a function that takes a callback function as an argument
// the callback function takes four arguments: accumulator, currentValue, index, array
// the accumulator is the value that is returned by the callback function in the previous iteration
// the currentValue is the current element being processed in the array


const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
// Explanation
// 1. the reduce method iterates over the array of elements 
// 2. the callback function takes four arguments: accumulator, currentValue, in above case accumalator is 0 and current value is [x, _ , y].
// 3. now we are splitting the current value into three parts, x, _, y. the _ is the colon
// 4. now we are comparing the x and y and adding the points to the accumulator.
// 5. a intial value of accumulator is 0. a + (x > y ? 3 : x == y) means if x is greater than y then
// 6. add 3 to the accumulator, if x is equal to y then add
// 7. 1 to the accumulator, if x is less than y then add 0