// # **Instructions**

// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**

// * Look for other ways to expand what your server can do. As possibilities:
//   * Generate the good/bad phrase randomly from a list of predefined phrases
//   * Use the `twitter` package inside the response to also return a random tweet

// ***************** MY CODE GOES HERE *****************************88

// Require/import the HTTP module
var http = require("http");

var niceArray = ["Nice Job!", "Way to go!", "Sweet!!!", "Keep it up!!!", "No way?! You're awesome"]

var meanArray = ["You must have woken up on the wrong side of the bed!!", "Where did you buy your clothes? Walmart?", "One day you must remember to...well...I don't have time..."]

// Nice listener
var PORT = 7000;

function handleRequest(request, response) {

  response.end(niceArray[Math.floor(Math.random() * niceArray.length)]);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// Not nice Listener // Not nice Listener // Not nice Listener // Not nice Listener

var PORT2 = 7500;

function handleRequest2(request, response) {

    response.end(meanArray[Math.floor(Math.random() * meanArray.length)]);
    
  }

// // Use the Node HTTP package to create our server. Pass the handleRequest
// // function to empower it with functionality.
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function () {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});

// ***************** MY CODE ENDS HERE *****************************88


// Require/import the HTTP module
// var http = require("http");

// // Define a port to listen for incoming requests
// var PORT = 3000;

// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

//   if (request.url === "/home") {
//     response.end("YOU ARE HOME LATE SON!!!!!");
//   } else {
//     // Send the below string to the client when the user visits the PORT URL
//     response.end("It Works!! Path Hit: " + request.url);
//   }

// }

// // Use the Node HTTP package to create our server. Pass the handleRequest
// // function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // // Start our server so that it can begin listening to client requests.
// server.listen(PORT, function () {

//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
