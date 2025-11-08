import React from 'react'
import { Link } from 'react-router-dom'

function MovieDetails({movies = [], isMenuOpen, setIsMenuOpen }) {
  return (
    <div class="p-4" >

        <div class="flex  flex-col md:flex-row  border-cyan-400 p-10 bg-gray-900/80  shadow-lg shadow-cyan-900/40   rounded-xl ">
        
        <div class="flex  justify-center">
                 <img  class="rounded-xl w-full max-w-sm h-auto object-cover" src="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"/>
        </div>
        
       

        
        <div class="flex flex-col w-full  p-4 md:w-1/2 gap-10">
            <div class="flex justify-center md:justify-start ">
                <h1 class="text-white  font-bold text-2xl ">INTERSTELLAR</h1>
            </div>
            
            <div class="flex justify-between  bg-gray-800 p-4 rounded-xl ">
                <span className="text-yellow-400 font-bold">
                      ⭐ 6 
                </span>
                <h1 class="text-cyan-500 font-bold hover:scale-105 hover:text-cyan-400 transition-all duration-300 ease-in-out">
                    rate now
                </h1>
            </div >
        
            <div class="flex justify-between p-2 text-white ">
                <h1>Language</h1>
                <h1>date</h1>
            </div>
                <h1 class="text-white p-2">description</h1>
                <Link to="/movieselection"><button class="text-white p-4 w-full rounded-xl md:w-1/2  bg-cyan-500 font-bold hover:scale-105 hover:bg-cyan-400 transition-all duration-300 ease-in-out">Book Tickets</button></Link>
        </div>
        </div>

        <div class="flex flex-col   gap-6 p-4 bg-gray-950 rounded-lg mt-4 ">
            <h1 class="flex text-white justify-center font-bold font-sans text-xl">CAST</h1>

            <div class="flex flex-row gap-8 overflow-x-auto scrollbar-hide scroll-smooth">
                <div class="flex flex-col w-auto gap-2 items-center p-2">
                    <img  class="h-32 min-w-32 rounded-full object-cover" src="https://images.filmibeat.com/webp/192x258/img/popcorn/profile_photos/dulquer-salmaan-20230711114845-26925.jpg"></img>
                    <h1 class="text-white text-base font-sans">Dulquer Salman</h1>
                    <h1 class="text-gray-400">Actor</h1>
                </div>
                   
                <div class="flex flex-col w-auto gap-2 items-center p-2">
                    <img  class="h-32 min-w-32 rounded-full object-cover" src="https://images.filmibeat.com/webp/192x258/img/popcorn/profile_photos/dulquer-salmaan-20230711114845-26925.jpg"></img>
                    <h1 class="text-white text-base font-sans">Dulquer Salman</h1>
                    <h1 class="text-gray-400">Actor</h1>
                </div>
                   
                <div class="flex flex-col w-auto gap-2 items-center p-2">
                    <img  class="h-32 min-w-32 rounded-full object-cover" src="https://images.filmibeat.com/webp/192x258/img/popcorn/profile_photos/dulquer-salmaan-20230711114845-26925.jpg"></img>
                    <h1 class="text-white text-base font-sans">Dulquer Salman</h1>
                    <h1 class="text-gray-400">Actor</h1>
                </div>
                   
                <div class="flex flex-col w-auto gap-2 items-center p-2">
                    <img  class="h-32 min-w-32 rounded-full object-cover" src="https://images.filmibeat.com/webp/192x258/img/popcorn/profile_photos/dulquer-salmaan-20230711114845-26925.jpg"></img>
                    <h1 class="text-white text-base font-sans">Dulquer Salman</h1>
                    <h1 class="text-gray-400">Actor</h1>
                </div>
                   
                <div class="flex flex-col w-auto gap-2 items-center p-2">
                    <img  class="h-32 min-w-32 rounded-full object-cover" src="https://images.filmibeat.com/webp/192x258/img/popcorn/profile_photos/dulquer-salmaan-20230711114845-26925.jpg"></img>
                    <h1 class="text-white text-base font-sans">Dulquer Salman</h1>
                    <h1 class="text-gray-400">Actor</h1>
                </div>
                   
                <div class="flex flex-col w-auto gap-2 items-center p-2">
                    <img  class="h-32 min-w-32 rounded-full object-cover" src="https://images.filmibeat.com/webp/192x258/img/popcorn/profile_photos/dulquer-salmaan-20230711114845-26925.jpg"></img>
                    <h1 class="text-white text-base font-sans">Dulquer Salman</h1>
                    <h1 class="text-gray-400">Actor</h1>
                </div>
                     
                

                
            </div>
        </div>
    </div>
  )
}

export default MovieDetails