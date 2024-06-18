    // A call refers to the act of invoking or executing a function or method
function SetUsername(username) {
    this.username = username;
}

function CreateUser(username, email) {
    SetUsername.call(this, username);
    this.email = email;
}


let newPerson = new CreateUser("safi-thecoder", "m.safi.ullah@outlook.com")

console.log(newPerson)