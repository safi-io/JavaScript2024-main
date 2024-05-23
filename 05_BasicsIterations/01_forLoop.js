// Basic for loop to print counting

for(let i=1; i<=5; i++) {
    console.log(i);
}

// Using For Loop with Arrays

let myArr = ["Muhammad", "Safi", "Ullah", "Khan"];

for(let index = 0; index < myArr.length; index++) {
    console.log(myArr[index]);
}

// Break and Continue

    // Break (Loop Break)

for(let index=1; index<=5; index++) {
    console.log(index);
    if(index==3) break;
}

    // Continue (Skip Iteration)

for(let index=1; index<=5; index++) {
    console.log(index);
    if(index==3) continue;
}