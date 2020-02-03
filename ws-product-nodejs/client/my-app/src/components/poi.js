import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/poi.css";
import {MDBDataTable} from 'mdbreact';
import moment from 'moment';


export default function Poi() {
  const [pointOfInterest, setPointOfInterest] = useState([]);

  useEffect (() => {
    axios
    .get("https://eqworks-takehome.herokuapp.com/poi")
    .then(response => {
      const rows = response.data.map(eachPoi => {
        return {
          "name": eachPoi.name,
          "date": moment.utc(eachPoi.date).format('MM/DD/YYYY'),
          "impressions": eachPoi.impressions,
          "clicks": eachPoi.clicks,
          "revenue": Math.round(eachPoi.revenue)
        };
      });
      const columns = [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 500
        },

        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Total Impressions',
          field: 'impressions',
          sort: 'asc',
          width: 500
        },
        {
          label: 'Total Clicks',
          field: 'clicks',
          sort: 'asc',
          width: 500
        },
        {
          label: 'Total Revenue',
          field: 'revenue',
          sort: 'asc',
          width: 500
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
      // striped
      bordered
      hover
      data={pointOfInterest}
      />
      </div>
    </div>
  )
}