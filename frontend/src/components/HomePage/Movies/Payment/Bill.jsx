import React from 'react'

function Bill() {
  return (

    <div className="flex justify-center items-center  mt-20">
    <div className="flex bg-gray-400 w-screen md:w-2xl justify-center  p-8 rounded-xl">
    <div className="flex flex-col gap-4 ">
        <div className="flex flex-col  rounded-xl w-screen md:w-xl text-[12px] bg-gray-200 text-black p-4  ">

            <div className="flex flex-row justify-between" ><h1 className="font-bold text-2xl">Movie Name</h1> 
            <div className="flex justify-end">
                    <div className="fixed flex flex-col items-end">
                              <h1 className="font-bold text-2xl mx-6 text-red-500">2 </h1>
                              <h1 className="font-bold text-xl">Tickets</h1>
                              </div>
                              </div>
                    </div>
            <h1 className="font-bold text-[15px] font-san mb-5">Date,day | Time</h1>
            <h1 className="text-gray-600 font-bold">Language</h1>
            <h1 className="text-gray-600 font-bold">Seat-a1,a2</h1>
            <h1 className="text-gray-600 font-bold">Theater Name</h1>
        </div>
        <div className="flex flex-col bg-gray-200  rounded-xl">
        <div className="flex gap-4 flex-row  border-gray-500  rounded-xl justify-between p-4">
            <div className=""><h1 className="text-gray-600 font-bold">Ticket's price  </h1></div>
            <div className=""><h1 className="text-gray-600 font-bold">900  </h1></div> 
        </div>
        <div className="flex gap-4 flex-row  border-gray-500 rounded-xl justify-between p-4">
            <div className=""><h1 className="text-gray-600 font-bold">Convenience fee  </h1></div>
            <div className=""><h1 className="text-gray-600 font-bold">150  </h1></div> 
        </div>
        <div className="h-[2px] bg-gray-700  opacity-35 m-4"></div>
        <div className="flex gap-4 flex-row  border-gray-500 rounded-xl justify-between p-4">
            <div className=""><h1 className="text-black font-bold">Total </h1></div>
            <div className=""><h1 className="text-black font-bold">1050  </h1></div> 
        </div>
        </div>
        <div className="flex flex-row bg-gray-200 rounded-xl justify-between  p-4 ">
          <div className=""><h1 className="">Total</h1><h1 className="font-bold">1050</h1></div>
          <div className=""><button className="flex bg-red-500 p-4 text-white rounded-xl font-bold hover:scale-110 duration-300 transition-all ">Razor pay</button></div>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Bill