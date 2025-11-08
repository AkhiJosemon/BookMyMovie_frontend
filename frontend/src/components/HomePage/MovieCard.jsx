import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../../assets/CSS/MovieCard.css";
import MobileMenu from "./MobileMenu";
import { FaLocationDot } from "react-icons/fa6";


function MovieCard({isMenuOpen, setIsMenuOpen}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [direction, setDirection] = useState(null);

  const movies = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6k0hZRg2b_hv1aWgneMoz9wSp18Xy7m1MlA&s",
    "https://www.tallengestore.com/cdn/shop/products/Oppenheimer-ChristopherNolan-CillianMurphy-HollywoodMoviePoster_dda4d4f7-bbf8-4060-a118-df20204eacbe.jpg?v=1691369026",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzbEm9vkMkENbJyzxYLDBwTxGoxvuEwGafQ&s",
    "https://images-cdn.ubuy.co.in/651b547adec671093957a252-batman-the-dark-knight-framed-movie.jpg",
    "https://picsum.photos/id/1021/400/600",
    "https://picsum.photos/id/1022/400/600",
  ];

  const handleMouseMove = (e) => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const threshold = rect.width * 0.3; // 30% from edges
    if (mouseX < threshold) {
      setDirection("left");
      swiper.slidePrev();
    } else if (mouseX > rect.width - threshold) {
      setDirection("right");
      swiper.slideNext();
    } else {
      setDirection(null);
    }
  };

  return (
    <>
  
    <div className="bg-gray-950  flex ">
       <div className="text-cyan-400 text-3xl p-2 mx-6">
      <FaLocationDot />
      </div>
      <h1 className="text-white font-mono mt-3 \]">Location</h1>
    </div>
  
    
   <div className="fixed h-full z-50">
        {/* Always render MobileMenu */}
     <MobileMenu isMenuOpen={isMenuOpen} />

</div>
    <div className="w-full flex flex-col items-center bg-gray-950 py-10 relative">
      <h1 className="text-3xl font-semibold text-cyan-400 mb-6">
        🎬 Recommended Movies
      </h1>

      <div
        onMouseMove={handleMouseMove}
        className="relative w-full flex justify-center"
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="max-w-5xl custom-swiper"
        >
          {movies.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className={`movie-slide ${
                  i === activeIndex ? "active" : ""
                } transition-all duration-500`}
              >
                <img
                  src={img}
                  alt={`Movie ${i + 1}`}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 text-lg font-medium text-white">
        Selected Movie:{" "}
        <span className="text-cyan-600 font-bold">#{activeIndex + 1}</span>
      </div>
    </div>
   
    </>
  );
}

export default MovieCard;
