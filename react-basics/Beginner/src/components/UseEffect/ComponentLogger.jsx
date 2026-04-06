// Log when component loads.


import {useEffect} from 'react'

export default function ComponentLogger() {

useEffect(()=>{console.log("Component loaded")},[])
  return (
    <div>
       <h2>Check console when component loads</h2>
    </div>
  )
}
