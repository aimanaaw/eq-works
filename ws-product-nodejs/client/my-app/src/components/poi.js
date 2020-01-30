import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/poi.css";
import {MDBDataTable} from 'mdbreact';
import moment from 'moment';


export default function Poi() {
  const [pointOfInterest, setPointOfInterest] = useState([]);

  useEffect (() => {
    axios
    .get("https://test-eqworks.herokuapp.com/poi")
    .then(response => {
      const rows = response.data.map(eachPoi => {
        return {
          "poi_id": eachPoi.poi_id,
          "name": eachPoi.name,
          "lat": eachPoi.lat,
          "lon": eachPoi.lon,
          "date": moment.utc(eachPoi.date).format('MM/DD/YYYY'),
          "impressions": eachPoi.impressions,
          "clicks": eachPoi.clicks,
          "revenue": eachPoi.revenue
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
        },
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Impressions',
          field: 'impressions',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Clicks',
          field: 'clicks',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Revenue',
          field: 'revenue',
          sort: 'asc',
          width: 150
        }
      ];
      const tableData = {
        "columns": columns,
        "rows": rows
      }
      setPointOfInterest(tableData);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <h1 className="poi_header">Points 
      of Interest</h1>
      <div className="poi_table">
      <MDBDataTable
      striped
      bordered
      hover
      data={pointOfInterest}
      />
      </div>
    </div>
  )
}