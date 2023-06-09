import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import About from './components/About'
import CV from './components/CV'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} id="modal-root">
        <Navbar />
        <h1 className={styles.PrincipalTitle}>Angelo Berríos Pinto</h1>
        <About></About>
        <CV></CV>
        <Portfolio></Portfolio>
        <Experience></Experience>
        <Contact></Contact>
      </main>
    </>
  )
}
