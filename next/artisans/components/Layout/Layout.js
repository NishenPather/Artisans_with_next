import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head';
import Navbar from './Navbar'
import Search from '../Search'
import Footer from './Footer'
import MyHead from './Head'

function DefaultLayout({ children }) {

  const title = 'Artisans';
  return (
    <>
    
    <MyHead />

    
    <Navbar />
   
    <div className={styles.container_main}>
    <main className={styles.main}>
     {children} 
    </main>
    <Footer />
     <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>
      </div>
      
    </>
  )
}

export default DefaultLayout