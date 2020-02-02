import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'google-map-react';

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 43.655676, lng: -79.396034}} />
  )
}

const wrappedMapComponenet = withScriptjs(withGoogleMap(Map));

export default function Homepage() {
  return
}