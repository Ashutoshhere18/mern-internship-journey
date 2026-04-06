//  Fetch users and display names.

import React,{useEffect,useState} from 'react'

export default function FetchUsers() {

const[users,setUsers]=useState([]);
const[isLoading,setLoading]=useState(true);

useEffect(()=>{
    
    fetch("https://fakestoreapi.com/users")
    .then(res=>res.json())
    .then(data=>{
        setUsers(data)
        setLoading(false);
    })
    .catch(err=>{
        console.log(err);
        setLoading(false);
    });
     
},[]);


 if(isLoading){
        return<h1>Loading....</h1>
    }
   

  return (
    
  <>
  {
    
    users.map((user)=><div key={user.id}>
        <h1>{user.username}</h1>
        <h2>{user.email}</h2>
        <h4>{user.address.city}</h4>
      
    </div>)
  }

  
  </>
  )
}
