const mainIMG = document.querySelector("img");
const followers = document.querySelector("h1");
const input = document.querySelector("input");
const button = document.querySelector("button");

let apiURL;

button.addEventListener("click", () => {
    const username = input.value.trim();
    if (!username) {
        alert("Please enter a GitHub username");
        return;
    }

    apiURL = `https://api.github.com/users/${username}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiURL);
    xhr.send();

    let picURL, followersNumber;

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);
            for (let result in data) {
                if (result === "avatar_url") {
                    picURL = `${data[result]}`;
                }
                if (result === "followers") {
                    followersNumber = `${data[result]}`;
                }
                if (picURL && followersNumber) {
                    break;  // Exit loop early if both values are found
                }
            }
            card();
        }
    }

    function card() {
        if (mainIMG && followers) {  // Check if elements exist
            mainIMG.setAttribute("src", picURL);
            followers.innerHTML = `Your followers are ${followersNumber}`;
        } else {
            console.error('Required elements are not found in the DOM.');
        }
    }
});
