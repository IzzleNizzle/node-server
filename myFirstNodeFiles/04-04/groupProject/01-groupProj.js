var inquirer = require("inquirer");
var fs = require("fs");
var UserSearch = require("./userSearch.js");
var newUser = new UserSearch("Isaac", "Sandy UT");
newUser.getWeather();

// inquirer
//   .prompt([
//     {
//       type: "list",
//       message: "Choose wisely",
//       choices: ["User", "Admin"],
//       name: "userInput"
//     },
//   ])
//   .then(function (inquirerResponse) {

//     switch (inquirerResponse.userInput) {
//       case 'User':
      
//         break;

//       case 'Admin':

//         break;
//     }

//   });








// //This reads data from the file
// fs.readFile("log.txt", "utf8", function (error, data) {

//   // If the code experiences any errors it will log the error to the console.
//   if (error) {
//     return console.log(error);
//   }


//   console.log(data);


//   fs.appendFile("log.txt", "\n", function (err) {

//     // If an error was experienced we say it.
//     if (err) {
//       console.log(err);
//     }

//     // If no error is experienced, we'll log some data to the file.
//     else {
//       console.log("Content Added!");
//     }

//   });


// });

