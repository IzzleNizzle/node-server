// Instructions:

// Write a command line node application that takes in a number from the command line and finds the sum of all the multiples of 6 that are smaller than it. (ex: input: 13... output: 6 + 12 = 18)

// Bonus:

// Make the program such that it takes in two parameters: The application now taking in the first number from the command and finds all the multiples of the second smaller than it.

// Give it a set of default values in case the user doesn't provide parameters.

var count = 0;
var input = parseFloat(process.argv[2]);
var number = 6;
var string = '6';
console.log(input);

// add 6 until the number is greater than the input
while (number <= input) {
    number = number + 6;

    if (!count === 0) {
        string += " + " + number;
    }
    count++;
}
console.log(string);
//once number is greater than input, find from the number of iterations how to print it out.

// var answerArray = ['less or equal than 6', '6 = 6', '6 + 12 = 18', '6 + 12 + 18 = 36']
// console.log(answerArray[count]);