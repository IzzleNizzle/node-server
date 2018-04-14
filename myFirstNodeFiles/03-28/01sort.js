// # Command Sort

// ## Files

// * [`commandSortUnsolved.js`](Unsolved/commandSortUnsolved.js)

// ## Instructions

// * Starting from a blank file, create a Node-based command-line application that takes in a series of numbers from the user and returns the numbers sorted in ascending order.

// * **NOTE:** Feel free to use Stack Overflow or Google to find the code for sorting integers numerically.
let array = [];

// collecting all user input
for ( i = 2; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}

function myFunction() {
  array.sort(function(a, b){return a - b});
}
myFunction();
console.log(array);