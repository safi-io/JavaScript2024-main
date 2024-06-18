// A constructor function is a special type of function used to create and initialize objects. When called with the new keyword, it sets up the properties and methods of the new object and returns it. They are fundamental part of JS OOP capabilities.

    // Constructor Functions are distinguish by Capital Letter at Start.
    ``
function Person(name, age, adult) {
    this.name = name;
    this.age = age;
    this.adult = adult;
    this.PrintDetails = function() {
        console.log(`${this.name}, ${this.age}, ${this.adult}`);
    }
}

let personOne = new Person("safi", 19, true);
// console.log(personOne);
let personTwo = new Person("ali", 17, false);
// console.log(personTwo);

// If we don't use new keyword here, then personTwo must overwrited the values

personOne.PrintDetails(); // Method is called