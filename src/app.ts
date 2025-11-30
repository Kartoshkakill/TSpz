// TYPES
type User = {
    id: number;
    name: string;
    email: string;
};

// ELEMENTS
const openBtn = document.getElementById("openModal") as HTMLButtonElement;
const closeBtn = document.getElementById("closeModal") as HTMLSpanElement;
const modal = document.getElementById("modal") as HTMLDivElement;
const usersContainer = document.getElementById("users") as HTMLDivElement;

// MODAL OPEN/CLOSE
openBtn.addEventListener("click", (): void => {
    modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", (): void => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e: MouseEvent): void => {
    if (e.target === modal) modal.classList.add("hidden");
});

// FETCH USERS
async function loadUsers(): Promise<void> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await res.json();

    data.forEach((user: User) => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
        `;
        usersContainer.append(card);
    });
}

loadUsers();

// SCROLL ANIMATION
window.addEventListener("scroll", (): void => {
    const cards = document.querySelectorAll(".user-card") as NodeListOf<HTMLDivElement>;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});
