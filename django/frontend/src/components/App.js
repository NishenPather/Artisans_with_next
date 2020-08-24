import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Stores from './portal/Stores'
import MapFunction from './MapApp/Map'






class App extends Component {
  render() {
    return (


      <div>  

   
   <MapFunction />

     </div>


    
      
    ) 
  }

}


ReactDOM.render(<App />, document.querySelector('#app'))