import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StatsHourly() {
  const [hourlyStats, setHourlyStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/stats/hourly")
    .then(response => {
      const eventData = response.data.map(eachStat => {
        return {
          "date": eachStat.date,
          "hour": eachStat.hour,
          "impressions": eachStat.impressions,
          "clicks": eachStat.clicks,
          "revenue": eachStat.revenue
        };
      });
      console.log("Testing the hourly stats", eventData);
      setHourlyStats(eventData);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      {hourlyStats}
    </div>
  )
}