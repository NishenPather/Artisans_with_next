import React, { Component, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import styles from './map.module.css'


import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';





import Popup from './Popup'


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2VpdGQyMGMxanZlMnpwcXQ4Y2NuZzJ1In0.xnmTSVLs6_bcpA5hipyw3g';


const MapFunction = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 0 }));


  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/alexbohlin/ckcoxlqwo0nx01ir619t0m2xp',
      center: [-74.157261, 40.4],
      zoom: 12.5,
    });

    

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });
    
    map.addControl(geocoder, 'top-left');

    

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showAccuracyCircle: false}), 'top-right')

    map.on('load', () => {
      // add the data source for new a feature collection with no features
      map.addSource('stores', {
        type: 'geojson',
        data: "http://127.0.0.1:8000/geojson/api/geo/?format=json"
      });
      // now add the layer, and reference the data source above by name
      map.addLayer({
        id: 'stores',
        source: 'stores',
        type: 'symbol',
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          'icon-image': 'makimarker-15', // this will put little croissants on our map
          'icon-padding': 0,
          'icon-size': 1.5,
          'icon-allow-overlap': true,
          'text-field': "{name}",
          'text-font': [
            'Open Sans Bold',
            'Arial Unicode MS Bold'
            ],
            'text-size': 11,
            'text-transform': 'uppercase',
            'text-letter-spacing': 0.05,
            'text-offset': [0, 1.5]
        },
      });
    });

     // change cursor to pointer when user hovers over a clickable feature
     map.on("mouseenter", "stores", e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", "stores", () => {
      map.getCanvas().style.cursor = "";
    });

    map.on("click", "stores", e => {
      if (e.features.length) {
        const feature = e.features[0];
        // create popup node
        const popupNode = document.createElement("div");
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        // set popup on map
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });


    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
return (
      <> 
      
        
      <div>
          
            <div className={styles.mapwrapper}> 
            <div className={styles.mapcontainer} ref={mapContainerRef} /> </div>
           
        </div>
        </>
)
};

export default MapFunction;