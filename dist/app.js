"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ELEMENTS
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const usersContainer = document.getElementById("users");
// MODAL OPEN/CLOSE
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
// FETCH USERS
function loadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/users");
        const data = yield res.json();
        data.forEach((user) => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        `;
            usersContainer.append(card);
        });
    });
}
loadUsers();
// SCROLL ANIMATION
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".user-card");
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});
