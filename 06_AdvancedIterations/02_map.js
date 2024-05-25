// The map() method creates a new array with the results of calling a function for every array element.

const new_arr = [1,2,3,4,5,6,7,8,9,10];

console.log(new_arr.map( (num)=> {
    return num *= num;
} ))

    // Chaining Method

console.log(new_arr.map( (num) => num*=num )
                   .filter( (num) => num>=5))