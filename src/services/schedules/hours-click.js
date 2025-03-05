export function HoursClick() {
    const hours = document.querySelectorAll(".hour");
    hours.forEach(hour => {
        hour.addEventListener("click", () => {
            hours.forEach(h => h.classList.remove("unavailable"));
            hour.classList.add("unavailable");
        });
    });
}