import React from 'react'
import MobileMenu from '../HomePage/MobileMenu';

function Sign_Up({isMenuOpen,IsSetMenuOpen}) {
  return (

   <>
    <div className="fixed h-full z-50">
        {/* Always render MobileMenu */}
     <MobileMenu isMenuOpen={isMenuOpen} />
    </div>
   
   <div class="flex justify-center pt-8 ">
    <form class="bg-gray-900 w-sm rounded-2xl">
        
        <div class="flex flex-col gap-8 items-center  p-8">
            <h1 class="text-cyan-400 font-bold">
            Sign Up
            </h1>
            <input type="text"  placeholder="username" class="bg-white rounded-md w-[90%] h-10 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"/>
            <input type="email" placeholder="email" class="bg-white rounded-md w-[90%] h-10 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"/>
            <input type="password" placeholder="password" class="bg-white rounded-md w-[90%] h-10 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"/>
            <input type="password" placeholder="confirm password" class="bg-white rounded-md w-[90%] h-10 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"/>
            <button class="bg-cyan-500 text-white p-2 h-10 font-sans font-bold rounded-xl w-[90%] hover:scale-105 hover:bg-cyan-400 transition-all duration-300 ease-in-out">signup</button>
            <p class="text-white">Already have an account? <a class="text-cyan-400">login</a></p>


        </div>
    </form>
   </div>
   </>
  )
}

export default Sign_Up;