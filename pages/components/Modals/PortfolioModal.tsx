import React, { FC, ReactElement, useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './PortfolioModal.module.css'

interface Props {
  children: ReactElement
  onClose: () => void
}

export const ModalPortfolio: FC<Props> = ({ children, onClose }) => {
  return (
    <>
      <div className={styles.Cont}>
        <div className={styles.ContentModal}>
          <button className={styles.CloseModal} onClick={onClose}></button>
          <>{children}</>
        </div>
        <div onClick={onClose} className={styles.Background}></div>
      </div>
    </>
  )
}
export const ModalPortalPortfolio: FC<Props> = ({ children, onClose }) => {
  const ref = document.getElementById('modal-root')
  if (ref === null) {
    return null
  }
  return ReactDOM.createPortal(
    <ModalPortfolio onClose={onClose}>{children}</ModalPortfolio>,
    ref
  )
}
