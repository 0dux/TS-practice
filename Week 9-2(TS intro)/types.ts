//The most obvious difference between interface and type is that type are defined using '=' no '=' is used in interface
// Types can't be used to implement classes but interfaces can be used to implement classes
// based on certain conditions we are supposed to choose between the 2.
type User3 = {
  firstName: string;
  lastName: string;
  age: number;
};

//But the biggest advantage of using types is that they allow you to perform unions etc.. etcc which can't be done with interfaces

type greetArg = number | string;

//this is the use case of union
// basically The requirement was that id could be a number or a string so we used union in type
function greet(id: greetArg) {
  console.log(id);
}

//what is the difference between interface and a type -- interview quesstion
