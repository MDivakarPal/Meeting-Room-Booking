import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { FunctionalContext } from './ContextApi'
export default function Thanks() {
    const {currentUser}=useContext(FunctionalContext)
    const {name1,desc,date,slot}=currentUser
    return (
        <div className='ThanksContainer'>
                <h1>Welcome </h1>
                <h2>{name1}</h2>
                <p>You have Booked for {desc}<br/>
                 on <b>{date}</b> with slot <b>{slot}</b>
                </p>
      <Link to='/'>  <button className='nextButton'>Book Another Slot
      </button></Link> 
       </div>
    )
}
