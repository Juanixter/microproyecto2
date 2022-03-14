import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div>
      <section className={styles.Contenedor}>
      <h5 className={styles.component}>
        Juan Carlos Martínez
      </h5>
      <ul>
        <li className={styles.links}>correo: j27790605@correo.unimet.edu.ve</li>
        <li className={styles.links}>github: Juanixter</li>
      </ul>
      </section>
    </div>
  )
}
