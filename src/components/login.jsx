
import React from 'react';

const Login = () => {
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 px-4 pt-100 pb-180">
            <button className="text-black font-semibold py-3 px-6 rounded-lg bg-[#FF9671] w-full max-w-[200px] sm:w-64">
                Login
            </button>

            <button className="text-black font-semibold py-3 px-6 rounded-lg bg-[#FFB6C1] w-full max-w-[200px] sm:w-64">
                Create an account!!
            </button>
        </div>
    );
};

export default Login;
