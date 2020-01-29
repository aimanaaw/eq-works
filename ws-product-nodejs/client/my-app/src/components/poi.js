import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Poi() {
  const [pointOfInterest, setPointOfInterest] = useState([]);

  useEffect (() => {
    axios
    .get("http://localhost:5555/poi")
    .then(response => {
      const poiData = response.data.map(eachPoi => {
        return {
          "poi_id": eachPoi.poi_id,
          "name": eachPoi.name,
          "lat": eachPoi.lat,
          "lon": eachPoi.lon
        };
      });
      console.log("POI", poiData);
      setPointOfInterest(poiData);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1>Points of Interest</h1>
      {pointOfInterest.map(eachPoi => {
        return (
          <div>
            {eachPoi.name}
            </div>
        )
      })}
    </div>
  )
}