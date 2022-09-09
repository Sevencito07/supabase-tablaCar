import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {Routes, Route} from "react-router-dom"
import { supabase } from "./supabase/Client";
import { useEffect } from "react";
import {useNavigate}  from "react-router-dom"
import { TaskContextProvider } from "./contex/TaskContex";


function App() {
  const navigate = useNavigate();
useEffect(()=>{

  supabase.auth.onAuthStateChange((event, session)=>{
    console.log( event, session)
    if(!session){
      navigate("/login")
    }else{
      navigate("/")
    }
  })
},[])

  return (
    <>
      <TaskContextProvider>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
      </TaskContextProvider>
    </>
  );
}

export default App;
