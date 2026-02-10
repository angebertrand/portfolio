const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbText = document.getElementById("lightbox-text");

let currentImages = []; 
let currentIndex = 0;

/* --- OUVERTURE --- */
document.querySelectorAll(".images-container").forEach(container => {
    const images = [...container.querySelectorAll(".image-item")];

    images.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentImages = images;
            currentIndex = index;

            const img = item.querySelector("img");
            const text = item.querySelector(".image-text");

            lbImg.src = img.src;
            lbText.textContent = text ? text.textContent : "";
            lightbox.classList.add("active");
        });
    });
});

/* --- NAVIGATION --- */
document.querySelector(".arrow-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightbox();
});

document.querySelector(".arrow-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightbox();
});

function updateLightbox() {
    const item = currentImages[currentIndex];
    const img = item.querySelector("img");
    const text = item.querySelector(".image-text");

    lbImg.src = img.src;
    lbText.textContent = text ? text.textContent : "";
}

/* --- FERMETURE --- */
document.querySelector(".lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("active");
});

/* Fermer en cliquant sur le fond */
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
});
