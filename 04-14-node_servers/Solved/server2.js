// We require/import the HTTP module
var http = require("http");

// ========================= Then define the ports we want to listen to
var PORTTWO = 7500;

// create handler for requests and responses
function handleRequestTwo(request, response) {
    response.end("JavaScript must not be your forte.");
}

// iniate our server with the request handler
var serverTwo = http.createServer(handleRequestTwo);

// start server listener
serverTwo.listen(PORTTWO, function () {

    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORTTWO);
});
