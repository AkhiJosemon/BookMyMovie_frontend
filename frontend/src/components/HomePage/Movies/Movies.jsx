import React from 'react';
import MobileMenu from "../MobileMenu";

function Movies({ movies = [], isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      {/* Always render Mobile Menu */}
      <div className="fixed h-full z-50">
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Background Section */}
      <div
        className="min-h-screen text-white py-12 px-6 flex flex-col items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url('https://wallpapers.com/images/hd/cinema-background-1920-x-1080-3v4a7f0s3l9g7mzz.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold text-cyan-400 mb-10 font-mono drop-shadow-lg">
          🎬 Trending Movies
        </h1>

        {/* Responsive Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-2xl shadow-lg overflow-hidden 
                         hover:scale-105 hover:shadow-cyan-500/40 
                         transition-transform duration-300 backdrop-blur-sm"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 flex flex-col justify-between h-[40%]">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-cyan-300 truncate">
                    {movie.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {movie.description || "No description available."}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-yellow-400 font-bold">
                    ⭐ {movie.rating || "N/A"}
                  </span>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-md text-sm transition">
                    Watch
                  </button>
                </div>
              </div>
            </div>  
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
