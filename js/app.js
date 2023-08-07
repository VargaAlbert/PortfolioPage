const button = document.querySelector(".js-light-mode");

button.addEventListener("click", () => {
    console.log("gomb megnyomva");
    document.documentElement.classList.toggle("light-mode");
});