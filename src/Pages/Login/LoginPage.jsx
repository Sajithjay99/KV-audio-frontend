import React from "react";
import { useState } from "react";
import "./LoginPage.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()


 const handleonsubmit = (e)=>{  
    e.preventDefault()
   
    console.log( "submitted") 
    console.log(email)
    console.log(password)
    

    axios.post("http://localhost:3000/api/users/login",{
      email:email,
      password:password
    }).then((res)=>{
      console.log(res.data)
       toast.success("Login Successfull")
       
       const user = res.data.user
       
       if(user.role === "admin"){
          navigate("/admin/dashboard")
       }else{
        
          navigate("/")
       }

       
    }).catch((err)=>{
      console.log(err)
      toast.error("Login Failed")
    }) 
    
  }
      
      
 
  
  return (
    <div className="flex items-center justify-center w-full h-screen bg-picture">
      
      <form  onSubmit={handleonsubmit}>
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

          <button className="bg-yellow-200 w-[100px] h-[35px] border-[1px] rounded-xl"   >Login</button>

          </div>
         
       
      </div>
      </form>
    </div>
  );
}
