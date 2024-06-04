// let grey = document.querySelector("#grey");
// let pink = document.querySelector("#pink");
// let red = document.querySelector("#red");
// let purple = document.querySelector("#purple");


// grey.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = "grey";
// })

// pink.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = "pink";
// })

// red.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = "red";
// })

// purple.addEventListener("click", ()=> {
//     document.body.style.backgroundColor = "purple";
// })


// OR

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button)=> {
    button.addEventListener("click", (e) => {
        document.body.style.backgroundColor = e.target.id;
    })
}) 
