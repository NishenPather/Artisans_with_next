import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head';
import HomeNav from './HomeNav'
import Search from '../Search'
import Footer from './Footer'
import MyHead from './Head'

function HomeLayout({ children }) {

  const title = 'Artisans';
  return (
    <>
    
   <MyHead />

     <div className={styles.nav}> 
    <HomeNav />
    <Search />
    </div>
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

export default HomeLayout