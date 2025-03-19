// import { useState } from 'react'
// import Nav from "./components/nav"
// import img from './assets/bgimage.jpg';
// import mbimg from './assets/mobilebg.jpg';
// import './App.css'
// import login from "./components/login"

// function App() {

//   return (
//      <div>
//       <Nav></Nav>
//       <div className='text-5xl'>helloooooo</div>
//       <login/>
//       <div id='landPage'>
//         <img src={window.innerWidth <= 768 ? mbimg : img} alt="Friends" className='absolute top-0 left-0 opacity-65 -z-10 w-screen h-auto'/>
//       </div>
//      </div>
//   )
// }

// export default App


import { useState } from 'react';
import Nav from "./components/nav";
import img from './assets/bgimage.jpg';
import mbimg from './assets/mobilebg.jpg';
import './App.css';
import Login from "./components/login";  // Import with a capital letter
import Card from "./components/Mycard"

function App() {
  return (
     <div className="relative flex flex-col items-center min-h-screen">
      <Nav />

      {/* Styled Header */}
      <h1 className="text-center text-6xl sm:text-8xl lg:text-8xl pb-150  font-bold uppercase text-pink mt-16 sm:mt-20 drop-shadow-lg">
        MATCH THE MOMENT...
      </h1>

      <Login />  
      
      <div id='landPage'>
        <img src={window.innerWidth <= 768 ? mbimg : img} 
             alt="Friends" 
             className='vignette absolute top-0 left-0 opacity-65 -z-10 w-screen h-auto' 
        />
      </div>
      <div className='place-content-around rounded-t-4xl flex w-screen h-screen bg-[#FB8D93] gap-6 justify-center items-center'>
        <Card title = "What is SayDate" discription = "The fun and safe way to connect with like-minded people. Set a date when both of you are ready"/>
        <Card title = "Why choose SayDate?" discription = "" className="bg-[#A35FF7]"/>
        <Card title = "About"/>
      </div>
    </div>
  );
}

export default App;



