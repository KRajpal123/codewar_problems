/**
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) 
 * and After Earth (2013). Jaden is also known for some of his philosophy that he delivers 
 * via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
 *  For simplicity, you'll have to capitalize each word, check out how contractions are expected 
 * to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized
 in the same way he originally typed them.

 Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

// Explanation it is doesn't look like regular function
// it is a method of String prototype
// it is called on a string
// it returns a new string with the words capitalized as per Jaden Smith's style
// it is a function that takes a string and returns a new string

// Example usage const str = "microsoft word"
// str.toJadenCase() returns "Microsoft Word"

// in the above case 
// 1. split the string into words eg: ["microsoft", "word"];
// 2. map over on each word 
// 3. using charAt() method get the first character of the word. eg: "m"
// 4. using toUpperCase() method convert the first character to uppercase. eg: "M"
// 5. using + operator concatenate the first character with the rest of the word. eg: "M" + "icrosoft"
// 6. using slice() method get the rest of the word. eg: "icrosoft"
// 7. using toLowerCase() method convert the rest of the word to lowercase. eg: "icrosoft"
// 8. join() method join the words back together with a space in between. eg: "Microsoft Word"

// Explain about each word or method used in the code
// split() method: This method is used to split a string into an array of substrings,
// and returns the array. It takes one argument, which is the separator used to split the string
// map() method: This method creates a new array with the results of applying a provided function on
// every element in this array. It takes a function as an argument, which is called on each
// element in the array, and returns the result of that function call
// charAt() method: This method returns the character at the specified index in a string.
// It takes one argument, which is the index of the character to return
// slice() method: This method returns a section of a string. It takes two arguments, which
// are the start and end indices of the section to return
// join() method: This method joins all elements of an array into a string. It takes one
// argument, which is the separator used to join the elements

// what is prototype and its usage in js
// prototype is an object that is used to create new objects
// it is a property of every object in js
// it is used to add new properties and methods to an object
// it is used to create a new object by copying the properties and methods of an existing object

// In our case , we are adding a new method to the String prototype called toJadenCase()

// how many ways we can create a new object in js
// there are several ways to create a new object in js
// 1. using the new keyword: var obj = new Object();
// 2. using the Object.create() method: var obj = Object.create(Object.prototype);
// 3. using the {} syntax: var obj = {};
// 4. using the Object() function: var obj = Object();
// 5. using the new keyword with a constructor function: var obj = new MyClass();

// some question for practicing purpose using prototype property.
// 1. How to add a new method to the String prototype?
// 2. How to add a new property to the String prototype?
// 3. How to create a new object by copying the properties and methods of an existing object
// 4. How to use the prototype property to create a new object?
// 5. How to use the prototype property to add a new method to an object?

// Main uses of prototype is
// 1. Inheritance: Prototype is used to create a new object by copying the properties and
// methods of an existing object. This is known as inheritance.
// 2. Adding new methods: Prototype is used to add new methods to an object.
// 3. Memory Efficiency
// 4. Code Reusability
// 5. Dynamic Object Creation



String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
  };

  // Explanation : how regular expressions are working above code
  // ^ matches the start of a string
  // \s matches any whitespace character
  // [a-z] matches any lowercase letter
  // g flag is used to find all matches in the string, not just the first one
  // function(x){ return x.toUpperCase(); } is a callback function that is called for each match
  // it converts the matched character to uppercase and returns it
  // The replace() method replaces some or all matches of a pattern in a string with a replacement