import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({isMenuOpen}) {
  console.log("ismenuopen : ",isMenuOpen)
  return (
    
      <>       
       {/*Mobile Menu Button */}
       
              <ul
      className={`md:hidden fixed top-0 left-0 h-full w-[200px] bg-[#000300] z-50
        transform transition-transform duration-500 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
              <div className="w-[130px] mx-4.5 ">
                  <img src="../../src/assets/images/logo.png" ></img>
                  {/*<h1 className="font-bold font-mono text-3xl ml-10 text-cyan-800 mt-2">bookm!Movie</h1>*/}
                  </div>
                <li className="font-bold font- text-white p-4 mx-8"><Link to="/home">Home</Link></li>
                <li className="font-bold font- text-white p-4 mx-8">Movies</li>
                <li className="font-bold font- text-white p-4 mx-8">Login</li>
                <Link to="/signup"><button className="bg-cyan-600  rounded-2xl text-black p-4 py-2 mx-8"> <h1 className="font-bold text-white">Signup</h1></button></Link>

            </ul>
            </>
       
  )
}

export default MobileMenu