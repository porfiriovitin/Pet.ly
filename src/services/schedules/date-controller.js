import dayjs from "dayjs"


const SelectedDate = document.getElementById("date");
const Now = dayjs().format("YYYY-MM-DD")

SelectedDate.setAttribute("min", Now)

