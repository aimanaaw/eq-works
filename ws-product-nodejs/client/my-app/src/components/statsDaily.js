import React, { useState, useEffect } from "react";
import axios from "axios";

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
      console.log(eachStat);
      setDailyStats(eachStat);
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