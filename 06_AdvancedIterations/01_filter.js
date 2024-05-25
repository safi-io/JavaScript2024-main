// The filter() method returns a new array with all elements that pass the test defined by the given function.

checkEven = (num) => {
    if(num%2==0) {
        return num;
    }
}

const new_arr = [1,2,3,4,5,6,7,8,9,10]

console.log(new_arr.filter(checkEven))