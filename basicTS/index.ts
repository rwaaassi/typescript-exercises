//  Exercise 1
function greet(name:string): string {
    return `Hello, ${name}`
}
console.log(greet("Rwaa"));

//  Exercise 2
// 1
let isActive: boolean = true
let num: number = 21
let title: string = "the idiot"
let numbers: number[] = [1,2,3,4]
let tuple:[string, number] = ["tree", 1]

// 2
function square(n:number) : number {
    return n*n
}
console.log(square(4));

// Exercise 3
// 1
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): string;
}
// 2
let person: Person = {
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
    name: string;
constructor (name:string) {
    this.name = name
}
move(distance: number = 0) {
    console.log(`${this.name} moved ${distance} meters`);
    
}
}

class Dog extends Animal {
    bark() {
        console.log(`woof woof!`);
        
    }
    move(distance: number = 10) {
        console.log(`Dog named ${this.name} moved ${distance} meters`);
        super.move(distance)
        
    }
}
let dog = new Dog(`Rex` )
dog.bark()
dog.move()

// Exercise 5
// 1
let numArray: number[] = [1,2,3,4,5]
function sumArray(numbers: number[]) : number {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(sumArray(numArray));

// 2
let myTuple: [string, number[]] = ["Numbers", [1,2,3,4]]
function logTuple(tuple: [string, number[]]) : void {
    console.log(tuple[0]);
    tuple[1].forEach(num => console.log(num))
}
logTuple(myTuple)
