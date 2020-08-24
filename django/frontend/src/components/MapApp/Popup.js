import React, { Component } from 'react'

const Popup = ({ feature }) => {
  const { name, shop_type, address } = feature.properties;
return (
    <div id={`popup-${shop_type}`}>
      <h3>{name}</h3>
      <h4>{shop_type}</h4>
      <br></br>
      <p>{address}</p>
    </div>
  );
};
export default Popup;

