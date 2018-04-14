// # BankJs

// ## File

// * [`bank.txt`](Unsolved/bank.txt)

// ## Instructions

// * Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.

// * The transactions possible are:

//   * `total` - this should tally up all of the money in the bank balance and display it for the user.

//   * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

//   * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

//   * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

// * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.

// ### Hints

// * Consider making a series of if-then or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).

// ### Bonuses

// * If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

// fs is a core Node package for reading and writing files
var fs = require("fs");


// The code will store the contents of the reading inside the variable "data"
fs.readFile("bank.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    switch (process.argv[2]) {

        case `total`: 
        var dataArr = data.split(", ");
        var bankTotal = 0;
        for (i=0; i<dataArr.length; i++){
       
            bankTotal += parseFloat(dataArr[i]);
          
        }
        var newBankTotal = bankTotal.toFixed(2);
        console.log(newBankTotal);
        break;

        case 'deposit':
        var depositNumber = parseFloat(process.argv[3]);

        fs.appendFile("bank.txt", ", " + depositNumber, function(err) {

            // If an error was experienced we say it.
            if (err) {
              console.log(err);
            }
          
            // If no error is experienced, we'll log the phrase "Content Added" to our node console.
            else {
              console.log("Content Added!");
            }
          
          });

        break;

        case 'withdraw':
        var withdrawNumber = parseFloat(process.argv[3]);

        fs.appendFile("bank.txt", ", -" + withdrawNumber, function(err) {

            // If an error was experienced we say it.
            if (err) {
              console.log(err);
            }
          
            // If no error is experienced, we'll log the phrase "Content Added" to our node console.
            else {
              console.log("Content Added!");
            }
          
          });

        break;

        case 'lotto':
        
        var randomNumber1 = Math.floor(Math.random() * 10);
        var randomNumber2 = Math.floor(Math.random() * 10);

        if (randomNumber1 === randomNumber2) {

            var lotoPrize = 12000;

            fs.appendFile("bank.txt", ", " + lotoPrize, function(err) {
    
                // If an error was experienced we say it.
                if (err) {
                  console.log(err);
                }
              
                // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                else {
                  console.log("Your a lucky duck, you won the lotto!");
                }
              
              });



        } else {

            var lottoCost = 5;

        fs.appendFile("bank.txt", ", -" + lottoCost, function(err) {

            // If an error was experienced we say it.
            if (err) {
              console.log(err);
            }
          
            // If no error is experienced, we'll log the phrase "Content Added" to our node console.
            else {
              console.log("You did not win lotto!");
            }
          
          });


        }

        break;

    }
     
  });