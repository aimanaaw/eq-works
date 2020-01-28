import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/eventsDaily.css'

export default function EventsDaily() {
  const [dailyEvent, setDailyEvent] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5555/events/daily')
    .then((response) => {
      // console.log(response.data)
      const eventData = response.data.map(eachEvent => {
        console.log(eachEvent)
        return ({
        "date": eachEvent.date,
        "numberOfEvents": eachEvent.events
      })})
      console.log(eventData)
      setDailyEvent(eventData)
    })
    .catch(function(error) {
      console.log(error)
    })
  },[])

  return (
    <div className='events_view'>
      <header className='events_daily_main'>
      {dailyEvent}
        <h1>Welcome to React</h1>
      </header>

    </div>
  )
}