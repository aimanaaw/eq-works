import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
  const [mapData, setMapData] = useState([]);

  useEffect (() => {
    // axios.get("https://test-eqworks.herokuapp.com/maps")
    axios.get("http://localhost:5555/maps")
    .then(response => {
      const eachPoi = response.data.map(eachLocation => {
        return {
          "name": eachLocation.name,
          "lat": eachLocation.lat,
          "lon": eachLocation.lon,
          "NEvents": eachLocation.events
        };
      });
      console.log("testing axios call", eachPoi)
      setMapData(eachPoi);
      console.log("MAP DATA", mapData)
    })
    .catch((error)=> {
      console.log("Error in the maps endpoint", error)
    });
  }, []);

  
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 43.655676, lng: -79.396034}} >
      {mapData.map(eachPlace => (
        <Marker
        key={eachPlace.name}
        position={{ lat: eachPlace.lat, lng: eachPlace.lon}}
        />
      ))}

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

