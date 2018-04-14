var fs = require("fs");
// Get usersearch constructor
var UserSearch = require("./UserSearch.js");

var name = process.argv[2];
var location = process.argv[3];


var WeatherAdmin = function () {
  this.newUserSearch = function (name, location) {
    //search for the weather in their area;
    var [name] = new UserSearch([name], [location]);

    fs.appendFile("log.txt", "\n" + [name], function (err) {

      // If an error was experienced we say it.
      if (err) {
        console.log(err);
      }

      // If no error is experienced, we'll log some data to the file.
      else {
        console.log("Content Added!");
      }

    });


  }
}


var test = new WeatherAdmin();
test.newUserSearch(name, location);