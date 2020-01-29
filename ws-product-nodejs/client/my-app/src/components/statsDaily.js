import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/statsDaily.css";
import { Barchart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import moment from 'moment';

export default function StatsDaily() {
  const [dailyStats, setDailyStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/stats/daily")
    .then(response => {
      const eventData = response.data.map(eachStat => {
        return {
          "date": eachStat.date,
          "impressions": eachStat.impressions,
          "clicks": eachStat.clicks,
          "revenue": eachStat.revenue
        };
      });
      console.log("Testing Stats",eventData);
      setDailyStats(eventData);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      {dailyStats.map(stat => {
        return (
          <div>
            {stat.date}<br/>
            {stat.impressions}<br/>
            {stat.clicks}<br/>
            {stat.revenue}<br/>
            </div>
        )
      })}
    </div>
  )
}