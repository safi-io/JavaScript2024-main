// Collection of Properties and Methods
    // Method is Basically a Function in Object


// Use of This Keyword

const car = {
    color: "white",
    model: 2020,
    isRegistered: true,
    price: 14.3,
    currentContext: function() {
        console.log(this["color"])
        console.log(this) // Current Context
    },
    globalContext : ()=> {
        console.log(car.color)
        console.log(this) // Global Context Because of Arrow Func.
    }
};

