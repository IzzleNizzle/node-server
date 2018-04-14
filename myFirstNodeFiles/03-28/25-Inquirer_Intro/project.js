// # Inquirer Users

// ## File

// * [`userprompt.js`](Unsolved/userprompt.js)

// ## Instructions

// * Create a basic command line Node application using the inquirer package.

// * Your application should ask the user any five questions of your choosing.

// * The question set should include at least one:

//   * Basic input,
//   * Password
//   * List,
//   * Checkbox,
//   * Confirm

// * Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.

// ### Hints

// * See the inquirer GitHub documentation "examples" page if you need help.

// * Remember to get creative with your code!

var inquirer = require("inquirer");


inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "checkbox",
      message: "What is your favorite color?",
      choices: ["Blue", "Red", "Green", "Yellow", "Some other color"],
      name: "color"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Your favorite color requests your most recent password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Are you sure you want to give me that?",
      name: "confirm",
      default: true
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "How secure do you think your password is?",
      choices: ["Very Secure", "Secure", "Not Secure"],
      name: "secure"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's color and secure from the answers.
    if (inquirerResponse.confirm) {
      if (inquirerResponse.color.length > 1) {
        console.log("\nWelcome, your favorite colors are " + inquirerResponse.color);

      } else {
      console.log("\nWelcome, your favorite color is " + inquirerResponse.color);
      }
      console.log("Your " + inquirerResponse.secure + " password is ready for battle!\n");

    }
    else {
      console.log("\nThat's okay " + inquirerResponse.color + ", come again when you are more sure.\n");
    } 
    
    console.log('Your password is being put to the test\n ');

    if (inquirerResponse.password === "1234") {
     
      
      console.log('your password is not very secure');
      
    } else {
      console.log('your password passed the test!');
      
    }
  });