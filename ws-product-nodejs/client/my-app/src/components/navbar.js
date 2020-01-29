import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import '../styles/navbar.css';
import EventsDaily from './EventsDaily'
// import EventHourly from './components/eventsHourly'
// import StatsDaily from './components/statsDaily'
// import StatsHourly from './components/statsHourly'

const routes = [
  {path: '/events/daily', name: 'EventsDaily', Component: EventsDaily}
]

export default function Navbar(props) {
  return(
    <div className="toolbar">
      <BrowserRouter>
      <div>
        <li>
          <Link to="/events/daily" className="nav_li">Events Daily<Route
  path="/events/daily" component={EventsDaily}></Route></Link>
        </li>
      </div>
      </BrowserRouter>
    </div>
  )
}