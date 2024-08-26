Завдання 1: https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript;
function findSmallestInt(arr) {
  return Math.min(...arr);
}

Завдання 2: https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript;
function circleCircumference(circle) {
  const diameter = circle.radius * 2;
  return diameter * Math.PI;
}

Завдання 3: https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript;
function giveMeFive(obj) {
  const result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result;
}

Додатково.
  Завдання 4: https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript;
function buildFun(n) {
  var res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }

  return res;
}


Завдання 5: https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript;
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.species = "shark";
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = "cat";
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super(name, age, status);
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = "dog";
    this.status = status;
    this.master = master;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

