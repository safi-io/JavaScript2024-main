let clock = document.querySelector("#real-clock");


setInterval((time = () => {
    clock.innerHTML = "";
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let session = "A.M";

    if(now.getHours()>12) {
        hours = now.getHours()-12;
        hours = `0${hours}`
        session = "P.M";
    }

    if(now.getSeconds()<10) {
        seconds = now.getSeconds();
        seconds = `0${seconds}` 
    }

    if(now.getMinutes()<10) {
        minutes = now.getMinutes();
        minutes = `0${minutes}` 
    }


    let text = document.createTextNode(`${hours} : ${minutes} : ${seconds} ${session}`);

    clock.append(text)
}),500)