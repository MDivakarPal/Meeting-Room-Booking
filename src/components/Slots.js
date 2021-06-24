import React ,{useState}from 'react'
import {availableSolts,CAPACITY } from './DataProviders'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import {SlotContext,FunctionalContext } from './ContextApi';
const Slots=({date})=>{
  const {slotDetails} =useContext(SlotContext)   
  const {currentUser}=useContext(FunctionalContext)
  const {bookSlot}=useContext(FunctionalContext)
 const [slot,setSlot] =useState('10:00 Am')
 date=Number.parseInt(date)
 const getClasses=(a)=>{
  let res=CAPACITY-slotDetails[date-1][a]>=135 ? 'slots':'danger'
    if(a===slot)
    res+=` selected`;
  return  res;
 }

  const setCurrentSlot=(a)=>{
    if(CAPACITY-slotDetails[date-1][a]>0)
    setSlot(a)
  }

    return(
      <div className='slots-container'>
        {availableSolts.map(a=><div key={a+slotDetails[date][a]} onClick={()=>setCurrentSlot(a)}
         className={getClasses(a)}>{a}<br/>
        <b>{CAPACITY-slotDetails[date-1][a] }</b></div>)}  
        <div className='buttonContainer'>
      <Link to='/'>  <button className='nextButton'>Previous</button></Link>
     <Link to='/thanks'>  <button className='nextButton' onClick={()=>bookSlot({date,slot,currentUser})}>
        Submit
        </button></Link>
     </div>
          
      </div>
    );
}

export default Slots