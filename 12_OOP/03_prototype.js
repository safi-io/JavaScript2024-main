
// Injecting New Methods in Prototype

Object.prototype.trueLength = function (str) {
    return this.trim().length;
}

let string = "  hello"

// console.log(string.trueLength())



    // Prototypal Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}


Teacher.__proto__ = User

    // Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(Teacher.name); // chai
console.log(TeachingSupport.name); // chai