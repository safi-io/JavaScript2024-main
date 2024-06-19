
    // Getter: A method that retrieves the value of a property.
    // Setter: A method that sets the value of a property while allowing custom logic to be executed.


class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get bioData() {
        if(this.firstName != undefined && this.lastName != undefined) {
            return `${this.firstName} ${this.lastName} is the Full name`;
        }
    }

    set bioData(value) {
        let parts = value.split(" ");
        if(parts.length>=2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        }else {
            console.log("Unable to set the Name, It must have two parts.");
        }
    }
}

const person1 = new Person();
person1.bioData = "safi khan"
console.log(person1.bioData)