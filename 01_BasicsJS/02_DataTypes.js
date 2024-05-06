"use strict" // treat all code as newer version of JS

// alert("hello")  unable to run in Node.js

let fName = "safi" // String Datatype
let age = 19 // Number Datatype, Range is 2(53)
let phoneNumber = BigInt(1234567890); // Big Number
let love = false // Boolean Datatype
let state; // undefined
let country = null; // No value available
let province = Symbol("Punjab"); // Uniqueness


console.table([fName, age, love, phoneNumber, state, country, province])

console.table([typeof fName, typeof age, typeof love, typeof phoneNumber, typeof state, typeof country, typeof province]) // typeof is used to check the type of data..

