export function HoursClick() {
    const hours = document.querySelectorAll(".hour");
    hours.forEach(hour => {
        hour.addEventListener("click", () => {
            hours.forEach(h => h.classList.remove("HourSelected"));
            hour.classList.add("HourSelected");
        });
    });
}