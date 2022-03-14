import React from 'react'
import styles from './Imagen.module.css';

export default function Imagen({ url }) {
  return (
    <div className={styles.contenedor}>
        <img src={url} className={styles.imagen} alt='imagen de pelicula'/>
    </div>
  )
}
