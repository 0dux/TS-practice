function doSomething(keyPressed: string) {
  console.log(keyPressed);
} //here we also could have controled the inputs using if statements but it would make it very verbose and unnecessarily long.
doSomething("Some random ass bs !!!");

//Ab maan; lo if you wanted to only print the key pressed but ab string likha hai so kuch bhi string daal sakte hai there is no control over available options.

function doSomethingAgain(keyPressed: "up" | "down" | "left" | "right") {
  console.log(keyPressed);
}

doSomethingAgain("up");
// here we gained some control over the options now the user can only use one of the options this could also be implemented using types and interface

enum Direction {
  //Enums are just a virtual concept in ts when converted into js the outputs will be
  Up, // js --- 0
  Down, // 1
  Left, // 2
  Right, // 3 // its just much easier to read while writing ts code
}

function doSomethingButBetter(keyPressed: Direction) {
  console.log(keyPressed);
}

doSomethingButBetter(Direction.Up);
// Now this is more readable and makes sense while coding if the inputs are to be restricted in the constraints of options
// Enum is the best thing to use when we want to control inputs based on options. cause of 2 reasons -- more readable and option suggestions while coding

enum DirectionDefined { // if you want to assign custom value to enum
  Up = "up", //similar thing can be done with numbers
  Down = "down",
  Left = "left",
  Right = "right",
}
//enums have a good usecase in express for statusCodes
