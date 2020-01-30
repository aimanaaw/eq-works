import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/poi.css";
import {MDBDataTable} from 'mdbreact';


export default function Poi() {
  const [pointOfInterest, setPointOfInterest] = useState([]);

  useEffect (() => {
    axios
    .get("http://localhost:5555/poi")
    .then(response => {
      const rows = response.data.map(eachPoi => {
        return {
          "poi_id": eachPoi.poi_id,
          "name": eachPoi.name,
          "lat": eachPoi.lat,
          "lon": eachPoi.lon
        };
      });
      const columns = [
        {
          label: 'poi_id',
          field: 'poi_id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Latitude',
          field: 'lat',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Longitude',
          field: 'lon',
          sort: 'asc',
          width: 150
        }
      ];
      const tableData = {
        "columns": columns,
        "rows": rows
      }
      console.log("POI", tableData);
      setPointOfInterest(tableData);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1 className="poi_header">Points of Interest</h1>
      <MDBDataTable
      striped
      bordered
      hover
      data={pointOfInterest}
      />
    </div>
  )
}