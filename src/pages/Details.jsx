import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Imagen from '../components/Imagen/Imagen';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from '../utils/emergencia.css';

export default function Details() {

  const { state } = useParams();

  const [movie, setmovie] = useState([])
  const [generos, setGeneros] = useState([])
  const [compañias, setCompañias] = useState([])

  const fetchMovies = async () => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/" + state + "?api_key=89060783682779e9d41229eaa3599d0b&language=en-US");
      setmovie(response.data);
      const arr = []
      const arr2 = []
      response.data.genres.map((genero) => {
        arr.push(genero.name)
      })
      setGeneros(arr);
      
      response.data.production_companies.map((compañia) => {
        arr2.push(compañia.name)
      })
      setCompañias(arr2);

    } catch (error) {
      console.log(error);
    }  
    }; 

  useEffect(() => {
      fetchMovies();
    }, []); 

  return (
    <div>
        <Header/>
          <section className={styles.Imagen}>
             <Imagen url={"https://image.tmdb.org/t/p/original" + movie.poster_path}/> 
             <section className='datos'>
              <h2 className='titulo'>{movie.title}</h2>
              <p className='titulo'>Generos:</p>
              <ul className='lista-generos'>
                {generos.map((elemento, idx) => {
                  return(
                     <li key={idx} className='genero'>{elemento}</li>
                  )
                })}
              </ul>
              <p className='titulo'>Lenguaje original: {movie.original_language}</p>
              <p className='titulo'>Presupuesto: {movie.budget + '$'}</p>
              <p><b>Descripción:</b> {movie.overview}</p>
              <p>Rating: {movie.vote_average}</p>
              <p>Status: {movie.status}</p>
              <p>Release date: {movie.release_date}</p>
             </section>
              <h4>Compañias involucradas</h4>
              {compañias.map((elemento, idx) => {
                  return(
                     <p key={idx} className='genero'>{elemento}</p>
                  )
                })}
          </section>
        <Footer/>
    </div>
  )
}
