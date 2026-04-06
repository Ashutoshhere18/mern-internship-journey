// Toggle login/logout button.

import React from "react";
import { useState } from "react";


export default function ToggleButton() {
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin=()=>{
   if(isLogin){
    setIsLogin(false);
   }else{
    if(password==="12345678"){
       setIsLogin(true);
       setPassword("");
    }
   }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>{isLogin?"Log out":"Log in"}</button>
      {isLogin && <h1>Logged In Successfully!</h1>}
    </div>
  
  );

    
}
