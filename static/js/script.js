document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once faded in
            }
        });
    }, { threshold: 0.15 }); // Adjusted threshold to ensure detection

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    console.log("Fade-in elements observed:", fadeElements.length); // Debugging check
});
