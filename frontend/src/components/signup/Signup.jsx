import React from 'react'
import MobileMenu from '../HomePage/MobileMenu'

function Signup({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <div className="fixed h-full z-50">
        {/* Always render MobileMenu */}
        <MobileMenu isMenuOpen={isMenuOpen} />
      </div>

      {/* Background with overlay */}
      <div
        className="flex justify-center h-lvh bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured-small/movie-9pvmdtvz4cb0xl37.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Signup Form */}
        <form className="mt-2 relative w-[30%] h-[70%] bg-gray-900/80 backdrop-blur-lg text-cyan-400 rounded-2xl shadow-2xl p-8 font-mono">
          <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-md bg-white/90 text-black placeholder-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-white/90 text-black placeholder-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md bg-white/90 text-black placeholder-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-md bg-white/90 text-black placeholder-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white font-semibold shadow-lg"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Signup
