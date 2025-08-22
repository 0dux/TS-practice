type Input = number | string;

function firstEl(arr: Input[]) {
  return arr[0];
}

const value = firstEl(["daksh", "yadav"]);
console.log(value.toUpperCase());
// this gives an error even though the inputs are both strings
//also here we could've also given a mixed arr // this can be solved by 'string[] | number[]'
// but ts is strict so it doesnt allow that and expects the output to be to type 'Input'.

// TO SOLVE THIS WE USE GENERICS---

function firstElement<T>(arr: T[]) {
  return arr[0];
}

const val = firstElement<string>(["daksh", "yadav"]); //it can also automatically infer now
const val2 = firstElement([1, 2, 32]); // automatically infered
const val3 = firstElement<string>([1, "lol"]); // also solves the issue of mixed bag of inputs
// CAN ALSO BE COMPLEX VALUE LIKE TYPE OR INTERFACE
console.log(val.toUpperCase());
