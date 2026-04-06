import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Year from './components/JSX/Year.jsx'
import Greeting from './components/Functional/Greeting.jsx'
import Nesting from './components/Functional/Nesting.jsx'
import Age from './components/props/Age.jsx'
import MultipleProps from './components/props/MultipleProps.jsx'
import Destructuring from './components/props/Destructuring.jsx'
import InteractiveDemo from './components/UseStateHook/InteractiveDemo.jsx'

import ButtonActions from './components/Events/ButtonActions.jsx'
import InputHandler from './components/Events/InputHandler.jsx'
import UserInteraction from './components/Events/UserInteraction.jsx'
import RoleBasedUI from './components/Conditional-Rendering/RoleBasedUI.jsx'
import ToggleButton from './components/Conditional-Rendering/ToggleButton.jsx'
import CountMessage from './components/Conditional-Rendering/CountMessage.jsx'
import RenderNumbers from './components/Lists & Keys/RenderNumbers.jsx'
import RenderObjects from './components/Lists & Keys/RenderObjects.jsx'
import RemoveFromList from './components/Lists & Keys/RemoveFromList.jsx'
function App() {
  

  return (
    <>
     <Year/>
     <Greeting/>
     <Nesting/>
     {/* <Age Age={20}/>
     <MultipleProps City="Surat" State="Gujarat"/>
     <Destructuring name="Umesh" age={19} city="Ahmedabad" work="Developer" /> */}
     {/* <InteractiveDemo/> */}
     {/* <ButtonActions/> */}
     {/* <InputHandler/> */}
     {/* <UserInteraction/> */}
     {/* <RoleBasedUI/> */}
     {/* <ToggleButton/> */}
     {/* <CountMessage/> */}
     {/* <RenderNumbers/> */}
     {/* <RenderObjects/> */}
     <RemoveFromList />
    </>
  )
}

export default App
