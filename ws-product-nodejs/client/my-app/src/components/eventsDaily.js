import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/eventsDaily.css";
import { Barchart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';




export default function EventsDaily() {
  const [dailyEvent, setDailyEvent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/events/daily")
      .then(response => {
        // console.log(response.data)
        const eventData = response.data.map(eachEvent => {
          return {
            "date": eachEvent.date,
            "numberOfEvents": eachEvent.events
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
    <div className="events_daily_main">
      <LineChart width={900} height={500} data={dailyEvent}
      margin={{ top: 5, right: 5, left: 20, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
        <YAxis type="number" domain={[0, 1000]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Average daily budget" stroke="#F27EA1" />
        <Line type="monotone" dataKey="Amount spent per day" stroke="#61C7C9" />
      </LineChart>
      {dailyEvent.map(event => {
        return (
          <div className="events_view">
            {event.date}
            <br />
            {event.numberOfEvents}
            <br />
          </div>
        );
      })}
    </div>
  );
}

