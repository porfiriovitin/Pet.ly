import dayjs from "dayjs";
import { scheduleFetchByDay } from "../API/fetchByDay.js";

const morning = document.getElementById("atMorning");
const afternoon = document.getElementById("atAfternoon");
const selectedDate = document.getElementById("date");

export async function SchedulesShow({When}) {
    try {
        
        const selectedDateValue = selectedDate.value || dayjs().format("YYYY-MM-DD"); 
        const dailySchedules = await scheduleFetchByDay({ When });
        const hourElement = document.querySelectorAll(".hour");

        morning.innerHTML = "";
        afternoon.innerHTML = "";



        if (dailySchedules.length === 0) {
            console.log("Nenhum agendamento encontrado para o dia selecionado.");
            return;
        }

        // Itera sobre os agendamentos e os exibe
        dailySchedules.forEach(schedule => {
            const container = document.createElement("div");
            container.classList.add("Appointment_Container");

            const PetAndTutor = document.createElement("div");
            PetAndTutor.classList.add("PetAndTutor");

            const Pet = document.createElement("p");
            Pet.classList.add("pet");
            Pet.textContent = schedule.Pet;

            const Tutor = document.createElement("p");
            Tutor.classList.add("tutor");
            Tutor.textContent = schedule.Owner;

            PetAndTutor.append(Pet, Tutor);

            const scheduledHour = document.createElement("p");
            scheduledHour.classList.add("hourScheduled");
            scheduledHour.textContent = schedule.hourSelected;
            const SelectedHour = parseInt(scheduledHour.textContent);

            container.appendChild(PetAndTutor);
            container.appendChild(scheduledHour);
            
           
            if (SelectedHour <= 12) {
                morning.appendChild(container);
            } else {
                afternoon.appendChild(container);
            }
            
            hourElement.forEach(hour =>{
                if(hour.textContent === scheduledHour.textContent){
                    hour.classList.add("unavailable")
                }
            })

        });

    } catch (error) {
        console.error("Erro ao exibir agendamentos:", error);
    }
}

selectedDate.addEventListener("change", SchedulesShow);
