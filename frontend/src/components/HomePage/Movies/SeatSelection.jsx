import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function SeatSelection() {
  const [nofseats, setnofseats] = useState(null);
  const [seat_selected, setseat_selected] = useState(false);
  const [selected_seats, setSelected_seats] = useState(0);
  const [seatIndex, setSeatIndex] = useState([]);
  const [pay, setPay] = useState(false);
  const navigate=useNavigate();
  

  const seat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handle_seats_selected = (rowId, seatNumber) => {
  const seatId = rowId + seatNumber;

  // If seat is already selected, allow deselect
  if (seatIndex.includes(seatId)) {
    const newSeats = seatIndex.filter((s) => s !== seatId);
    setSeatIndex(newSeats);
    setSelected_seats((prev) => prev - 1);
    setPay(newSeats.length === nofseats);
  } else {
    // If seat is not selected and limit is reached, do nothing
    if (selected_seats >= nofseats) return;

    const newSeats = [...seatIndex, seatId];
    setSeatIndex(newSeats);
    setSelected_seats((prev) => prev + 1);
    setPay(newSeats.length === nofseats);
  }
};


  const time = [
    { slot: "11:00 PM", type: "Dolby" },
    { slot: "02:00 PM", type: "Imax" },
    { slot: "11:00 PM", type: "Dolby" },
    { slot: "06:00 PM", type: "Dolby" },
    { slot: "11:00 PM", type: "4dx" },
  ];

  const seats = [
    {
      category: "Premium",
      price: 250,
      row: [
        { rowId: "A", seats: 20 },
        { rowId: "B", seats: 20 },
      ],
    },
    {
      category: "Executive",
      price: 180,
      row: [
        { rowId: "C", seats: 20 },
        { rowId: "D", seats: 20 },
      ],
    },
    {
      category: "Normal",
      price: 160,
      row: [
        { rowId: "E", seats: 20 },
        { rowId: "F", seats: 20 },
      ],
    },
  ];

  const number_of_seats = () => {
    if (nofseats !== null) {
      setseat_selected(true);
    }
  };

  return (
    <div className="relative flex justify-center w-full bg-black min-h-screen p-4">
      {/* Seat count popup */}
      {!seat_selected && (
        <div className="absolute top-0 left-0 w-full flex justify-center items-center min-h-screen p-2">
          <div className="flex flex-col border-2 py-12 border-gray-400 items-center w-full lg:w-1/3 p-4 bg-white rounded-2xl">
            <h1 className="text-black font-bold text-xl">How many seats?</h1>

            <img
              className="h-10 w-14 mt-2"
              src="https://i.fbcd.co/products/resized/resized-1500-1000/2111-m05-i039-n054-mainpreview-13dba5680a3e3491c45d5defaca4c72accc00f6693279eb50d5dad488ba0fc52.webp"
              alt="Seat"
            />

            <div className="flex flex-row flex-wrap justify-center font-semibold gap-2 p-6">
              {seat.map((num) => (
                <button
                  key={num}
                  onClick={() => setnofseats(num)}
                  className={`rounded-xl w-10 h-10 flex items-center justify-center 
                    text-black font-bold text-sm
                    hover:bg-cyan-700 cursor-pointer transition-all
                    ${nofseats === num ? "bg-orange-500" : "bg-gray-200"}`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={number_of_seats}
              className="bg-cyan-800 text-white rounded-xl text-xl w-full p-4 hover:bg-cyan-600 transition-all"
            >
              Select Seats
            </button>
          </div>
        </div>
      )}

      {/* Pay Button */}
      {pay && (
        <div className="fixed bottom-0 left-0 flex justify-center bg-gray-900 w-full p-4 transition-all duration-500 ease-out">
          <button onClick={()=>navigate("/bill")} className="bg-red-600 p-4 rounded-xl text-white font-bold text-lg hover:scale-105 transition-all">
            Pay Now
          </button>
        </div>
      )}

      {/* Main Seat UI */}
      <div className="flex flex-col p-4 w-full max-w-3xl">
        {/* Movie details */}
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-white font-bold text-xl">Interstellar</h1>
            <h1 className="text-white text-sm">Theater Name, place, time</h1>
          </div>

          <button
                     onClick={() => {
                     setseat_selected(false);
                     setSeatIndex([]);
                     setnofseats(0);
                     setSelected_seats(0);
                         }}
                    className="border-2 border-red-500 text-red-500 rounded-lg p-2 w-20"
                    >
  {nofseats} ticket
</button>

        </div>

        {/* Time buttons */}
        <div className="flex flex-row gap-4 mt-4 bg-gray-800 p-4 rounded-xl overflow-x-auto">
          {time.map((t, index) => (
            <button
              key={index}
              className="border-2 border-cyan-300 rounded-xl p-2 text-white text-center"
            >
              <h1 className="text-xs">{t.slot}</h1>
              <h1 className="text-[10px]">{t.type}</h1>
            </button>
          ))}
        </div>

        {/* Seat rows */}
        <div className="flex flex-col p-2 m-2 items-center rounded-xl w-full">
          {seats.map((section, index) => (
            <div key={index} className="flex flex-col items-center my-4 w-full">
              <h1 className="text-white font-bold text-lg">
                ₹{section.price} {section.category}
              </h1>

              <div className="h-[1px] w-full bg-gray-700 my-2"></div>

              {section.row.map((row, rowindex) => (
                <div
                  key={rowindex}
                  className="flex items-center gap-1 mt-2 w-full overflow-x-auto scrollbar-hide"
                >
                  <h1 className="text-cyan-500 font-bold w-6 text-center">
                    {row.rowId}
                  </h1>

                  <div className="flex gap-1">
                    {Array.from({ length: Number(row.seats) }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handle_seats_selected(row.rowId, i + 1)}
                        className={`
                          flex items-center justify-center 
                          rounded text-[10px] font-bold 
                          transition-all select-none
                          hover:cursor-pointer
                          w-[clamp(18px,3vw,26px)]
                          h-[clamp(18px,3vw,26px)]
                          
                          ${
                            seatIndex.includes(row.rowId + (i + 1))
                              ? "bg-gray-800 text-white"
                              : "bg-gray-200 text-gray-700"
                          }
                        `}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Screen */}
          <div className="flex h-2 m-10 w-64 bg-gray-600 justify-center rounded-xl border-2 border-white">
            <h1 className="text-white font-bold m-2">Screen</h1>
          </div>
        </div>
      </div>

      {/* Tailwind CSS for hidden scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default SeatSelection;
