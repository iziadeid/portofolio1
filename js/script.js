const menu = document.getElementById("menu");
const actian = document.getElementById("actian");
menu.addEventListener("click", () => {
    handelmenu();

})

function handelmenu() {

    menu.classList.toggle("is-active");
    actian.classList.toggle("is-active");
}