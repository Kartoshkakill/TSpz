import { User } from "../../types/User";

export async function loadUsers(): Promise<void> {
    const container = document.getElementById("users") as HTMLDivElement;

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await response.json();

    data.forEach((user: User): void => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        `;
        container.append(card);
    });
}
