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
import styles from '../Map (normal js)/map.module.css'
import axios from 'axios'

import Geocoder from "react-map-gl-geocoder";





const TOKEN = 'pk.eyJ1IjoiYWxleGJvaGxpbiIsImEiOiJja2VpdGQyMGMxanZlMnpwcXQ4Y2NuZzJ1In0.xnmTSVLs6_bcpA5hipyw3g'; // Set your mapbox token here

const geolocateStyle = {
  position: 'absolute',
  top: 10,
  left: 850,
  padding: '10px'
};

const roundStyle = {
  borderRadius: "9px!important"
}



const navStyle = {
  position: 'absolute',
  top: 72,
  left: 850,
  padding: '10px'
};

const stores = "http://127.0.0.1:8000/geojson/api/geo/?format=json";




export default class LatestMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: null,
      hoveredFeature: null,
      clickedFeature: null,
      viewport: {
        latitude: 40.4,
        longitude: -74.157261,
        zoom: 8,
        bearing: 0,
        pitch: 0
      },
    };
    this.mapRef = React.createRef()
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };


  componentDidMount() {
    axios.get(stores)
      .then(res => {
        const geojson = res.data;
        console.log(geojson)
        this.setState({ stores: geojson });
      })
  };


  _onHover = event => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
    const hoveredFeature = features && features.find(f => f.layer.id === 'stores');

    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _onClick = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const clickedFeature = features && features.find(f => f.layer.id === 'stores');
    console.log(clickedFeature)
    
    this.setState({clickedFeature: clickedFeature, x: offsetX, y: offsetY})
  };
  

  _renderPopup() {
    const {clickedFeature, x, y} = this.state;

    return (
      clickedFeature && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={clickedFeature.geometry.coordinates[0]}
          latitude={clickedFeature.geometry.coordinates[1]}
          closeOnClick={true}
          onClose={() => this.setState({clickedFeature: null})}
        >
          <div className={styles.popup} style={{left: x, top: y}}>
        <div id={`popup-${clickedFeature.properties.name}`} className={styles.popupContent}>
          <h1>{clickedFeature.properties.name}</h1>
          <br></br>
          <p>{clickedFeature.properties.address}</p>
          <h3>{clickedFeature.properties.shop_type}</h3>
        </div>
        </div>
        </Popup> 
      )
    );
  }
  
  _renderTooltip() {
    const {hoveredFeature, x, y} = this.state;

    return (
      hoveredFeature && (
        <div className={styles.tooltip} style={{left: x, top: y}}>
        <div id={`popup-${hoveredFeature.properties.name}`}>
          <p>{hoveredFeature.properties.name}</p>
        </div>
        </div>
      )
    );
  }





  

    

  render() {
    const {viewport, stores} = this.state;
    
    return (

      <div className={styles.mapwrapper}> 

      <ReactMapGL
      ref={this.mapRef}
        {...viewport}
        width="900px"
        height="650px"
        mapStyle="mapbox://styles/alexbohlin/ckcoxlqwo0nx01ir619t0m2xp"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
        onHover={this._onHover}
        onClick={this._onClick}
        style={roundStyle}
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
        }}>
      

      </Layer>
      </Source>

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        
        <div style={navStyle}>
          <NavigationControl />
        </div>

        <Geocoder
          mapRef={this.mapRef}
          mapboxApiAccessToken={TOKEN}
          position="top-left"
        />
      
        {this._renderTooltip()}
        {this._renderPopup()}
      </ReactMapGL>
      </div>
    );
  }
}
