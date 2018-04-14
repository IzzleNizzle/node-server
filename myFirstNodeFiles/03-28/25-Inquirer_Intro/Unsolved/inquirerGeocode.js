// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");
var inquirer = require("inquirer");
var weather = require("weather-js");
// Take in the command line arguments


inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your full address?",
      name: "address"
    }
  ])
  .then(function (inquirerResponse) {

    // Then use the Google Geocoder to geocode the address
    geocoder.geocode(inquirerResponse.address, function (err, data) {

      // Then console log the result and stringify it.
      // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
      // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
      console.log(JSON.stringify(data.results[0].formatted_address, null, 2));
    });

  

    weather.find({ search: inquirerResponse.address, degreeType: "F" }, function(err, result) {

      // If there is an error log it.
      if (err) {
        console.log(err);
      }
    
      // If there is no error... then print out the weather data.
      // We use JSON.stringify to print the data in string format.
      // We use the JSON.stringify argument of "2" to make the format pretty.
      // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
      console.log('Here is the local weather ' + JSON.stringify(result[0].current.skytext, null, 2));
    
    });
    
  });




