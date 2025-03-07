// importando a limitação da data
import dayjs from "dayjs";
import { scheduleNew } from "../API/NewSchedule.js";
import { hoursLoad } from "../schedules/hours-load.js";

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const PetName = document.getElementById("PetName")
const OwnerName = document.getElementById("OwnerName")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value=inputToday
selectedDate.min=inputToday


    form.addEventListener("submit", async(event)=>{
    event.preventDefault();

    try{

        const id = new Date().getTime

        const Pet = PetName.value.trim()
        
        const Owner = OwnerName.value.trim()

        const hourSelected = document.querySelector(".HourSelected").textContent

        const When = selectedDate.value

        scheduleNew({
            id,
            Pet,
            Owner,
            hourSelected,
            When
        })

        PetName.value= ""
        OwnerName.value= ""

       
    }catch(error){
        console.log(error)
        alert("Selecione um horário")
    }  

})



