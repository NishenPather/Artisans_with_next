import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head';
import Navbar from './Navbar'
import Image from 'next/image';

function DefaultLayout({ children }) {

  const title = 'Artisans';
  return (
    <>
    
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" /> 
      <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet"></link>
    </Head>

     
    <Navbar />
    <div className={styles.container_main}>
  
    <main className={styles.main}>
    
    {children} 
    </main>
    
     
      <footer className={styles.footer}>
        
       <p style={{ backgroundColor: "rgb(250, 245, 226)", borderRadius: "10px", padding: '1rem'}}><Link href='/mission'><a className={styles.link}>About</a></Link><a style={{marginLeft: "60px"}}  className={styles.link} href="http://127.0.0.1:5500/alexbohlin.com/landing.html" target="_blank">Alex Bohlin</a></p>
      
      </footer>
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