
    // Tranversing
    
const parent = document.querySelector(".parent");
console.log(parent)
console.log(parent.children)

// Accessing all inner HTML of HTML Collection
for (let i=0; i<parent.children.length; i++) {
    console.log(parent.children[i].innerHTML)
}

// Accessing First Element
console.log(parent.firstElementChild)
// Accessing Last Element
console.log(parent.lastElementChild)

// Accessing Parent Element and Next Sibling Element
let firstDay = document.querySelector(".day");
console.log(firstDay.parentElement)
console.log(firstDay.nextElementSibling)

// Accessing Child nodes
console.log(parent.childNodes) // Everthing is being counted, even the line breaks and comments
