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


// import { useState } from 'react';
// import Nav from "./components/nav";
// import img from './assets/friendlandbg.jpg';
// import mbimg from './assets/mbview.jpg';
// import './App.css';
// import Login from "./components/login";  // Import with a capital letter
// import Card from "./components/Mycard";
// import Footer from './components/footer';


// function App() {
//   return (
//     <div className="relative flex flex-col items-center min-h-screen">
//       <Nav />

//       {/* Styled Header */}
//       <h1 className="text-center text-6xl sm:text-8xl lg:text-8xl pb-150  font-bold uppercase text-pink mt-16 sm:mt-20 drop-shadow-lg">
//         MATCH THE MOMENT...
//       </h1>

//       <Login />

//       <div id='landPage'>
//         <img src={window.innerWidth <= 768 ? mbimg : img}
//           alt="Friends"
//           className='vignette absolute top-0 left-0 opacity-85 -z-10 w-screen h-auto'
//         />
//       </div>
//       {/* <div className='place-content-around rounded-t-4xl flex w-screen h-screen bg-[#000000] gap-6 justify-center items-center'>
//         <Card title = "What is SayDate" discription = "The fun and safe way to connect with like-minded people. Set a date when both of you are ready"/>
//         <Card title = "Why choose SayDate?" discription = "" className="bg-[#A35FF7]"/>
//         <Card title = "About"/>
//       </div> */}

//       <div className='rounded-t-4xl flex w-screen h-screen bg-[#000000] gap-x-25 justify-center items-center'>
//         {/* Card 1 (Left) */}
//         <Card
//           title="What is SayDate"
//           discription="The fun and safe way to connect with like-minded people. Set a date when both of you are ready."
//           bgColor="#FF4F5A"
//         />

//         {/* Card 2 (Middle) - Increased Height */}
//         <Card
//           title="Why choose SayDate?"
//           discription="SayDate ensures a stress-free dating experience by matching you only when both are interested and ready."
//           bgColor="#A35FF7"
//           isTall // New Prop for Height Increase
//         />

//         {/* Card 3 (Right) */}
//         <Card
//           title="About"
//           discription="SayDate is designed to make meaningful connections effortless. Our platform is fun, safe, and intuitive."
//           bgColor="#FFA500"
//         />
//       </div>

//       <Footer/>




//     </div>
//   );
// }

// export default App;



import { motion } from "framer-motion";
import Nav from "./components/nav";
import img from './assets/friendlandbg.jpg';
import mbimg from './assets/mbview.jpg';
import './App.css';
import Login from "./components/login";
import Card from "./components/Mycard";
import Footer from './components/footer';

const text = "MATCH THE MOMENT...";

// Define animation variants
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, ease: "easeOut", duration: 0.3 }
  })
};

function App() {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      <Nav />

      {/* Animated Header - Letter by Letter */}
      <h1 className="text-center text-6xl sm:text-8xl lg:text-8xl pb-150 font-bold uppercase text-pink mt-16 sm:mt-20 drop-shadow-lg flex">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter} {/* Keeps spaces */}
          </motion.span>
        ))}
      </h1>

      <Login />

      <div id='landPage'>
        <img src={window.innerWidth <= 768 ? mbimg : img}
          alt="Friends"
          className='vignette absolute top-0 left-0 opacity-85 -z-10 w-screen h-auto'
        />
      </div>

      {/* Second Page */}

      <div className='rounded-t-[10rem] flex w-screen h-screen bg-[#000000] gap-x-25 justify-center items-center'>
        <Card title="What is SayDate" discription="The fun and safe way to connect with like-minded people. Set a date when both of you are ready." bgColor="#FF4F5A" />
        <Card title="Why choose SayDate?" discription="SayDate ensures a stress-free dating experience by matching you only when both are interested and ready." bgColor="#A35FF7" isTall />
        <Card title="About" discription="SayDate is designed to make meaningful connections effortless. Our platform is fun, safe, and intuitive." bgColor="#FFA500" />
      </div>

      <Footer />
    </div>
  );
}

export default App;




