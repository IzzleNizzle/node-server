// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.
function Programmer (name, title, age, language) {
  this.name = name;
  this.title = title;
  this.age = parseFloat(age);
  this.language = language;
  this.printAll = function () {
    console.log(this);
  };
}
// Your "Programmer" constructor should be able to take in the following information...

// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
// Now create a method for the constructor that would print all of the information contained within an object to the console.

// Finally, create a "Programmer" object and call the method to print its contents
var isaac = new Programmer('Isaac', 'Web Developer', 27, 'JavaScript');

isaac.printAll();