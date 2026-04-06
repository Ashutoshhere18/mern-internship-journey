// Create login form (email + password).


import React,{useState} from 'react'

export default function LoginForm() {

    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email){
            alert("Email is Mandatory!")
        }
        else if(!password){
            alert("Enter Password to login")
        }
        else{
            alert("Login Successfully!");
            setEmail("");
            setPassword("");
        }
    }
  return (
    <form onSubmit={handleSubmit}>
       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
       <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>

       <button type="submit">Submit</button>

    </form>
     
    
  )
}
