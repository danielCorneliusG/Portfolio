    const toggleBtn = document.getElementById("lang-toggle");
    const dropdown = document.getElementById("dropdown");

    const selectedFlag = document.getElementById("selected-flag");
    const selectedText = document.getElementById("selected-text");

    const items = document.querySelectorAll(".dropdown-item");

    const translatable = document.querySelectorAll("[data-en]");

    // Open / Close dropdown
    toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
    });

    // Language selection
    items.forEach(item => {

        item.addEventListener("click", () => {

            const lang = item.dataset.lang;

            if (lang === "pt") {

                selectedFlag.src = "https://flagcdn.com/w40/br.png";
                selectedText.textContent = "PT";

                translatable.forEach(el => {
                    el.textContent = el.dataset.pt;
                });

            } else {

                selectedFlag.src = "https://flagcdn.com/w40/us.png";
                selectedText.textContent = "EN";

                translatable.forEach(el => {
                    el.textContent = el.dataset.en;
                });
            }

            dropdown.classList.add("hidden");
        });
    });

    // Close dropdown when clicking outside
    window.addEventListener("click", (e) => {

        if (!e.target.closest(".lang-menu")) {
            dropdown.classList.add("hidden");
        }
    });