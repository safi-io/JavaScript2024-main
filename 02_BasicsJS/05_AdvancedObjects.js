// Changing Deep Values
const new_car = {
    name: "HYUNDAI",
    model: 2021
}

console.log(Object.getOwnPropertyDescriptor(new_car, "name")) // Accessing Permissions of a Property 


Object.defineProperty(new_car, "name", { // Changing IT
    writable : false
})

new_car.name = "CHANGAN" // Now, The value can't be changed

console.log(new_car)