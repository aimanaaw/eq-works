import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/eventsDaily.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import moment from 'moment';




export default function EventsDaily() {
  const [dailyEvent, setDailyEvent] = useState([]);

  useEffect(() => {
    // axios
    axios.get("https://localhost:5555/events/daily")
      // .get("https://test-eqworks.herokuapp.com/events/daily")
      .then(response => {
        const eventData = response.data.map(eachEvent => {
          return {
            "date": moment.utc(eachEvent.date).format('MM/DD/YYYY'),
            "numberOfEvents": eachEvent.events
          };
        });
        setDailyEvent(eventData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <h1 className="events_header">Daily Events</h1>
    <div className="events_daily_chart">
      <LineChart width={1200} height={500} data={dailyEvent}
      margin={{ top: 5, right: 5, left: 20, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
        <YAxis type="number" domain={[0, 50]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="numberOfEvents" stroke="#F27EA1" />
      </LineChart>
     
    </div>
    </div>
  );
}

