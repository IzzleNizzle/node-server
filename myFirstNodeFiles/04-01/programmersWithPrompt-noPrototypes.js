// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nAge: " + this.age + "\nLanguages: " + this.language);
  };
}





// Make prompt happen until members says he's done.
var stop = false;
do {

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([
  {
    type: 'input',
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }, {
    type: "confirm",
    message: "Would you like to create another Programmer?",
    name: "again",
    default: false
  },

]).then(function(answers) {
  // initializes the variable newGuy to be a programmer object which will take
  // in all of the user's answers to the questions above
  var newGuy = new Programmer(answers.name, answers.position, answers.age, answers.language);
  stop = answers.again;
  console.log(answers.again);
  // printInfo method is run to show that the newguy object was successfully created and filled
  newGuy.printInfo();
});

} while (!stop);



