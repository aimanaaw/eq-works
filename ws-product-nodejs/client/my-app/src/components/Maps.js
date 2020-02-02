import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
  const [mapData, setMapData] = useState([]);

  
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 43.655676, lng: -79.396034}} >

    </GoogleMap>
  );
}

const WrappedMapComponent = withScriptjs(withGoogleMap(Map));

export default function Homepage() {
  return(
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMapComponent googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB-kX0uCRWjRZw6ybb7H6Q5uw9uUR5VNoQ`}
      loadingElement ={<div style={{height: "100%"}}/>}
      containerElement ={<div style={{height: "100%"}}/>}
      mapElement ={<div style={{height: "100%"}}/>}
      />
    </div>
  )
}

