import { useTask } from "../contex/TaskContex"

export default function TaskCard({task}) {
const {deleteTask, updateTask} = useTask()


const handelDelete =()=>{
deleteTask(task.id)
} 

const handelDone =()=>{
    updateTask(task.id, {done : !task.done})
}
return (
    <div>
        <div>
            <h2>{task.name}</h2>
          <p>{JSON.stringify(task.done)}</p>
          <div>
            <button
            onClick={handelDelete} >delete</button>
            <button 
            onClick={handelDone} >done</button>
          </div>
        </div>
    </div>
  )
}
