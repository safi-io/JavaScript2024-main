const new_div = document.createElement("div"); // New div Created

new_div.className = "divy"; // Giving Class
new_div.id = "idy"; // Giving ID

// Setting Custom Attribute
new_div.setAttribute("title", "Title given by DOM")

// Custom Styles
new_div.style.backgroundColor = "purple";
new_div.style.color = "white";
new_div.style.textAlign = "center";

// Adding Text
new_div.innerText = "Hi, I am Divy: also known as Idy";
    // OR
const newText = document.createTextNode(", and I am Learning JS")
new_div.appendChild(newText)

// Appending
document.body.appendChild(new_div)