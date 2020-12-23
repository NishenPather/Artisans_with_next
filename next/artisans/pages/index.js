import styles from '../styles/Home.module.css'
import Link from 'next/link'
import  DefaultLayout from '../components/Layout/Layout'


export default function Home() {
  return (
    <>
    
      <div> 
        <div className={styles.grid}> 
        <div className={styles.card}>
        <Link href='/map'>
          <a>
            <h3 className={styles.link}>Map</h3>
            <p className={styles.link}>Discover Artisans</p>
          </a>  
        </Link>
        </div>
        <div className={styles.card}>
        <Link href='/dashboard'>
          <a>
            <h3 className={styles.link}>Profile</h3>
            <p  className={styles.link}>Access your dashboard</p>
          </a>  
        </Link>
        </div>
        
        </div>
        </div>
        </>
  )
}

Home.Layout = DefaultLayout
