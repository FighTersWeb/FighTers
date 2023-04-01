function hamburgerRotate(x) {
    x.classList.toggle("change");
    var y = document.getElementsByClassName("nav-dropdown");
    for (var i = 0; i < y.length; i++) {
        y[i].classList.toggle("hamburger-active");
    }
}