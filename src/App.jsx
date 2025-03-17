import { useState } from 'react'
import Nav from "./components/nav"
import img from './assets/bgimage.jpg';
import mbimg from './assets/mobilebg.jpg';
import './App.css'

function App() {

  return (
     <div>
      <Nav></Nav>
      <div id='landPage'>
        <img src={window.innerWidth <= 768 ? mbimg : img} alt="Friends" className='absolute top-0 left-0 opacity-65 -z-10 w-screen h-auto'/>
      </div>
     </div>
  )
}

export default App
