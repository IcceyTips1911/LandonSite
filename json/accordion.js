const accordions = document.querySelectorAll(".accordion");

accordions.forEach(button => {

    button.addEventListener("click", toggleAccordion);

    button.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleAccordion.call(this);
        }
    });

});

function toggleAccordion() {

    const panel = this.nextElementSibling;
    const isOpen = this.getAttribute("aria-expanded") === "true";

    // Close all
    document.querySelectorAll(".accordion").forEach(btn => {
        btn.setAttribute("aria-expanded", "false");
        btn.nextElementSibling.style.maxHeight = null;
        btn.nextElementSibling.classList.remove("open");
    });

    // Open clicked one
    if (!isOpen) {
        this.setAttribute("aria-expanded", "true");
        panel.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}