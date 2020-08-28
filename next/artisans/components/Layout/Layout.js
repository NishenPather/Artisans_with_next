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
    </Head>

    <div className={styles.container}>
     
      <Navbar />
    <main className={styles.main}>
    {children} 
    </main>
    
     
      <footer className={styles.footer}>
       <p><a href="https://twitter.com/alex_bohlin">Alex Bohlin</a></p>
      </footer>
      </div>
   
    </>
  )
}

export default DefaultLayout