// 1. Show "Admin" if role = admin.

import React, { useState } from 'react'

export default function RoleBasedUI() {

    const [role,setRole]=useState("");
    const [isAdmin,setIsAdmin]=useState(false);

  return (

    <>
    <input type="text" value={role} onChange={(e)=>setRole(e.target.value)} />
    <button onClick={()=>{
        if(role.toLowerCase()=="admin"){
         setIsAdmin(true)
        }else{
            setIsAdmin(false);
        }
    }}>Check Role</button>

    {isAdmin && <h1>Hello Admin!!</h1> }
    </>
  )
  
}
