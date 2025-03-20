// import React from 'react';

// const Card = (props) => {
//     return(
//         <div className='border-white w-90 h-80 bg-[#FF4F5A] rounded-xl flex flex-col items-center justify-start p-6 font-bold text-2xl'>
//             <h1>{props.title}</h1>
//             <h3 className='text-center pt-10 flex flex-col items-center text-2xl font-normal'>{props.discription}</h3>
//         </div>
//     );
// };

// export default Card;

// import React from 'react';

// const Card = ({ title, discription, bgColor }) => {
//     return (
//         <div 
//             className='border-white w-90 h-80 rounded-xl flex flex-col items-center justify-start p-6 font-bold text-2xl' 
//             style={{ backgroundColor: bgColor }}
//         >
//             <h1>{title}</h1>
//             <h3 className='text-center pt-10 flex flex-col items-center text-2xl font-normal'>{discription}</h3>
//         </div>
//     );
// };

// export default Card;

import React from 'react';

const Card = ({ title, discription, bgColor, isTall }) => {
    return (
        <div 
            className={`border-white w-90 ${isTall ? 'h-96' : 'h-80'} rounded-xl flex flex-col items-center justify-start p-6 font-bold text-2xl`} 
            style={{ backgroundColor: bgColor }}
        >
            <h1>{title}</h1>
            <h3 className='text-center pt-10 flex flex-col items-center text-2xl font-normal'>{discription}</h3>
        </div>
    );
};

export default Card;




