const accountId = 12345; // It can't be changed

{
    let accountEmail = "hello@world.com";
    console.log(accountEmail); // It will work because let can be accessed in block
}

var accountPassword = "@123"; // Deprecate, Don't use var

accountCity = "Faisalabad"; // Can also decleare Variables, like this

let accountState; // Undefined

console.table([accountId, accountPassword, accountCity, accountState]); // Another way to log