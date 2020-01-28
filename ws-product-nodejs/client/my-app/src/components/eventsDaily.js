import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/eventsDaily.css'

export default function EventsDaily() {
  const [dailyEvent, setDailyEvent] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5555/events/daily')
    .then((response) => {
      console.log(response.rows)
      setDailyEvent(response)
    })
    .catch(function(error) {
      console.log(error)
    })
  }, [])

  return (
    <div className='events_view'>
      <header className='events_daily_main'>
      {dailyEvent}
        <h1>Welcome to React</h1>
      </header>

    </div>
  )
}