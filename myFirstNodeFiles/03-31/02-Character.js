
function Character (name, profession, gender, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = parseFloat(age);
  this.strength = parseFloat(strength);
  this.hitPoints = parseFloat(hitPoints);
  this.printStats = function () {
    console.log(this);
  };
  this.isAlive = function () {
    if (this.hitPoints > 0) {
      console.log('Your character is still alive...barely');      
    }
  };
  this.attack = function (opponent) {
    opponent.hitPoints -= this.strength;
    console.log(opponent.hitPoints, this.strength);
    
  }
  this.levelUp = function () {
    this.age ++;
    this.strength += 5;
    this.hitPoints += 25;
  }
}


var wammy = new Character('Wammy', 'Butcher', 'male', '21', '50', '50');
var yammer = new Character('Yammer', 'Barber', 'female', '27', '75', '75');

wammy.printStats();
yammer.printStats();
yammer.attack(wammy);
// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!
