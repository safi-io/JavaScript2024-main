    // Making an object using an constructor
    
const new_mobile = new Object();

new_mobile.model = "iphone"; // Giving values to singleton object
new_mobile.color = "black";
console.log(new_mobile)

    // Passing Object in an object

const laptop = {
    color: "black",
    price: 789,
    specifications: {
        processer: {
            type: "intel",
            speed: 4000
        },
        ram: {
            type: "DDR5"
        }
    }
}
console.log(laptop.specifications.processer.type)

    // Joining Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign( {}, obj1, obj2) // First one is target, and others are source

        // Preferable method is Spread Operator

const obj4 = {...obj1, ...obj2}
console.table(obj4)

    // Arrays of Objects

const data = [
    {
        id: 123,
        username: "safi"
    },
    {
        id: 234,
        username: "khan"
    }
]

console.log(data[0].username)

    // Object Prototpye

console.log(Object.keys(laptop))
console.log(Object.values(laptop))
console.log(Object.entries(laptop)) // Change Object into Array

// To verify value
console.log(laptop.hasOwnProperty("specifications")); // Expected output : true