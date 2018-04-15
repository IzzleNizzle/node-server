// # **Instructions**

// * Create a website with four routes:
//   * Home
//   * Favorite Foods
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Each route should be triggered by a different URL.
// * Each route should display an HTML page listing your favorite three things of each.
// * Be sure to use `fs` to serve your HTML files.

// ## Bonuses
// * Have your home page have links to all of your other pages.
// * DRY up your code by only having a single `readFile`


// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8081;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  console.log(req);

  switch (req.url) {

    case "/":
      urlDirectory("/index.html", req, res);
      break;

    case "/favCSS.html":
      urlDirectory("/favCSS.html", req, res);
      break;

    case "/favfoods.html":
      urlDirectory("/favfoods.html", req, res);
      break;

    case "/favmovies.html":
      urlDirectory("/favmovies.html", req, res);
      break;

  }

}


function urlDirectory(url, req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + url, function (err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

}

// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});
