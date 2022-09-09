import React from 'react'
import { supabase } from '../supabase/Client'
import { useEffect } from 'react'
import  {useNavigate} from "react-router-dom"
import Taskform from '../comoponet/Taskform'
import { useState } from 'react'

import TaskList from '../comoponet/TaskList'

export default function Home() {
const [showTaskDoen, setShowTaskDone ] = useState(false)
const navigate  = useNavigate()
useEffect(()=>{
if(!supabase.auth.user()){
  navigate("/login")
}
},[navigate])
  return (
    <div>
      <div>Home</div>
      <button onClick={()=>supabase.auth.signOut()} >logout</button>
 
     <Taskform />
     <header>
      <span>task pendientes</span>
      <button onClick={()=>setShowTaskDone(!showTaskDoen)}>show task done</button>
     </header>
     <TaskList done={showTaskDoen} />
    </div>
  )
}
