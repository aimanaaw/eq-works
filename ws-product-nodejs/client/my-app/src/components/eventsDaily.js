import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function eventsDaily() {
  const [dailyEvent, setDailyEvent] = useState([])


  useEffect(() => {
    axios.get('events/daily')
    .then((response) => {
      const eventData = response
      setDailyEvent(eventData)

    })
  }, [])

  return (
    <div
  )
}