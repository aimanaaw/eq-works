import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/statsHourly.css"
import {
  ComposedChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import moment from "moment";

export default function StatsHourly() {
  const [hourlyStats, setHourlyStats] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5555/stats/hourly")
    .then(response => {
      const statData = response.data.map(eachStat => {
        return {
          "date": moment.utc(eachStat.date).format("MM/DD/YYYY"),
          "hour*10": eachStat.hour * 10,
          "impressions/1000": eachStat.impressions / 100,
          "clicks": eachStat.clicks,
          "revenue": eachStat.revenue
        };
      });
      console.log("Testing the hourly stats", statData);
      setHourlyStats(statData);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
<div>
      <h1>Hourly Stats</h1>
      <div className="stats_daily_chart">
        <ComposedChart
          width={1500}
          height={600}
          data={hourlyStats}
          margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
          <YAxis type="number" domain={[0, 1500]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="revenue" barSize={20} fill="#87CEEB" />
          <Line type="monotone" dataKey="hour*10" stroke="#DC143C" />
          <Line type="monotone" dataKey="impressions/1000" stroke="#00FF00" />
          <Line type="monotone" dataKey="clicks" stroke="#FFA500" />
        </ComposedChart>
      </div>
    </div>
  )
}