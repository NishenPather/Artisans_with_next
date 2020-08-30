import * as React from 'react';
import {Component, useState, useEffect,  useRef, useLayoutEffect } from 'react';
import {render} from 'react-dom';
import ReactMapGL, {Layer, Source, Popup, GeolocateControl, NavigationControl, Marker} from 'react-map-gl';
import styles from '../Map/map.module.css'
import Popupinfo from './Popupinfo'
import axios from 'axios'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2F5ZzR0N3QwYXkzMnpsbmdtanI5eWk4In0.QPGQ4z5xUCdmfs21kR5y_w'; // Set your mapbox token here



export default function Reactmap() {

  const [viewport, setViewport] = useState(
    {
    width: 660,
    height: 600,
    latitude:  40.4,
    longitude: -74.157261,
    zoom: 8
   });

   
  
  const stores = "http://127.0.0.1:8000/geojson/api/geo/?format=json";

  const [StoreList,  setStoreList]=useState (
    {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-74.159756,40.422075]},"properties":{"name":"Bob's Bakery","shop_type":"Bakery","address":"1764 Union Avenue, Hazlet, New Jersey 07730, United States of America"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-74.00411172484648,40.7184771448934]},"properties":{"name":"Test Kitchen","shop_type":"Restaurant","address":"49 White Street, New York, New York 10013, United States"}}]})


    const [selectedStore, setSelectedStore] = useState(null);
    
   
  
  

  
  console.log({StoreList})
  

  return (


    <div className={styles.mapwrapper}> 
    
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/alexbohlin/ckcoxlqwo0nx01ir619t0m2xp"> 
      <div style={{position: 'aboslute', right:0, left: "30px"}}> 
      <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          
        />
        </div>
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl showCompass={true} />
        </div>
        

      

      {StoreList.features.map(store => (
          <Marker
            key={store.properties.name}
            latitude={store.geometry.coordinates[1]}
            longitude={store.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              style={{background:"none", border:"none", color:"transparent", cursor: "pointer"}}
              onClick={e => {
                e.preventDefault();
                setSelectedStore(store);
              }}
            >
              <img src="/marker.svg" alt="Marker" style={{width: "20px",height: "20px"}} />
            </button>
          </Marker>
        ))}

{selectedStore ? (
          <Popup
            latitude={selectedStore.geometry.coordinates[1]}
            longitude={selectedStore.geometry.coordinates[0]}
            closeOnClick={true}
            onClose={() => {
              setSelectedStore(null);
            }}
          >
            <Popupinfo stores={selectedStore}/>
          </Popup>
        ) :null}

      </ReactMapGL>
      
    </div>    
     
    
  );
}