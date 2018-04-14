// Get usersearch constructor
var UserSearch = require("./UserSearch.js");
// getting command line input
var userType = process.argv[2];
var name = process.argv[3];
var location = process.argv[4];
// if this is a user call run the user functions
if (userType === "user") {
    var newUser = new UserSearch(name, location);
    newUser.getWeather();
}else if(userType === "admin"){
    console.log("admin stuff");
}else{
    console.log("Please enter a valid user type!!");
}