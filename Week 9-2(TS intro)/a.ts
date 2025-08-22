// let x: number = 1;
// // //x = "Daksh" tsc gives out an error.
// console.log(x);

////Problem 1 --->
// function greetUser(name: string): void {
//   console.log(`Hello ${name}`);
// }

// greetUser("Mohit");

////Problem 2 --->
// function sum(num1: number, num2: number): number {
//   const sum = num1 + num2;
//   return sum;
// }
// console.log(sum(10, 20));

//Problem 3--->
// function isLegal(age: number): boolean {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let x: boolean = isLegal(18);

//Problem 4--->
//isme basically function ki return type ka role hota hai ki fn as arg kya type return karta hai
function runAfter1S(fn: () => void, delay: number): void {
  setTimeout(() => {
    fn();
  }, delay);
}

function logger(): void {
  console.log("Kardia nah log!!!");
}

runAfter1S(logger, 1000);
