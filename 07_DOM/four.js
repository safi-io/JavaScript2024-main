
    // Editing LI

let new_li = document.createElement("li");
let text_node = document.createTextNode("Toyota");
new_li.appendChild(text_node)

const old_li = document.querySelector("li:nth-child(2)");
old_li.replaceWith(new_li)

    // Removing LI

let remove_li = document.querySelector("li:first-child");
remove_li.remove();