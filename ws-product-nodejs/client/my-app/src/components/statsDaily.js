import React, { useState, useEffect } from "react";
import axios from "axios";

export default function StatsDaily() {
  const [dailyStats, setDailyStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/stats/daily")
  })
}