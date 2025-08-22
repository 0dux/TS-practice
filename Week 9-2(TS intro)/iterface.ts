interface User {
  //interfaces are primarily used for defining objects.
  firstName: string;
  lastName: string;
  age: number;
  email?: string; //makes it optional '?'
}

function isLegal(user: User) {
  //directly User ki jagah par bhi define kar sakte the but iske sath issue ye hota hai ki
  // if you wanted to use the same type somewhere else you'd have to define it again
  // which goes against dry
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}
