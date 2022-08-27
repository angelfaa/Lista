export const uniqueDates=(tasks)=>{
    const unique=[];
    tasks.forEach((task)=>{
        if(!unique.includes(task.dateForm)){
            unique.push(task.dateForm)
        }
    })
    return unique;
};
export const orderDates=(dates)=>{
    return dates.sort((a,b)=>{
        const firstDate=moment(a,"DD/MM/YYYY");
        const secondDate=moment(b,"DD/MM/YYYY");
        return firstDate-secondDate
    })
}