let now = new Date(); // Client Side -- Current date

console.log(now) // Printed Date
console.log(now.toDateString()) // Printed Date in readable form

console.log(now.getDate()) // Print Single Actual Date
console.log(now.getFullYear()) // Print Year
console.log(now.getMonth()) // Print Actual month, with jan as 0


// ++++++++++++++++++ TIME ++++++++++++++++++++++++
console.log("TIME")
console.log(now.getMilliseconds())
console.log(now.getSeconds())
console.log(now.getMinutes())
console.log(now.getHours())

// Printing Today's Date with readable method
console.log(now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear());
console.log(now.toLocaleString())
console.log(now.toDateString())