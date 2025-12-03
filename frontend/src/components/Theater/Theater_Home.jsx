import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

function Theater_Home() {
  const [login,setLogin]=useState(false);
  const [signup,setSignup]=useState(false);
  const [home,setHome]=useState(true);

  return (
    <div className="mx-4 md:mx-16">
    <div className="flex flex-row justify-between px-2 items-center">
        <div className="w-[180px]  hover:scale-120 transition-all duration-300 ease-in-out">
          <img src="../../src/assets/images/logo.png" ></img>
            {/*<h1 className="font-bold font-mono text-3xl ml-10 text-cyan-800 mt-2">bookm!Movie</h1>*/}
        </div>

        <div className="hidden md:flex flex-row gap-4">
           <div className=""><button onClick={()=>{setHome(false);setLogin(true);setSignup(false);}} className="text-white p-4 border-2 border-cyan-500 rounded-xl hover:cursor-pointer hover:scale-110 transition-all duration-300" >Login</button></div>
          <div className=""><button onClick={()=>{setHome(false);setLogin(false);setSignup(true);}} className="bg-cyan-500 p-4 rounded-xl font-bold text-white hover:cursor-pointer hover:scale-110 transition-all duration-300">Signup</button></div> 
        </div>

        <div className="md:hidden ">
          <button  className="text-3xl text-cyan-400  focus:outline-none"> 
                  <HiMenuAlt3 className="mx-4"  />
          </button>
        </div>


      </div>

      {/* body */}

      {home && (<div className="flex bg-gray-900 p-8  rounded-xl justify-center text-center mt-10">
          <h1 className="text-white ">
                     Welcome to Book My Movie!  
                          <br />
                    <span className="text-cyan-400 font-bold text-xl font-sans">
                                    This is THEATER MOVIE MANAGING PAGE
                    </span>
              </h1>

      </div>)}

      {login && (<div className="flex justify-center ">
        <div className="flex flex-col gap-8 bg-gray-800 rounded-xl p-8 w-[80%] md:w-2xl items-center">
          <h1 className="text-white text-center text-xl font-bold">Login</h1>
          <input type="email" placeholder="email" className=" h-10 p-4  w-[90%] bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"></input>
          <input type="password" placeholder='password' className="h-10 p-4 w-[90%] bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"></input>
          <button className="p-4 bg-cyan-500 rounded-xl text-white font-bold hover:bg-cyan-400 hover:cursor-pointer hover:scale-110 transition-all duration-300">Login</button>

        </div>
      </div>

      )}


      {signup && (<div className="flex justify-center ">
        <div className="flex flex-col gap-8 bg-gray-800 rounded-xl p-8 w-[80%] md:w-2xl items-center">
          <h1 className="text-white text-center text-xl font-bold">Signup</h1>
          <input type="email" placeholder="email" className=" h-10 p-4  w-[90%] bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"></input>
          <input type="password" placeholder='password' className="h-10 p-4 w-[90%] bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"></input>
          <input type="password" placeholder='confirm password' className=" h-10 p-4 w-[90%] bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"></input>

          <button className="p-4 bg-cyan-500 rounded-xl text-white font-bold hover:bg-cyan-400 hover:cursor-pointer hover:scale-110 transition-all duration-300">Signup</button>

        </div>
      </div>

      )}

    </div>
  )
}

export default Theater_Home