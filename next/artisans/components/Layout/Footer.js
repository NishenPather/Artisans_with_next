import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Footer() {
  
    return (
      <div>
        <footer className={styles.footer}>
       <p style={{ backgroundColor: "rgb(250, 245, 226)", borderRadius: "10px", padding: '1rem'}}><Link href='/mission'><a className={styles.link}>About</a></Link><a style={{marginLeft: "60px"}}  className={styles.link} href="http://127.0.0.1:5500/alexbohlin.com/landing.html" target="_blank">Alex Bohlin</a></p>
      </footer>
      </div>
    )
  
}

export default Footer
