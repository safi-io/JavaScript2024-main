let numbers = [1,2,3,4,4,5];

for(let num of numbers) {
    // console.log(`The value is ${num}`)
}

let greetings = "Hello World!";
for(let greet of greetings) {
    if(greet==" ") {
        continue;
    }
    console.log(greet)
}