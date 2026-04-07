import React from 'react'

export default function FilterBar({changeFilter }) {
  return (
  <>
<button onClick={()=>{changeFilter("all")}}  type="button" className="btn btn-outline-danger">All</button>
<button onClick={()=>{changeFilter("completed")}}  type="button" className="btn btn-outline-warning">Completed</button>
<button onClick={()=>{changeFilter("pending")}}  type="button" className="btn btn-outline-info">Pending</button>
  </>
  )
}
