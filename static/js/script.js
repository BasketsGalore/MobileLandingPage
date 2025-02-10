document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".hero, .split-section, .video-section, .review-section, footer");

    function fadeInOnScroll() {
        fadeElements.forEach((element) => {
            let elementPosition = element.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (elementPosition < screenHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load in case elements are already in view
});
