"use strict";
//  Exercise 1
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Rwaa"));
//  Exercise 2
// 1
let isActive = true;
let num = 21;
let title = "the idiot";
let numbers = [1, 2, 3, 4];
let tuple = ["tree", 1];
// 2
function square(n) {
    return n * n;
}
console.log(square(4));
// 2
let person = {
    firstName: "Rwaa",
    lastName: "Assi",
    age: 21,
    greet: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}, and I am ${this.age}`;
    },
};
console.log(person.greet());
// Exercise 4
// 1
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance} meters`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`woof woof!`);
    }
    move(distance = 10) {
        console.log(`Dog named ${this.name} moved ${distance} meters`);
        super.move(distance);
    }
}
let dog = new Dog(`Rex`);
dog.bark();
dog.move();
// Exercise 5
// 1
let numArray = [1, 2, 3, 4, 5];
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray(numArray));
// 2
let myTuple = ["Numbers", [1, 2, 3, 4]];
function logTuple(tuple) {
    console.log(tuple[0]);
    tuple[1].forEach(num => console.log(num));
}
logTuple(myTuple);
