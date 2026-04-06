import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Year from './components/JSX/Year.jsx'
import Greeting from './components/Functional/Greeting.jsx'
import Nesting from './components/Functional/Nesting.jsx'
import Age from './components/props/Age.jsx'
function App() {
  

  return (
    <>
     <Year/>
     <Greeting/>
     <Nesting/>
      <Age Age={20}/>
    </>
  )
}

export default App
