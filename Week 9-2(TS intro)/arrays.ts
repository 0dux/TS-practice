type NumbersArr = number[];

function largestElement(numArr: NumbersArr): number {
  let largestEl: number = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (largestEl < numArr[i]) {
      largestEl = numArr[i];
    }
  }
  return largestEl;
}

const result: number = largestElement([1, 882, 3, 4, 5, 6, 78, 99]);

console.log("The largest element in the array is : " + result);


interface User {
  firstName: string;
  lastName: string;
  age: number;
}


