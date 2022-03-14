import { Link } from "react-router-dom"
import styles from "./Tarjeta.module.css"

export default function Tarjeta({ name, language, image, popularity, id}) {
  return (
    <div className={styles.tarjeta}> 
        <section className={styles.imagen}>
          <img src={image}/>
        </section>
        <section className={styles.datos}>
          <h6>{name}</h6>
          <p>Idiomas original: {language}</p>
          <p>Rating: {popularity}</p>
          <div className={styles.detalles}>
            <Link to={"/details/" + id} style={{ textDecoration: 'none', color: 'white' }}>Ver detalles</Link>
          </div>
        </section>
    </div>
  )
}
