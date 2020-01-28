import React, { useState, useEffect } from "react"
import axios from "axios"

export default function EventsHourly() {
  const [hourlyEvent, setHourlyEvent] = useState([]);

  useEffect (() => {
    axios.get("http://localhost:5555/events/hourly")
    .then(response => {
      const eventData = response.data.map(eachEvent => {
        return {
          "date": eachEvent.date,
          "hour": eachEvent.hour,
          "numberOfEvents": eachEvent.events
        };
      });
      console.log("Each event in hourly events", eventData);
      setHourlyEvent(eventData);
    })
    .catch((error)=> {
      console.log(error)
    });
  }, [])

}