window.addEventListener('load', ()=> {
    const buttonsCollection = document.getElementsByTagName("button");
    const buttons = Array.from(buttonsCollection);
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const id = button.value
            axios.delete(`http://localhost:8000/jokes/${id}`);
            button.parentElement.parentElement.parentElement.remove()
        })
    });

    const submitButton = document.getElementById("submitNew");

    submitButton.addEventListener("click", () => {
        submitButton.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        const body = document.getElementById("body");
        const loading = document.createElement("h3");
        loading.textContent = "Creando tu chiste...";
        body.appendChild(loading);
        
        const title = document.getElementById("title");
        const start = document.getElementById("start");
        const end = document.getElementById("end");

        

        const newJokeObj = {
            title: title.value,
            start: start.value,
            end: end.value
        }

        axios({
            method: 'post',
            url: 'http://localhost:8000/jokes',
            data: newJokeObj
        })
        .then(() => {
            console.log("Joke created");
        })
    })
});
