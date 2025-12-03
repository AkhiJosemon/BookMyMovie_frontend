import React, { useState } from "react";
import { Link } from "react-router-dom";

function Selection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center my-2 mx-4 md:mx-10">

      {/* MOVIE HEADER */}
      <div className="text-white bg-gray-900 border border-cyan-300 rounded-3xl w-full">
        <div className="flex flex-col p-4">

          {/* Title */}
          <div className="flex gap-6 font-bold text-xl justify-center md:justify-start">
            <h1>Interstellar</h1>
            <h1>Language</h1>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
            <span className="border border-white rounded-2xl px-4 py-1 text-[10px]">Movie runtime : 1h 55m</span>
            <span className="border border-white rounded-2xl px-4 py-1 text-[10px]">A</span>
            <span className="border border-white rounded-2xl px-4 py-1 text-[10px]">Horror</span>
            <span className="border border-white rounded-2xl px-4 py-1 text-[10px]">Thriller</span>
          </div>

          <div className="h-[1px] w-full bg-cyan-300 mt-4"></div>

          {/* DATE + FILTERS */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">

            {/* Dates */}
            <div className="flex p-2 justify-center md:justify-start">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`flex flex-col rounded-xl items-center text-white p-2 mx-2 font-medium cursor-pointer transition-all duration-200 hover:bg-cyan-800 ${
                    selected === item ? "bg-cyan-400" : "bg-gray-900"
                  }`}
                >
                  <h1>THU</h1>
                  <h1>06</h1>
                  <h1>NOV</h1>
                </div>
              ))}
            </div>

            {/* Mobile filters */}
            <div className="flex md:hidden justify-between w-full px-4 mb-2">
              <div className="flex gap-6">
                <button className="text-white">Time</button>
                <button className="text-white">Price Range</button>
              </div>
              <button className="text-white">Search</button>
            </div>

            {/* Desktop filters */}
            <div className="hidden md:flex gap-6">
              <button className="text-white">Time</button>
              <button className="text-white">Price Range</button>
            </div>

            <div className="hidden md:flex">
              <button className="text-white">Search</button>
            </div>

          </div>
        </div>
      </div>

      {/* THEATRE SELECTION */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center w-full bg-gray-900 border-2 border-cyan-500 justify-between rounded-xl my-4 p-4">

          {/* Theatre Name */}
          <div className="flex items-center text-white font-sans mb-4 md:mb-0">
            <div className="w-3 h-3 bg-white rounded-full mx-2"></div>
            <h1 className="font-bold">M Cinemas</h1>
          </div>

          {/* Show Times Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full">

            {/* TIME BLOCK */}
            <Link to="/seatselection">
              <div className="flex flex-col text-white items-center border-2 rounded-xl p-2 border-green-400 h-14 justify-center cursor-pointer hover:border-cyan-400 hover:border-2 hover:scale-105 duration-100 transition-all">
                <h1 className="text-[13px] leading-tight">11 : 12 PM</h1>
                <h1 className="text-[9px] leading-tight">Dolby</h1>
              </div>
            </Link>

            {/* Duplicate blocks (you can map later) */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col text-white items-center border-2 rounded-xl p-2 border-green-400 h-14 justify-center"
              >
                <h1 className="text-[13px] leading-tight">11 : 12 PM</h1>
                <h1 className="text-[9px] leading-tight">Dolby</h1>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Selection;
