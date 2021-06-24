import {Link} from 'react-router-dom'
import { useContext,useState } from 'react';
import { FunctionalContext } from './ContextApi';
const InputData=()=>{
    const [userName,setname]=useState('');
    const [meetingDesc,setMeeting]=useState('');
    const {setCurrentUserData}=useContext(FunctionalContext)
    const [st,setStatus]=useState(false);
   



    return(
        <div className='input-container'>
         <h3 style={{marginTop:20+'px'}}>Meeting Room Booking</h3>
         <label><h3>Meeting Room</h3></label><br/>
         <select className='text-design'>
             <option>Meeting Room</option>
         </select>
         <br/>
         <br/>
         <label><h3>Name</h3></label><br/>
         <input type='text' onChange={(e)=>setname(e.target.value)} className='text-design' id='desc'
         placeholder='Enter Your Name'/>
         <br/>
         <br/>
         <label><h3>Meeting Description</h3></label><br/>
         <input type='text'  onChange={(e)=>{setMeeting(e.target.value);}} className='text-design' id='name'
         placeholder='Description'/><br/><br/>
         <Link to={st ? '/choosetime' : '/'}> <button
          onClick={()=>setStatus(setCurrentUserData({userName,meetingDesc}))}
         className='nextButton'>Choose Date</button></Link>
        </div>
        );
}
export default InputData;