import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta';
import styles from "./Peliculas.module.css";

export default function Peliculas({ pelis }) {

    

  return (
    <div>
      <section>
        {pelis.map((pelicula, idx) => {
            let url = "https://image.tmdb.org/t/p/original" + pelicula.poster_path;
            return (
                <Tarjeta
                    key={idx}
                    name={pelicula.original_title}
                    image={url}
                    language={pelicula.original_language}
                    popularity={pelicula.vote_average}
                    id={pelicula.id}
                />
            )})}
      </section>
      <section className={styles.contenedor}>

      </section>
    </div>
  )
}
