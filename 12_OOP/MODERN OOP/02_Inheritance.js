// Inheritance in JavaScript is a mechanism that allows you to create new classes (known as child classes) that inherit properties and methods from existing classes (parent classes). 

class Person {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    complexCalculations() {
        let data = this.number-2;
        return data
    }
}

class Youtuber extends Person {
    constructor(name, subscribers, number) {
        super(name, number) // Can be called only once
        this.subscribers = subscribers;
    }
    displayInfo() {
        return `The Youtuber name is ${this.name} and subscribers are ${this.subscribers}K and his Phone Number is ${this.number}`;
    }
}

let Hitesh = new Youtuber("hitesh", 325, 1234);

console.log(Hitesh.displayInfo())

console.log(Hitesh instanceof Person)
