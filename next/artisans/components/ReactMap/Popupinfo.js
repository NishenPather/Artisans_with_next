import * as React from 'react';
import {PureComponent} from 'react';

export default class Popupinfo extends PureComponent {
  render() {
    const {stores} = this.props;
    const StoreName = `${stores.properties.name}`;
    const StoreType = `${stores.properties.shop_type}`;
    const Address = `${stores.properties.address}`

    return (
      <div>
        <div id={`popup-${StoreType}`}>
          <h1>{StoreName}</h1>
          <h3>{StoreType}</h3>
          <br></br>
          <p>{Address}</p>
          
        </div>
      
      </div>
    );
  }
}

//ideas for later: <img width={240} src={info.image} /> or an image carousel