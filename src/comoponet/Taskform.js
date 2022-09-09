import { useState } from "react"
import { useTask } from "../contex/TaskContex"

export default function Taskform() {
const [taskName, setTaskName] = useState("")
const {createTask, adding}  = useTask()

//enviar task y id user
const handelSubmit= async (e)=>{
 e.preventDefault()
 createTask(taskName)
 setTaskName("")
}
  return (
    <div> 
       <form  onSubmit={handelSubmit}>
        <input 
        name="taskName"
        onChange={(e)=>setTaskName(e.target.value)}
        value={taskName}/>
        <button disabled={adding}>
         {adding ? "..adding" : "add"}</button>
       </form>
       
    </div>
  )
}
