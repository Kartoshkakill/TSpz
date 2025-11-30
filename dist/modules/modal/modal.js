"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModal = initModal;
function initModal() {
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    openBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
    modal.addEventListener("click", (e) => {
        if (e.target === modal)
            modal.classList.add("hidden");
    });
}
