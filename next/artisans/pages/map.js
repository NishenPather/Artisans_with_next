import dynamic from 'next/dynamic';
import DefaultLayout from '../components/Layout/Layout'
import Head from 'next/head';
import styles from '../styles/Home.module.css'



const DynamicMap = dynamic(() => import("../components/ReactMap/Mapwtooltip"), {
  loading: () => <h3>Loading...</h3>,
  ssr: false
});




function Map() {
  return (
    <div  >
      <Head>
        <title>Artisans</title>
               
        <script src='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css"
          type="text/css"
        />
        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"></script>
          
        <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
        </Head>
     
        <h1 className={styles.mainHeading}>
          Discover Artisans 
        </h1>
        <br></br>
        <br></br>
        <div>
      <DynamicMap />
      </div>
     
    </div>
  )
}

Map.Layout = DefaultLayout

export default Map