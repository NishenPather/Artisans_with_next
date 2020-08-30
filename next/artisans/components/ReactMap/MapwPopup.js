import * as React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {
  Popup,
  NavigationControl,
  GeolocateControl,
  Source,
  Layer
} from 'react-map-gl';
import Popupinfo from './Popupinfo';
import styles from '../Map/map.module.css'



const TOKEN = 'pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2F5ZzR0N3QwYXkzMnpsbmdtanI5eWk4In0.QPGQ4z5xUCdmfs21kR5y_w'; // Set your mapbox token here

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};



const navStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px'
};

const stores = "http://127.0.0.1:8000/geojson/api/geo/?format=json";


export default class LatestMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };


  
  

    

  render() {
    const {viewport} = this.state;

    return (

      <div className={styles.mapwrapper}> 
      <ReactMapGL
        {...viewport}
        width="600px"
        height="600px"
        mapStyle="mapbox://styles/alexbohlin/ckcoxlqwo0nx01ir619t0m2xp"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
       <Source id="StoresLayer" type="geojson" data={stores}> 
      <Layer
        id="stores"
        source="stores"
        type="symbol"
        layout={{
          // full list of icons here: https://labs.mapbox.com/maki-icons
          'icon-image': 'makimarker-15', 
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
        }}>
      

      </Layer>
      </Source>

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        
        <div style={navStyle}>
          <NavigationControl />
        </div>
      
      </ReactMapGL>
      </div>
    );
  }
}
