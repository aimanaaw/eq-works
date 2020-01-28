import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StatsHourly() {
  const [hourlyStats, setHourlyStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/stats/hourly")
    .then(response => {
      const eventData = response.data.map
    })
  })
}