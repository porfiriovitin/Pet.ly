import {HoursToSchedule} from "../../utils/Hours";
import {HoursClick} from  "../schedules/hours-click.js";
import dayjs from "dayjs";

const ulMorning = document.getElementById("morning");
const ulAfternoon = document.getElementById("afternoon");
const nowTime = dayjs().hour()
const date = document.getElementById("date")

export function hoursLoad() {
  try {
    const selectedDateValue = date.value;
    const isFutureDate = dayjs(selectedDateValue).isAfter(dayjs(), 'day');

    HoursToSchedule.forEach((h) => {
      const [hour] = h.split(":");
      const hourToInt = parseInt(hour);

      const li = document.createElement("li");
      li.classList.add("hour");
      li.textContent = `${hourToInt}:00`;

      if (hourToInt < 12) {
        ulMorning.append(li);
      } else {
        ulAfternoon.append(li);
      }

      if (isFutureDate) {
        li.classList.remove("unavailable");
      } else {
        if (hourToInt < nowTime) {
          li.classList.add("unavailable");
        } else {
          li.classList.remove("unavailable");
        }
      }
      
      HoursClick()


    });
  } catch (error) {
    console.log(error);
  }
}

date.addEventListener("change", () => {
  ulMorning.innerHTML = "";
  ulAfternoon.innerHTML = "";

  hoursLoad();
});








