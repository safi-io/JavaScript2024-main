document.addEventListener("DOMContentLoaded", () => {
    const task = document.querySelector(".task");
    const submit = document.querySelector(".submit");
    const reset = document.querySelector(".reset");
    const result = document.querySelector(".result");
    const overlay = document.querySelector(".overlay");

    if (!task || !submit || !reset || !result) {
        console.error("One or more required elements are missing");
        return;
    }

    overlay.addEventListener("click", ()=> {
        overlay.parentElement.remove();
    })

    submit.addEventListener("click", () => {
        if (task.value === "") {
            alert("Write Something in Box");
            return;
        }

        const newLi = document.createElement("li");
        newLi.textContent = task.value;
        result.append(newLi);
        task.value = "";

        newLi.addEventListener("click", (e) => {
            e.target.classList.toggle("checked");
        });

        newLi.addEventListener("dblclick", (e) => {
            e.target.remove();
        });
    });

    reset.addEventListener("dblclick", () => {
        task.value = "";
        result.innerHTML = "";
    });
});
