let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let button = document.querySelector(".button");
let paragraph = document.querySelector(".BMI"); 

button.addEventListener("click", ()=> {
    let BMI = ((weight.value) / (height.value * height.value)) * 10000;
    let text = document.createTextNode(`Your BMI is ${BMI.toFixed(2)}`);
    paragraph.appendChild(text);
})