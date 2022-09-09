import {  createContext, useContext} from "react";
import { useState } from "react";
import { supabase } from "../supabase/Client"
export const TaskContext = createContext()


export const useTask = () =>{
    const context = useContext(TaskContext)
    if(!context) console.log("no existe este elemnto")
    return context
}
export const TaskContextProvider = ({children})=>{

    const [tasks, setTasks] =  useState([])
    const [adding, setAdding] = useState(false)
    const [loading, setLoading] = useState(false)
    ////validacion  de task mismo  id de retorno: 
    ////no queremos retornar las tareas de otros usuarios
  const getTasks = async(done = false)=>{
    setLoading(true)
    const user = supabase.auth.user()
   const {error, data} = await supabase
   .from("tabla")
   .select()
   .eq("userId", user.id)
   .eq("done", done)
   .order("id", {accending: true});
   if(error) throw error;
   setTasks(data)
   setLoading(false)
  } 
  ///creamos un task y esperamos que getTask nos retorne la tarea con nuestro id
  const createTask = async (taskName)=>{
    setAdding(true)
    try{
      const user = supabase.auth.user()
      const {error, data} = await supabase.from("tabla").insert({
          name : taskName,
          userId : user.id
      })
      if (error)throw error;
      setTasks([...tasks, ...data])
   }catch(error){
      console.log(error)
   }finally{
    setAdding(false)
   }
  
  }

  const deleteTask = async (id)=>{
    const user = supabase.auth.user()
    const {error, data} = await supabase.from("tabla")
    .delete()
    .eq("userId", user.id)
    .eq("id", id)

    if(error) throw error;
    setTasks(tasks.filter((tasks) => tasks.id !== id))

  }


  const updateTask = async (id, updateFields)=>{
    const user = supabase.auth.user()
    const {error, data} = await supabase.from("tabla")
    .update(updateFields)
    .eq("userId", user.id)
    .eq("id", id)
    if(error) throw error;
    setTasks(tasks.filter(task => task.id !== id))
  }

    return  < TaskContext.Provider value={{tasks, getTasks, createTask, 
    adding, loading, deleteTask,  updateTask}}>
        {children}
    </TaskContext.Provider>
}
