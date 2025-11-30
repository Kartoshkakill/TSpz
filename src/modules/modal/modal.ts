export function initModal(): void {
    const modal = document.getElementById("modal") as HTMLDivElement;
    const openBtn = document.getElementById("openModal") as HTMLButtonElement;
    const closeBtn = document.getElementById("closeModal") as HTMLSpanElement;

    openBtn.addEventListener("click", (): void => {
        modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", (): void => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e: MouseEvent): void => {
        if (e.target === modal) modal.classList.add("hidden");
    });
}
