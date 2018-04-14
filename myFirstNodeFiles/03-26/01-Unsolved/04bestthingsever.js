// # Best Things Ever

// ## File

// * [`best_things_ever.txt`](Unsolved/best_things_ever.txt)

// ## Instructions

// * Create a Node application that reads the `best_things_ever.txt` file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

// * Your final output should look something like this:

//   ```
//   lazy boy recliner
//     massage
//     meditation
//     hot shower
//     cheese fondue
//     hot coffee with cashew milk
//     kitten falling asleep on my lap
//   ```

// ### Hints

// * If you are struggling to figure out how to loop your way through the text, look into the `.split()` method. This could make your life a whole lot easier.



// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(", ");

  // We will then re-display the content as an array for later use.
  console.log(fs);

  for (i=0; i<dataArr.length; i++){
      console.log(dataArr[i]);
  }
});