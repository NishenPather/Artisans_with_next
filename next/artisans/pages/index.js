import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import HomeLayout from '../components/Layout/HomeLayout'
import Search from '../components/Search'



export default function Home() {

  const prop2 = <Search />
  return (
    <>
    
      <div> 
        <div className={styles.grid}> 
        <Link href='/dashboard'>
        <div className={styles.indexlink}>
           <div className={styles.card}>
              <h2 style={{fontFamily: 'Marck Script, cursive', textAlign: 'center'}}>Profile</h2>
              <h3 style={{fontFamily: 'Marck Script, cursive',textAlign: 'center'}}>Access your dashboard</h3>
              <Image src="/yellow-min.jpg" alt='dashboard' width='250' height='200' className={styles.cardimg} />
            </div>
        </div>
        </Link>
        
        
        </div>
        </div>
        </>
  )
}

Home.Layout = HomeLayout
