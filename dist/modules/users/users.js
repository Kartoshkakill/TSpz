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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadUsers = loadUsers;
function loadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const container = document.getElementById("users");
        const response = yield fetch("https://jsonplaceholder.typicode.com/users");
        const data = yield response.json();
        data.forEach((user) => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        `;
            container.append(card);
        });
    });
}
