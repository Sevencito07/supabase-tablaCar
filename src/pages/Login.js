import React from 'react'
import { useState } from 'react'
import  {supabase}  from "../supabase/Client"
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"


export  default function Login() {
const navigate = useNavigate()
const [email, setEmail] = useState("")

const handelSubmit=async (e)=>{
    e.preventDefault()

try{
  const result = await supabase.auth.signIn({
    email,
  })
  console.log(result)
}
catch(error){
  console.error(error)
}
}

useEffect(()=>{
  if(supabase.auth.user()){
    navigate("/")
  }
},[navigate])

  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input  
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="@email.com"
             />
             <button >send</button>
        </form>
    </div>
  )
}
