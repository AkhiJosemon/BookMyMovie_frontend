import React from 'react'
import { HiMenuAlt3,HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Navbar({isMenuOpen, setIsMenuOpen}) {
  
  return (
    <>
    <div className="flex justify-between  h-22  items-center border-b border-b-cyan-950">
        <div className="w-[180px] p-4 hover:scale-120 transition-all duration-300 ease-in-out">
          <img src="../../src/assets/images/logo.png" ></img>
            {/*<h1 className="font-bold font-mono text-3xl ml-10 text-cyan-800 mt-2">bookm!Movie</h1>*/}
        </div>
        <div>
            <ul className="hidden md:flex mx-10 items-center">
                <li className="font-bold font- text-white p-4"><Link to="/home" className="hover:text-cyan-500 hover:scale-125 transition-all duration-300 ease-in-out">Home</Link></li>
                <li className="font-bold font- text-white p-4"><Link to="/movies" className="hover:text-cyan-500 hover:scale-125 transition-all duration-300 ease-in-out">Movies</Link></li>
                <li className="font-bold font- text-white p-4"><Link to="/login" className="hover:text-cyan-500 hover:scale-125 transition-all duration-300 ease-in-out">Login</Link></li>
                <Link to="/signup"><button className="bg-cyan-600  rounded-2xl text-black p-4 py-2 hover:bg-cyan-400 hover:scale-125 transition-all duration-300 ease-in-out"> <h1 className="font-bold text-white ">Signup</h1>
                </button></Link>
                
            </ul>
             <button
                className="md:hidden text-3xl text-cyan-400  focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                > 
        {isMenuOpen ? <HiX className="mx-4" /> : <HiMenuAlt3 className="mx-4"  />}
      </button>
        </div>
       
    </div>
    </>
    
  )
}

export default Navbar