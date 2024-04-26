window.onload = function() {
    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        if (window.scrollY > 1) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
};
