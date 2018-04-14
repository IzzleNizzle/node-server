// import { log } from "util";

// # **Instructions**

// * Make a dogs object with three keys...

//   * First key called "raining" with a value of true

// * Second key called "noise" with a value of "Woof!"

// * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// * Make a cats object with three keys...

//   * First key called "raining" with a value of false

//   * Second key called "noise" with a value of "Meow!"

//   * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

// * Make the dog bark

// * Make the cat meow

// * BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.

// * BONUS: Look to see if you can find any means to simplify your code further and further

function massHysteria () {
  // cats.raining = true;
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}

var dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: function () {
    if (this.raining === true) {
      console.log(dogs.noise);
    }
  }
}

var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: function () {
    if (this.raining === false){
      console.log(this.noise);
    }
  }
}

if (process.argv[2] === "cats") {
  cats.makeNoise();
}

if (process.argv[2] === "dogs") {
  dogs.makeNoise();
}

massHysteria();