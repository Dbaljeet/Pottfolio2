import React from 'react'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <>
      <section className={styles.Section} id="Experience">
        <h2 className={styles.SecondaryTitle}>Conocimientos</h2>

        <ul className={styles.List}>
          <li className={styles.Element}>
            Trabajo con <b>base de datos</b> (relacionales, no relacionales y
            multidimensionales).
          </li>
          <li className={styles.Element}>
            Conocimentos de <b>programación orientada a objetos</b>.
          </li>
          <li className={styles.Element}>
            Conocimientos de <b>estructuras de datos</b>.
          </li>
          <li className={styles.Element}>
            <b>Ingeniería de software</b>, métodologia agile y buenas prácticas.
          </li>
          <li className={styles.Element}>
            <b>Data Science</b> con Python (uso de libreria pandas con millones
            de datos).
          </li>
          <li className={styles.Element}>
            Realización <b>ETL</b> (extract transform load).
          </li>
          <li className={styles.Element}>
            Realización de <b>videojuegos en unity</b>.
          </li>
          <li className={styles.Element}>
            <b>Frontend</b> con Javascript, Html, Css - React - Nextjs.
          </li>
          <li className={styles.Element}>
            <b>Backend</b> ( Nodejs - Express ).
          </li>
          <li className={styles.Element}>
            Realización de <b>interfaces</b> para aplicaciones de escritorio con
            python ( Tkinter )
          </li>
          <li className={styles.Element}>
            <b>Uso de lenguajes</b>: Javascript, Java, Python, C++, C# ( por
            unity ).
          </li>
          <li className={styles.Element}>
            Lenguaje Scheme ( aunque solo ha tenido uso académico -{' '}
            <b>programación funcional</b> )
          </li>
          <li className={styles.Element}>
            <b>Aplicaciones móviles</b> con React native ( proyecto en proceso )
          </li>
        </ul>
      </section>
    </>
  )
}
export default Experience
