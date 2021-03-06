// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  // flips a coin: if the the value is equal to 0 then this.offense goes up by one. if the value is equal to 1
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  if (starters.length + subs.length < 8) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: "
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 5) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
  }
};

// calls the function createPlayer() to start the code
createPlayer();

var playGameCount = 0;
var teamScore = 0;
var teamOffense = 0;

function playGame () {
  if (playGameCount < 5) {

    // genorate two random numbers between 1 and 20
    var random1 = Math.floor(Math.random() * 20) + 1;
    var random2 = Math.floor(Math.random() * 20) + 1;

    // get sum of teams offense and defense

    for (i = 0; i < team.length; i++) {
      teamOffense += team[i].offense;
    }



    if (random1) {

    }

    playGameCount++;
    playGame();  
  }
}
// Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

// Run 5 times. Each time the function runs:
// Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
// If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
// If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
// After the score has been changed, prompt the user to allow them to substitute a player from within the starters array with the player from within the subs array.
// After the game has finished (been run 5 times):
// If the score is positive, run goodGame for all of the players currently within the starters array.
// If the score is negative, run badGame for all of the players currently within the starters array.
// If the score is equal to zero, do nothing with the starters.
// Give the user a message about if they won, and the status of their starters.
// After printing the results, ask the user if they would like to play again.
// Run playGame from the start once more if they do.
// End the program if they don't.
// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

// HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.