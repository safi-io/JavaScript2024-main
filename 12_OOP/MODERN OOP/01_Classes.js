// Introduced in ES6
// Basically Syntatic Sugar
// BTS ( new keyword )

class phone {
    constructor(model, price, color) { // Automatically called
        this.model = model;
        this.price = price;
        this.color = color;
        // console.log("Data Setted")
    }

    priceInRs() {
        return `${this.price*278}`
    }

    convertLowercase() {
        return this.model.toLowerCase();
    }
}

let windowsPhone = new phone("LUMIA", 10, "Black");

console.log(windowsPhone.convertLowercase());