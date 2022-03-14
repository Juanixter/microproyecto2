import Tarjeta from "../components/Tarjeta/Tarjeta"
import Header from "../components/header/Header"
import axios from 'axios'
import { useEffect, useState } from "react";
import Peliculas from "../components/peliculas/Peliculas";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";


export default function Home() {

const [movies, setmovies] = useState([])

const fetchMovies = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=89060783682779e9d41229eaa3599d0b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
    
    const arr = [];

    arr.push(response.data.results[0]);
    arr.push(response.data.results[1]);
    arr.push(response.data.results[2]);
    arr.push(response.data.results[3]);
    arr.push(response.data.results[4]);
    arr.push(response.data.results[5]);

    setmovies(arr);

  } catch (error) {
    console.log(error);
  }  
  }; 

useEffect(() => {
    fetchMovies();
  }, []); 
  
  return (
    <div>
      <Header />
      <h2>Top Movies</h2>
      <Peliculas pelis={movies}/>
      <Link to='/lista' style={{textDecoration: 'none', color: 'white', padding: '5px'}}>Ver todas las películas</Link>
      <Footer/>
    </div>
  )
}
