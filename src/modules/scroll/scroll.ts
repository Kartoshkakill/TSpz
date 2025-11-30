export function initScrollAnimation(): void {
    window.addEventListener("scroll", (): void => {
        const cards = document.querySelectorAll(".user-card") as NodeListOf<HTMLDivElement>;

        cards.forEach((card): void => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    });
}
