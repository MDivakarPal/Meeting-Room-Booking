import { CAPACITY, DummySlot, DummyUser } from "./DataProviders";
import React, { useState } from "react";
const UserContext = React.createContext();
const SlotContext = React.createContext();
const FunctionalContext=React.createContext();
export default function ContextApi({ children }) {
const [usersDetails, setUserDetails] = useState(DummyUser);
const [slotDetails, setSlotDetails] = useState(DummySlot);
const [currentUser,setcurrentUser]=useState({})


//Set new user to array
const setUserData=({name,slot,date,desc})=>{
  setUserDetails(...usersDetails,{name,slot,date,desc})    
}

const setCurrentUserData=({userName:name1,meetingDesc:desc,slot,date},e)=>{
   if(name1 && desc)
   {
     setcurrentUser({name1,desc,slot,date})
     console.log(window.location.href)
     return true;
   }
   else
  { 
    alert('All fields are required')
    return false;
  }
}

const bookSlot=({date,slot,currentUser})=>{
  const {name1,desc}=currentUser;
  date=Number.parseInt(date)
  setcurrentUser({name1,desc,slot,date})
  let copyarry=[...slotDetails];
  if(CAPACITY -copyarry[date-1][slot]>0)
  {
  copyarry[date-1][slot]=copyarry[date-1][slot]+1
  if(copyarry[date-1][slot]<=CAPACITY)
  { 
    setSlotDetails(copyarry);
    return true;
  }
  }
  else{
    alert('Slot is not available')
    return false;
  }
}
/*
Features
1. Type name and Meeting Details moove to next page
2. Choose Date and validate it
3. Book slot


*/

  return (
    <FunctionalContext.Provider value={{setUserData,setCurrentUserData,bookSlot,currentUser}}>
    <div>
      <SlotContext.Provider value={{ slotDetails }}>
        <UserContext.Provider value={{ usersDetails }}>
                 {children}
        </UserContext.Provider>
      </SlotContext.Provider>

        </div>
        </FunctionalContext.Provider>
  );
}
export { UserContext, SlotContext ,FunctionalContext};