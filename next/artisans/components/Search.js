import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Search () {
  
    return (


      <div className={styles.search}>
        <Link href='/map' >
         <div className={styles.indexlink} >
            <div className={styles.searchcard} >
              <h2 style={{fontFamily: 'Marck Script, cursive', textAlign: 'center'}}>Search</h2>
              <Image src="https://api.mapbox.com/styles/v1/alexbohlin/ckcoxlqwo0nx01ir619t0m2xp/static/0,20,2/1000x800?access_token=pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2F5ZzJ3MmswaXA2MnNvN25qazQxNzB5In0.SAO_eVzxnZegvGdPjkLStA" alt='map' width='200' height='120' className={styles.cardimg} />
           </div>
          </div>
        </Link>
        
      </div>
    )
  
}

export default Search
