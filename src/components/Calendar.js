import React ,{useState}from 'react'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import Slots from './Slots'
import {getDate,getDay,getMonth,} from './Dateformat.js'
import {checkDate} from './Controller.js'
const d1=new Date()
 const maxD=`${d1.getMonth()+2} , ${d1.getDate()} ${d1.getFullYear()}`
 const minD=`${d1.getMonth()+1} , ${d1.getDate()+1} ${d1.getFullYear()}`
         
function MyApp() {
   const [value, onChange] = useState(new Date(minD));
  let date=value.toString().split(' ')
    return (
    <div>
    <div className='calendar-container'>
    <header >
      <h3>Choose your Date and slot</h3>
       </header>
     <div>
   </div>
      <Calendar  minDate={new Date(minD)} maxDate={new Date(maxD)}  
        onChange={onChange} onClick={checkDate}
        value={value}  />
        <h2>{`${getDay(date)} ${getDate(date)} ${getMonth(date)}`}</h2>
    </div>
     <Slots date={date[2]}/>
    </div>
  );
}
export default MyApp