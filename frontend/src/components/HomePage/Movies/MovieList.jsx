import React from 'react';
import MobileMenu from '../MobileMenu';
import { Link } from 'react-router-dom';

function MovieList({ movies = [], isMenuOpen, setIsMenuOpen }) {
  return (
    <>
    <div className="fixed h-full z-50">
        {/* Always render MobileMenu */}
     <MobileMenu isMenuOpen={isMenuOpen} />
</div>
      {/* Header */}
      <div className="flex text-cyan-300 font-mono items-center justify-center text-3xl my-4">
        🎬 Movies
      </div>


      <div className="h-screen overflow-y-scroll no-scrollbar">
      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-6 mx-4 mb-10">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300 w-full max-w-xs"
          >
            {/* Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />

            {/* Details */}
            <div className="p-4 flex flex-col justify-between h-[40%]">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-cyan-300 truncate">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {movie.description || "No description available."}
                </p>
              </div>

              <div className="flex justify-between items-center pb-2 mt-3">
                <span className="text-yellow-400 font-bold">
                  ⭐ {movie.rating || "N/A"}
                </span>
                <Link to="/moviedetails"><button className="bg-cyan-500 font-bold hover:bg-cyan-600 text-white px-3 py-1 rounded-md text-sm transition">
                  Book
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default MovieList;
