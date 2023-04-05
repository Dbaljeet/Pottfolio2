import React from 'react'
import Github from '../../../public/Github'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <>
      <div className={styles.ContentScroll} id="Contact">
        <h2 className={styles.SecondaryTitle}>Contacto</h2>
        <a
          className={styles.ContentContainer}
          target="_blank"
          href="https://www.linkedin.com/in/angelo-berrios-pinto-96b317235/"
        >
          <img
            className={styles.IMG}
            width="130px"
            height="auto"
            title="Linkedin"
            alt="Linkedin Angelo Berrios"
            src={'/Linkedin.svg'}
            loading="lazy"
          ></img>
        </a>

        <a
          className={styles.ContentContainer2}
          target="_blank"
          href="https://github.com/Dbaljeet"
        >
          <Github width="100px" />
        </a>

        <a
          className={styles.ContentContainer}
          target="_blank"
          href="mailto:angelo.berrios99@gmail.com"
        >
          <img
            className={styles.IMG2}
            width="100px"
            height="auto"
            title="Correo contacto"
            alt="Mail Angelo Berrios"
            src={'/Mail.svg'}
            loading="lazy"
          ></img>
        </a>
      </div>
    </>
  )
}
export default Contact
