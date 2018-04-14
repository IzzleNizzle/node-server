// Core node package for reading and writing files
var fs = require("fs");

fs.readFile('01app.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });