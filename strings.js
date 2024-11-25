
//Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(str) {
    return str.split("").reverse().join("");
    }
    // test the function
    console.log(reverseString('world'));  // outputs: 'dlrow'   
    console.log(reverseString('word'));   // outputs: 'drow'

    // 1. str.split(""): this splits the input into an array of individual elements like : ["w","o","r","l","d"];
    // 2. reverse(): this reverses the order of the elements in the array; ex: ["d","l","r","o","w"];
    // 3. join(""): this joins the elements of the array back into a string; ex: "dlrow"

    // another way of solving same problem 
    function reverseString(str) {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
            }
            return reversed;
            }
            // test the function
            console.log(reverseString('world'));  // outputs: 'dlrow'

            // 1. let reversed = ""; this initializes an empty string to store the reversed string
            // 2. for (let i = str.length - 1; i >= 0
            // 3. i--) this loops through the string from the last character to the first character
            // 4. reversed += str[i]; this adds each character to the reversed string

    // another way of solving same problem
    const reverseString = str => [...str].reverse().join();
    console.log(reverseString('world'));  // outputs: 'dlrow'
    // 1. [...str] this converts the string into an array of individual characters