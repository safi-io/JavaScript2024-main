// In JS, static methods are methods that are called on the class itself rather than on instances of the class.

    //  They provide a way to encapsulate functions that are related to the class but do not require access to instance-specific data. This keeps the code organized and avoids cluttering the global execution context.


class MathOperations {

    static square(number) {
        return number * number;
    }

}

console.log(MathOperations.square(5)); // Output: 25
