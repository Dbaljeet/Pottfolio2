import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  const [isMobile, setisMobile] = useState(false)
  const [show, setShow] = useState(false)
  const ShowMenu = () => {
    !show ? setShow(true) : setShow(false)
  }

  const updateSize = (ev: any) => {
    setisMobile(ev.target.innerWidth < 622)
  }

  useEffect(() => {
    setisMobile(window.innerWidth < 622)
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <>
      <nav className={`${styles.Nav} show`}>
        <div
          className={styles.Hamburger}
          id={`${show ? 'open' : ''}`}
          onClick={ShowMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {!isMobile && (
          <div className={styles.Lista + `${show ? 'active' : 'desactive'}`}>
            <a className={styles.Links} onClick={ShowMenu} href="#modal-root">
              Inicio
            </a>
            <a className={styles.Links} onClick={ShowMenu} href="#Portfolio">
              Portfolio
            </a>
            <a className={styles.Links} onClick={ShowMenu} href="#Experience">
              Conocimientos
            </a>
            <a className={styles.Links} onClick={ShowMenu} href="#Contact">
              Contacto
            </a>
          </div>
        )}

        {isMobile && show && (
          <div className={styles.Lista + `${show ? 'active' : 'desactive'}`}>
            <a className={styles.Links} onClick={ShowMenu} href="#modal-root">
              Inicio
            </a>
            <a className={styles.Links} onClick={ShowMenu} href="#Portfolio">
              Portfolio
            </a>
            <a className={styles.Links} onClick={ShowMenu} href="#Experience">
              Conocimientos
            </a>
            <a className={styles.Links} onClick={ShowMenu} href="#Contact">
              Contacto
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
export default Navbar
