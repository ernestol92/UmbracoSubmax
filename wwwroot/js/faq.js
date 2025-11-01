document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const openItem = document.querySelector(".accordion-item.active");

            // Close the currently open item (if it's not the same)
            if (openItem && openItem !== item) {
                openItem.classList.remove("active");
            }

            // Toggle the clicked one
            item.classList.toggle("active");
        });
    });
});