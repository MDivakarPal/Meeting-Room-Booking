import {days,months} from './DataProviders'

const formateDate=(date)=>
{
   alert(date);
}
const getDate=(date)=>
{
    //Fri,Jun,25,2021,00:00:00,GMT+0530,(India,Standard,Time)
    // 0-Day   1-month   2-date  3-year 
    const res=date.toString().split(',');
    return res[2];   
}

const getFullDate=(date)=>{
    const res=date.toString().split(',');
    return (`${res[2]} ${months[res[1]]} ${res[2]}`)
}

const getMonth=(date)=>{
    const res=date.toString().split(',');
    return (`${months[res[1]][0]}`)   
}

const getDay=(date)=>{
    const res=date.toString().split(',');
    return (`${days[res[0]]}`)   
}

const getYear=(date)=>{
    const res=date.toString().split(',');
    return (res[3])   
}

export {formateDate,getDate,getFullDate,getMonth,getYear,getDay}