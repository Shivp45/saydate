
// import React from 'react';

// const Login = () => {
//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 px-4 pt-100 pb-380 ">
//             <button className="text-black font-semibold py-3 px-6 rounded-lg bg-[#FF9671] w-full max-w-[200px] sm:w-64">
//                 Login
//             </button>

//             <button className="text-black font-semibold py-3 px-6 rounded-lg bg-[#FFB6C1] w-full max-w-[200px] sm:w-64">
//                 Create an account!!
//             </button>
//         </div>
//     );
// };

// export default Login;




// import React from 'react';

// const Login = () => {
//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 px-4 pt-100 pb-380">
//             {/* Login Button with Hover Effect */}
//             <button className="text-black font-semibold py-3 px-6 rounded-full bg-[#FF9671] w-20 h-20  sm:w-64 
//                 transition-all duration-300 ease-in-out hover:bg-[#FF784E] hover:scale-105 hover:text-white">
//             </button>

//             {/* Create Account Button with Hover Effect */}
//             <button className="text-black font-semibold py-3 px-6 rounded-lg bg-[#FFB6C1] w-full max-w-[200px] sm:w-64 
//                 transition-all duration-300 ease-in-out hover:bg-[#FF8FA2] hover:scale-105 hover:text-white">
//             </button>
//         </div>
//     );
// };

// export default Login;

// import React from 'react';

// const Login = () => {
//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 px-4 pt-100 pb-380">
//             {/* Login Button - Fully Circular Initially */}
//             <button className="text-black font-semibold flex justify-center items-center w-20 h-20 
//                 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
//                 hover:w-64 hover:h-12 hover:rounded-lg hover:bg-[#FF784E] hover:text-white">
//                     h
//             </button>

//             {/* Create Account Button - Fully Circular Initially */}
//             <button className="text-black font-semibold flex justify-center items-center w-20 h-20 
//                 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
//                 hover:w-64 hover:h-12 hover:rounded-lg hover:bg-[#FF8FA2] hover:text-white">
//                 c
//             </button>
//         </div>
//     );
// };

// export default Login;

// import React from 'react';

// const Login = () => {
//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 px-4 pt-100 pb-380">
//             {/* Login Button - Expands Left */}
//             <button className="text-black font-semibold flex justify-center items-center w-20 h-20 
//                 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
//                 hover:w-64 hover:h-12 hover:rounded-lg hover:bg-[#FF784E] hover:text-white hover:translate-x-[-4rem]">
//                 L
//             </button>

//             {/* Create Account Button - Expands Left */}
//             <button className="text-black font-semibold flex justify-center items-center w-20 h-20 
//                 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
//                 hover:w-64 hover:h-12 hover:rounded-lg hover:bg-[#FF8FA2] hover:text-white hover:translate-x-[-4rem]">
//                 C
//             </button>
//         </div>
//     );
// };

// export default Login;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";


// import React, { useState } from 'react';

// const Login = () => {
//     const [isHoveredLogin, setIsHoveredLogin] = useState(false);
//     const [isHoveredCreate, setIsHoveredCreate] = useState(false);

//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 px-4 pt-100 pb-170 pl-350">
//             {/* Login Button - Expands Left & Changes Text */}
//             <button 
//                 onMouseEnter={() => setIsHoveredLogin(true)}
//                 onMouseLeave={() => setIsHoveredLogin(false)}
//                 className="text-black font-semibold flex justify-center items-center w-15 h-15 
//                 bg-black rounded-full transition-all duration-300 ease-in-out 
//                 hover:w-64 hover:h-12 hover:rounded-3xl hover:bg-black hover:text-white hover:translate-x-[-4rem]">
//                 {isHoveredLogin ? "Login" : "L"}
//             </button>

//             {/* Create Account Button - Expands Left & Changes Text */}
//             <button 
//                 onMouseEnter={() => setIsHoveredCreate(true)}
//                 onMouseLeave={() => setIsHoveredCreate(false)}
//                 className="text-black font-semibold flex justify-center items-center w-15 h-15 
//                 bg-black rounded-full transition-all duration-300 ease-in-out 
//                 hover:w-64 hover:h-12 hover:rounded-3xl hover:bg-black hover:text-white hover:translate-x-[-4rem]">
//                 {isHoveredCreate ? "Create new account" : "C"}
//             </button>
//         </div>
//     );
// };

// export default Login;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//     const [hovered, setHovered] = useState(null);

//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6">
//             {/* Login Button */}
//             <button
//                 className={`flex items-center justify-center w-20 h-20 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
//                     ${hovered === "login" ? "w-64 h-12 rounded-lg" : ""}`}
//                 onMouseEnter={() => setHovered("login")}
//                 onMouseLeave={() => setHovered(null)}
//             >
//                 <FontAwesomeIcon icon={faSignInAlt} className="text-white text-2xl" />
//                 <span className={`ml-2 text-white ${hovered === "login" ? "inline" : "hidden"}`}>Login</span>
//             </button>

//             {/* Create Account Button */}
//             <button
//                 className={`flex items-center justify-center w-20 h-20 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
//                     ${hovered === "create" ? "w-64 h-12 rounded-lg" : ""}`}
//                 onMouseEnter={() => setHovered("create")}
//                 onMouseLeave={() => setHovered(null)}
//             >
//                 <FontAwesomeIcon icon={faUserPlus} className="text-white text-2xl" />
//                 <span className={`ml-2 text-white ${hovered === "create" ? "inline" : "hidden"}`}>Create Account</span>
//             </button>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//     const [hovered, setHovered] = useState(null);

