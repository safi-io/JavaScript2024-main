let cityInput = document.querySelector("#city-input");
let weatherButton = document.querySelector("#get-weather");
let resultSpan = document.querySelector("#temp-value");


weatherButton.addEventListener("click", ()=> {
    if(cityInput.value === "") {alert("Write City Name..."); return;}
    const mainURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=a8f024812ff5ae393c2bf36d409f504c&units=metric`;
    getWeather(mainURL);
})


async function getWeather(mainURL) {
    try {
        let response = await fetch(mainURL);
        let data = await response.json();
        if(data.cod!=200) {
            alert(`${data.message}`)
            return;
        }
        resultSpan.innerHTML = data.main.temp;
    }catch(error) {
        alert(`${error}`)
    }
    cityInput.value = ""
}
