import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/statsDaily.css";
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

export default function StatsDaily() {
  const [dailyStats, setDailyStats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/stats/daily")
      .then(response => {
        const eventData = response.data.map(eachStat => {
          return {
            date: moment.utc(eachStat.date).format("MM/DD/YYYY"),
            "impressions*100": eachStat.impressions / 100,
            clicks: eachStat.clicks,
            revenue: eachStat.revenue
          };
        });
        console.log("Testing Stats", eventData);
        setDailyStats(eventData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Daily Stats</h1>
      <div className="stats_daily_chart">
        <ComposedChart
          width={1200}
          height={500}
          data={dailyStats}
          margin={{ top: 5, right: 5, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
          <YAxis type="number" domain={[0, 15000]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="impressions*100" stroke="#F27EA1" />
          <Line type="monotone" dataKey="clicks" stroke="#61C7C9" />
        </ComposedChart>
      </div>
    </div>
  );
}
