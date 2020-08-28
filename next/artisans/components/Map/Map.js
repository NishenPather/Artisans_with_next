import React, { Component, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import styles from './map.module.css'
import Head from 'next/head';
import Navbar from '../Layout/Navbar'


import Popup from './Popup'


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2F5ZzR0N3QwYXkzMnpsbmdtanI5eWk4In0.QPGQ4z5xUCdmfs21kR5y_w';


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
        <Head>
        <title>Artisans</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />       
        <script src='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
      <Navbar />
      <div>
          <section>
            <div className={styles.mapwrapper}> 
            <div className={styles.mapcontainer} ref={mapContainerRef} />
            </div>
            </section>
        </div>
        </>
)
};

export default MapFunction;