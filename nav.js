const nav = document.querySelector("nav")
const menu = document.querySelector(".menu")
const bar = document.querySelectorAll(".bar")
const i = document.querySelectorAll("i")
const span = document.querySelectorAll("span")
const main = document.querySelector(".main")
const user = document.querySelector(".user")
const dispatch = document.querySelector(".dispatch")
const db = document.querySelector(".db")

menu.addEventListener("click", () => {
    nav.classList.toggle("open")
    bar[0].classList.toggle("kafelek")
    bar[1].classList.toggle("kafelek")
    bar[2].classList.toggle("kafelek")
    bar[3].classList.toggle("kafelek")
    i[0].classList.toggle("fa-bars")
    i[0].classList.toggle("fa-xmark")
    i[1].classList.toggle("edit")
    i[2].classList.toggle("edit")
    i[3].classList.toggle("edit")
    i[4].classList.toggle("edit")
    span[0].classList.toggle("text")
    span[1].classList.toggle("text")
    span[2].classList.toggle("text")
    span[3].classList.toggle("text")
})
