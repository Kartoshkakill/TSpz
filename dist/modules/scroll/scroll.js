"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initScrollAnimation = initScrollAnimation;
function initScrollAnimation() {
    window.addEventListener("scroll", () => {
        const cards = document.querySelectorAll(".user-card");
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    });
}