//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6">
//             {/* Login Button */}
//             <button
//                 className={`relative flex items-center w-20 h-20 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
//                     ${hovered === "login" ? "w-64 h-12 rounded-lg transform -translate-x-16" : ""}`}
//                 onMouseEnter={() => setHovered("login")}
//                 onMouseLeave={() => setHovered(null)}
//             >
//                 {/* Icon - Always Centered */}
//                 <FontAwesomeIcon 
//                     icon={faSignInAlt} 
//                     className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl"
//                 />

//                 {/* Text - Appears on Hover */}
//                 <span className={`ml-12 text-white transition-opacity duration-300 ${hovered === "login" ? "opacity-100" : "opacity-0"}`}>
//                     Login
//                 </span>
//             </button>

//             {/* Create Account Button */}
//             <button
//                 className={`relative flex items-center w-20 h-20 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
//                     ${hovered === "create" ? "w-64 h-12 rounded-lg transform -translate-x-16" : ""}`}
//                 onMouseEnter={() => setHovered("create")}
//                 onMouseLeave={() => setHovered(null)}
//             >
//                 {/* Icon - Always Centered */}
//                 <FontAwesomeIcon 
//                     icon={faUserPlus} 
//                     className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl"
//                 />

//                 {/* Text - Appears on Hover */}
//                 <span className={`ml-12 text-white transition-opacity duration-300 ${hovered === "create" ? "opacity-100" : "opacity-0"}`}>
//                     Create Account
//                 </span>
//             </button>
//         </div>
//     );
// };

// export default Login;



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

// const Login = () => {
//     const [hovered, setHovered] = useState(null);

//     return (
//         <div className="absolute inset-0 flex flex-col justify-center items-end space-y-6 pr-8 transform -translate-y-20">
//             {/* Login Button */}
//             <button
//                 className={`relative flex items-center w-20 h-20 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
//                     ${hovered === "login" ? "w-64 h-12 rounded-lg justify-start pl-6 pr-4" : "justify-center"}`}
//                 onMouseEnter={() => setHovered("login")}
//                 onMouseLeave={() => setHovered(null)}
//             >
//                 {/* Icon - Moves to the Start */}
//                 <FontAwesomeIcon 
//                     icon={faSignInAlt} 
//                     className={`text-white text-2xl transition-all duration-300 
//                         ${hovered === "login" ? "mr-2" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}`}
//                 />

//                 {/* Text - Appears on Hover */}
//                 <span className={`transition-opacity duration-300 ${hovered === "login" ? "opacity-100" : "opacity-0 absolute"}`}>
//                     Login
//                 </span>
//             </button>

//             {/* Create Account Button */}
//             <button
//                 className={`relative flex items-center w-20 h-20 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
//                     ${hovered === "create" ? "w-64 h-12 rounded-lg justify-start pl-6 pr-4" : "justify-center"}`}
//                 onMouseEnter={() => setHovered("create")}
//                 onMouseLeave={() => setHovered(null)}
//             >
//                 {/* Icon - Moves to the Start */}
//                 <FontAwesomeIcon 
//                     icon={faUserPlus} 
//                     className={`text-white text-2xl transition-all duration-300 
//                         ${hovered === "create" ? "mr-2" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}`}
//                 />

//                 {/* Text - Appears on Hover */}
//                 <span className={`transition-opacity duration-300 ${hovered === "create" ? "opacity-100" : "opacity-0 absolute"}`}>
//                     Create Account
//                 </span>
//             </button>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="absolute inset-0 flex flex-col justify-center items-end space-y-6 pr-8 transform -translate-y-32 pb-210">
            {/* Login Button */}
            <button
                className={`relative flex items-center w-20 h-20 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
                    ${hovered === "login" ? "w-64 h-12 rounded-2xl justify-start pl-6 pr-4" : "justify-center"}`}
                onMouseEnter={() => setHovered("login")}
                onMouseLeave={() => setHovered(null)}
            >
                {/* Icon - Moves to the Start */}
                <FontAwesomeIcon 
                    icon={faSignInAlt} 
                    className={`text-white text-2xl transition-all duration-300 
                        ${hovered === "login" ? "mr-2" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}`}
                />

                {/* Text - Appears on Hover */}
                <span className={`transition-opacity duration-300 ${hovered === "login" ? "opacity-100" : "opacity-0 absolute"}`}>
                    Login
                </span>
            </button>

            {/* Create Account Button */}
            <button
                className={`relative flex items-center w-20 h-20 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
                    ${hovered === "create" ? "w-64 h-12 rounded-2xl justify-start pl-6 pr-4" : "justify-center"}`}
                onMouseEnter={() => setHovered("create")}
                onMouseLeave={() => setHovered(null)}
            >
                {/* Icon - Moves to the Start */}
                <FontAwesomeIcon 
                    icon={faUserPlus} 
                    className={`text-white text-2xl transition-all duration-300 
                        ${hovered === "create" ? "mr-2" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}`}
                />

                {/* Text - Appears on Hover */}
                <span className={`transition-opacity duration-300 ${hovered === "create" ? "opacity-100" : "opacity-0 absolute"}`}>
                    Create Account
                </span>
            </button>
        </div>
    );
};

export default Login;














