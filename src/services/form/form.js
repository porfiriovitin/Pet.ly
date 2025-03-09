import dayjs from "dayjs";
import { scheduleNew } from "../API/NewSchedule.js";
import { hoursLoad } from "../schedules/hours-load.js";
import { SchedulesShow } from "../schedules/schedulesShow.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const PetName = document.getElementById("PetName");
const OwnerName = document.getElementById("OwnerName");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;



form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const id = new Date().getTime();

    const Pet = PetName.value.trim();

    const Owner = OwnerName.value.trim();

    const hourElement = document.querySelector(".HourSelected");

    const hourSelected = hourElement.textContent;

    const When = selectedDate.value;

    console.log(When);

    await scheduleNew({
      id,
      Pet,
      Owner,
      hourSelected,
      When,
    });

    hourElement.classList.add("unavailable");

    SchedulesShow({ When });

    PetName.value = "";
    OwnerName.value = "";
  } catch (error) {
    console.log(error);
  }
});
