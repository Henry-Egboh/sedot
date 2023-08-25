const hamburger = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

navLink.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))