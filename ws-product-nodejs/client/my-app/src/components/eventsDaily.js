import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/eventsDaily.css";

export default function EventsDaily() {
  const [dailyEvent, setDailyEvent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/events/daily")
      .then(response => {
        // console.log(response.data)
        const eventData = response.data.map(eachEvent => {
          return {
            date: eachEvent.date,
            numberOfEvents: eachEvent.events
          };
        });
        console.log(eventData);
        setDailyEvent(eventData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {dailyEvent.map(event => {
        return (
          <div className="events_view">
            {event.date}
            <br />
            {event.events}
            <br />
          </div>
        );
      })}
    </div>
  );
}
