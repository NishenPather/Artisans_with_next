import styles from '../styles/Home.module.css'
import Link from 'next/link'
import  DefaultLayout from '../components/Layout/Layout'


export default function Home() {
  return (
    <>
    
      <div> 
        <h1 className={styles.mainHeading}>
          Artisans
        </h1>
        <br></br>
        <br></br>

        <div className={styles.grid}> 
        <div className={styles.card}>
        <Link href='/map'>
          <a>
            <h3>Map</h3>
            <p>Discover Artisans</p>
          </a>  
        </Link>
        </div>
        <div className={styles.card}>
        <Link href='/profile/[username]'>
          <a>
            <h3>Profile</h3>
            <p>Login, or create a new profile</p>
          </a>  
        </Link>
        </div>
        <div className={styles.card}>
        <Link href='/mission'>
          <a>
            <h3>Mission</h3>
            <p>Learn what this is all about</p>
          </a>  
        </Link>
        </div>
        <div className={styles.card}>
        <Link href='/dashboard'>
          <a>
            <h3>ArtisanProfile</h3>
            <p>Another page added for symmetry</p>
          </a>  
        </Link>
        </div>
        
        </div>
        </div>
        </>
  )
}

Home.Layout = DefaultLayout
