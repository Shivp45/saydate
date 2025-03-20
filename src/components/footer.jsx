import React from 'react'

export default function footer() {
    return (
        <div className='w-screen h-screen bg-black'>
            <div className='rounded-t-3xl w-auto h-100 bg-white mt-107 ml-19 mr-19'>
                <h1 className='text-center text-4xl font-bold pt-8'>About us</h1>
                <div className="flex justify-between w-full max-w-6xl mx-auto px-10 pt-8">
                    {/* Column 1 */}
                    <div className="pt-5 text-xl">
                        <h3>Quick Links</h3> <br />
                        <h3>Home</h3> <br />
                        <h3>Login</h3> <br />
                    </div>

                    {/* Column 2 */}
                    <div className="pt-5 text-xl">
                        <h3>Product</h3> <br />
                        <h3>Help and Support</h3> <br />
                        <h3>FAQ</h3> <br />
                    </div>

                    {/* Column 3 */}
                    <div className="pt-5 text-xl">
                        <h3>Privacy Policy</h3> <br />
                        <h3>Terms and Conditions</h3> <br />
                        <h3>Report an issue</h3>
                    </div>
                </div>


            </div>
        </div>
    )
}
