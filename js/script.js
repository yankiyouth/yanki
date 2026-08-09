const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (navbar) {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});