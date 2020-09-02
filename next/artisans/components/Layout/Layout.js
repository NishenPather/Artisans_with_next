import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head';
import Navbar from './Navbar'

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
    

    <div className={styles.container_main}>
    
    <Navbar />
      
    <main className={styles.main}>
    
    {children} 
    </main>
    
     
      <footer className={styles.footer}>
       <p><a href="https://sites.google.com/view/artisansdevsite//">Alex Bohlin</a></p>
      </footer>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
      </div>
      
    </>
  )
}

export default DefaultLayout