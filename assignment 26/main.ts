// Alien Colors #2: Choose a color for an alien as you did in Exercise 25

let alienColor: string = "green";

// write an if-else chain

// If the alien’s color is green
// print a statement that the player just earned 5 points for shooting the alien.

if (alienColor === "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
   console.log("player just earned 10 points.");
}

// If the alien’s color isn’t green, print a statement that the player just earned 10 points.

alienColor = "yellow";

if (alienColor === "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
   console.log("player just earned 10 points.");
}

// Write one version of this program that runs the if block and another that runs the else block.