/*
Datatypes and their return types.

-----There are two basic datatypes-----

    Primitive DataTypes (BBNNSSU)

     1 - Boolean
     2 - BigInt
     3 - Number
     4 - Null (Return Type is Object)
     5 - Symbol
     6 - String
     7 - Undefined
*/

let isLoggedin = true
let BigNumber = 123456543121n
let num = 228
let temperature = null
const sign = Symbol("Hi, I am a Symbol")
let answer = "I don't know"
let money;

console.table([typeof isLoggedin, typeof BigNumber, typeof num,
    typeof temperature, typeof sign, typeof answer, typeof money])

console.log("------------------------")

/*
    Non-Primitive (Refrence) DataTypes 
        (Almost all return types are objects)

     1 - Arrays (Return Type is Object) 
     2 - Objects (Return Type is Object)
     3 - Functions
*/

let heros = ["ironman", "superman", "spiderman"]
let Pakistan = {
    color : "green",
    province : 4,
    GDP : 374.7,
    developed : false
};
let func = function hw() {
    console.log("hello world");
}

console.table([typeof heros, typeof Pakistan, typeof func])

