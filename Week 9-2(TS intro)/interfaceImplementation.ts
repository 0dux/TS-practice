interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  // the main difference between types and interface is that we can use interface to implement classes
  // same cant be done with types // implements also means like defining the classes types etc..etc like a function.
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
