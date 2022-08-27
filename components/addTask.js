import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteicon.js";
import {readTasks} from "./readTask.js"


export const addTask=(evento)=>{
    evento.preventDefault();
    const list=document.querySelector('[data-list]');    
    const input=document.querySelector('[data-form-input]');
    const calendar=document.querySelector('[data-form-date]');

    const value=input.value;
    const date=calendar.value;    
    const dateForm=moment(date).format('DD/MM/YYYY');

    const taskList=JSON.parse(localStorage.getItem('tasks'))||[];
    if(value===''||date===''){
        alert('Campo vacio')
        return 
    }
    input.value='';
    calendar.value='';

    const complete=false;
    const taskObj={value,dateForm,complete,id: uuid.v4()};


    taskList.push(taskObj);
    list.innerHTML='';
    localStorage.setItem("tasks",JSON.stringify(taskList));
    readTasks()
}



export const creareTask=({value, dateForm,complete,id})=>{    
    const task=document.createElement('li')
        task.classList.add('card');
    const taskContent=document.createElement('div');
    const check=checkComplete(id);
    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    
    const titleTask=document.createElement('span');    
        titleTask.classList.add('task');
        titleTask.innerHTML=value;    
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);    
    const dateElement=document.createElement('span');
        dateElement.innerHTML=dateForm
        task.appendChild(taskContent);
        task.appendChild(dateElement)
        task.appendChild(deleteIcon(id));    
    
    return task;
}