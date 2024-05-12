// Two ways to create a object

    // 1. Using Constructor (Singleton)
    // 2. Object Litreals

const chasis = Symbol();
const new_car = {
    color: "white",
    engine: 1000,
    abs: true,
    max_speed: 160.7,
    main_features : ["high-speed", "seat-comfort"],
    [chasis]: "01234"
}

// Two ways to access Values

console.log(new_car.color)
console.log(new_car["main_features"])
console.log(new_car[chasis])

// Over-writting Values
new_car.color = "black"
Object.freeze(new_car)
new_car.color = "pink" // Will not work, because object is freezed
console.log(new_car);