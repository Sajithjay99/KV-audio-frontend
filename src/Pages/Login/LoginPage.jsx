import React from "react";
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const login = ()=>{ 
    console.log(email,password)
     
  }


  
  return (
    <div className="flex items-center justify-center w-full h-screen bg-picture">
      <div className="w-[400px] h-[400px] backdrop-blur-xl  flex justify-center items-center  flex-col relative">
        
        
          <img src="./logo.png" alt="Logo" className="w-[100px] h-[100px] object-cover border-[3px] rounded-full absolute top-[40px]" />

          <div className="absolute flex flex-col items-center justify-center top-[180px]">
          
          <input type="Email" placeholder="Email" className="p-[8px] mb-[15px] w-[300px] h-[35px] rounded-md" 
          value={email}
          
          onChange={
            (e)=>{
              setEmail(e.target.value)
            }
          }/>
          <input type="password" placeholder="Password" className="p-[8px] mb-[20px] w-[300px] h-[35px] rounded-md" 
          
          value={password}
          onChange={
            (e)=>{
              setPassword(e.target.value)
            }
          } />

          <button className="bg-yellow-200 w-[100px] h-[35px] border-[1px] rounded-xl" onClick={login} >Login</button>

          </div>
          
       
      </div>
    </div>
  );
}
