// ON MOBILE SCREENS
const navMenu = document.querySelector(".navMenu");
const hamburger = document.querySelector(".hamburgerMenu");
const navLink = document.querySelectorAll(".navLink");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
})

navLink.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// access the DOM using classname and store value in the menuBar variable
const menu = document.querySelector(".menuBar");
const listMenu = document.querySelector(".categoryListMenu");
const h4 = document.querySelector(".categories-h4");

// listen to click event on the accessed DOM
menu.addEventListener("click", () => {
    menu.classList.toggle("click");
    listMenu.classList.toggle("click");
    h4.classList.toggle("click");
})



