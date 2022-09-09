import {useTask} from "../contex/TaskContex"
import { useEffect } from "react"
import TaskCard from "./TaskCard"

export default function TaskList({done = false}) {
const {tasks, getTasks, loading} = useTask()

useEffect(()=>{
  getTasks(done)
},[done])

function renderTask(){
  if(loading){
    return <p>...loading</p>
    }else if(tasks.length === 0){
     return <h3>not task</h3>
    }else{
      return (
        <div>
          {
            tasks.map(task=>(
            <TaskCard task={task} />
            ))
          }
        </div>
      )
    }
}

return <div>
  {renderTask()}
</div>

}
