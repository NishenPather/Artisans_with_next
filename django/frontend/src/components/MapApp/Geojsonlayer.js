import React, { Component } from 'react'
import ReactMapboxGl, { GeoJSONLayer, Feature, ZoomControl, Popup } from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2F5ZzR0N3QwYXkzMnpsbmdtanI5eWk4In0.QPGQ4z5xUCdmfs21kR5y_w",
  injectCSS: false
});


 


export class Geojsonlayer extends Component {

   
  
  

  render() {
    return (
      <div>
        <Map 
          style="mapbox://styles/alexbohlin/ckbv8apzk17m61jny7fiyyhro"
          containerStyle={{
            height: '430px',
            width: '650px',
          }}
          center={[-76.01239, 39.91275]}
        >
          <GeoJSONLayer
            data= "http://127.0.0.1:8000/geojson/api/geo/?format=json"
            symbolLayout={MapboxGL.SymbolLayout = {
              'icon-image': 'restaurant-15',
              'visibility': 'visible'
            }}
            symbolOnClick={ function(e) {
              // The event object (e) contains information like the
              // coordinates of the point on the map that was clicked.
              console.log('A click event has occurred at ' + e.lngLat);
              }}

            >

        
            </GeoJSONLayer>
            <ZoomControl position="top-right"/>
         </Map>
      </div>
    )
  }
}

export default Geojsonlayer


