import {creareTask} from "./addTask.js";
import dateElement from "./dateElement.js";
import {uniqueDates, orderDates} from "../services/date.js"

export const readTasks=()=>{
    const list =document.querySelector('[data-list]')
    const tasksList=JSON.parse(localStorage.getItem("tasks"))||[];
    const dates=uniqueDates(tasksList);
    orderDates(dates);
    dates.forEach((date)=>{
        const datemoment=moment(date,"DD/MM/YYYY")
        list.appendChild(dateElement(date));
        tasksList.forEach((task)=>{
            const taskDate=moment(task.dateForm,'DD/MM/YYYY')
            const diff=datemoment.diff(taskDate)
            if(diff===0){
            list.appendChild(creareTask(task));
            }
        })
    })
    
}