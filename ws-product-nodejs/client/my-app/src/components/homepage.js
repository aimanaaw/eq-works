import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 43.655676, lng: -79.396034}} />
  );
}

const WrappedMapComponent = withScriptjs(withGoogleMap(Map));

export default function Homepage() {
  return(
    <div>
      <WrappedMapComponent googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
      loadingElement ={<div style={{height: "100%"}}/>}
      containerElement ={<div style={{height: "100%"}}/>}
      mapElement ={<div style={{height: "100%"}}/>}
      />
    </div>
  )
}