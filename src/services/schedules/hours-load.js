import { HoursToSchedule } from "../../utils/Hours";
import {HoursClick} from  "../schedules/hours-click.js"

const ulMorning = document.getElementById("morning");
const ulAfternoon = document.getElementById("afternoon");

export function hoursLoad() {
  try {
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

      HoursClick()
    });
  } catch (error) {
    console.log(error);
  }
}


