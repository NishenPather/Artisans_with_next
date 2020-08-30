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