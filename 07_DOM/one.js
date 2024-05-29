// Selecting Elements from HTML file
let mainHeading = document.getElementById("real-heading")
let mainAnswer = document.getElementsByClassName("answer")
let selector = document.querySelector('h1'); // # for id, . for class (only first one will be selected)
let allSelector = document.querySelectorAll('h1'); // [0] can be used to access first element

// Doing Styling on elements
mainHeading.style.color = "red"

// Setting Attributes
mainHeading.setAttribute("class", "new-class") // overwrites

// Accessing Attributes
console.log(mainHeading.getAttribute("id"))
console.log(mainHeading.getAttribute("class"))

// Accessing Content
console.log(mainHeading.innerText) // Attributes Matters
console.log(mainHeading.textContent) // Attributes Doesn't matter 
console.log(mainHeading.innerHTML) // Full HTML Code

// Converting HTML List and Node List to Array
let newArr = Array.from(mainAnswer) // Now, we can use every Arr Property
let newArr2 = Array.from(allSelector) // Now, we can use every Arr Property