import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/eventsHourly.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import moment from 'moment';

export default function EventsHourly() {
  const [hourlyEvent, setHourlyEvent] = useState([]);

  useEffect (() => {
    axios.get("https://test-eqworks.herokuapp.com/events/hourly")
    .then(response => {
      const eventData = response.data.map(eachEvent => {
        return {
          "date": moment.utc(eachEvent.date).format('MM/DD/YYYY'),
          "hour": eachEvent.hour,
          "numberOfEvents": eachEvent.events
        };
      });
      setHourlyEvent(eventData);
    })
    .catch((error)=> {
      console.log(error)
    });
  }, []);

  return (
    <div>
    <h1 className="events_header">Hourly Events</h1>
    <div className="events_hourly_chart">
      <LineChart width={1500} height={500} data={hourlyEvent}
      margin={{ top: 5, right: 5, left: 20, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
        <YAxis type="number" domain={[0, 30]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="numberOfEvents" stroke="#F27EA1" />
        <Line type="monotone" dataKey="hour" stroke="#61C7C9" />
      </LineChart>
     
    </div>
    </div>
  )

}