import React, { useState }from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import Signup from '../signup/Signup';
import Login from '../signup/Login';
import Movies from './Movies/Movies';
import MovieList from './Movies/MovieList';
import Sign_Up from '../signup/Sign_Up';
import MovieDetails from './Movies/MovieDetails';
import Selection from './Movies/Selection';
import SeatSelection from './Movies/SeatSelection';
import Bill from './Movies/Payment/Bill';
import Theater_Home from '../Theater/Theater_Home';

function Layout() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const location = useLocation();
  const hideNavbarPaths = ["/seatselection", "/bill" ,"/theaterhome" ];

const hideNavbar = hideNavbarPaths.includes(location.pathname);

  const movies = [
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    description: "A skilled thief enters people's dreams to steal secrets.",
    rating: "8.8",
  },
  {
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "Explorers travel through a wormhole in space.",
    rating: "8.6",
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman faces the Joker in Gotham City.",
    rating: "9.0",
  },
  {
    title: "Avatar",
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    description: "A marine on an alien planet finds new meaning.",
    rating: "7.8",
  },
  {
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description: "A hacker discovers a shocking truth about reality.",
    rating: "8.7",
  },
  {
    title: "Gladiator",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    description: "A betrayed Roman general seeks revenge.",
    rating: "8.5",
  },
  {
    title: "Titanic",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    description: "A love story unfolds aboard the ill-fated ship.",
    rating: "7.9",
  },
  {
    title: "Joker",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description: "A failed comedian's descent into madness.",
    rating: "8.5",
  },
  {
    title: "Avengers: Endgame",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "The Avengers assemble for one final stand against Thanos.",
    rating: "8.4",
  },
  {
    title: "Spider-Man: No Way Home",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "Spider-Man faces multiverse villains after a spell goes wrong.",
    rating: "8.3",
  },
  {
    title: "The Shawshank Redemption",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    description: "Two imprisoned men bond over years, finding redemption.",
    rating: "9.3",
  },
  {
    title: "Forrest Gump",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    description: "A kind-hearted man experiences key moments in history.",
    rating: "8.8",
  },
  {
    title: "Fight Club",
    poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    description: "An office worker forms a secret underground club.",
    rating: "8.8",
  },
  {
    title: "The Godfather",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    description: "The aging patriarch of a crime dynasty transfers power.",
    rating: "9.2",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    description: "Frodo and Aragorn lead the final battle for Middle-earth.",
    rating: "9.0",
  },
  {
    title: "The Lion King",
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    description: "A lion cub must embrace his destiny as king.",
    rating: "8.5",
  },
  {
    title: "Dune: Part One",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    description: "A noble family becomes embroiled in a war over a desert planet.",
    rating: "8.1",
  },
  {
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/bafwJ4qWlAIuRzvQd8lA5q8NnW9.jpg",
    description: "The story of the man who created the atomic bomb.",
    rating: "8.7",
  },
  {
    title: "Parasite",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description: "A poor family infiltrates a wealthy household with dark results.",
    rating: "8.6",
  },
  {
    title: "The Wolf of Wall Street",
    poster: "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg",
    description: "A stockbroker rises to immense wealth through corruption.",
    rating: "8.2",
  },
];

  
  
  
  return (
     
        
      <div>
       
        {!hideNavbar && <Navbar isMenuOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen} />}


        <Routes>
          <Route path="/" element={<MovieCard isMenuOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen} />}/>
          <Route path="/home" element={<MovieCard isMenuOpen={isMenuOpen}  setIsMenuOpen={setIsMenuOpen} />}/>
          {/* <Route path="/signup" element={<Signup isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/> */}

          <Route path="/signup" element={<Sign_Up isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>

          <Route path="/login" element={<Login isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>
          {/* <Route path="/movies" element={<Movies movies={movies} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/> */}
          <Route path="/movies" element={<MovieList movies={movies} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>
          <Route path="/moviedetails" element={<MovieDetails  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>
          <Route path="/movieselection" element={<Selection movies={movies} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>
          <Route path="/seatselection" element={<SeatSelection movies={movies} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>
          <Route path="/bill" element={<Bill/>}/>


          <Route path="/theaterhome" element={<Theater_Home/>}/>







        </Routes>
        
      
     
      </div>
      
      
    
   
  );
}

export default Layout;