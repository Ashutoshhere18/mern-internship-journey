import React from 'react'

// Show current year dynamically

export default function Year() {

const date=new Date();
const Year=date.getFullYear();

  return (
  <>
    <h1 className="color:white"> Current Year: {Year}</h1>
  </>
  )
}
