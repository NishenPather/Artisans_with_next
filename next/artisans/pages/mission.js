import styles from '../styles/Home.module.css'
import  DefaultLayout from '../components/Layout/Layout'



function About() {
  return (
          <>
          <div className={styles.card}> 
            <h2>Mission</h2>
            <p>To create decentralized networks of artisans that can defeat large industrial firms.</p>
          </div>
          </>
          
  )
            
}

About.Layout = DefaultLayout
export default About
