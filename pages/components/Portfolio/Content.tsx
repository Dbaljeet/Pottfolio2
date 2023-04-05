import React, { FC } from 'react'
import GithubImg from '../../../public/Github'
import styles from './Content.module.css'
interface Props {
  Name: string
  selectedIMG: string
  Github: string
  deploy: string
  Info: string
}

const ContentPortfolio: FC<Props> = ({
  Name,
  selectedIMG,
  Github,
  deploy,
  Info,
}) => {
  return (
    <>
      <h2 className={styles.Tittle}> {Name} </h2>
      <div className={styles.ContainerContent}>
        <img className={styles.IMG} src={selectedIMG}></img>

        <a className={styles.Repo} href={Github} target="_blank">
          <label>ver repositorio</label>
          <GithubImg width={'8rem'} />
        </a>
        <div>
          <h3 className={styles.INFO}>¿De qué trata?</h3>
          <p className={styles.ContentInfo}>{Info}</p>
        </div>
        <a className={styles.Deploy} href={deploy} target="_blank">
          <label>
            {Name === 'PYTYM' ? 'Aún no desplegado' : 'visitar sitio web'}
          </label>
        </a>
        {Name === 'Cupcake' && (
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=EoxCh-ISKcc&list=PL5P4yyutUIHGtSQPMFrv98bJdm1JEUrnx&index=1"
          >
            Ver cómo funciona
          </a>
        )}
      </div>
    </>
  )
}
export default ContentPortfolio
