import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import '../styles/navbar.css';
import EventsDaily from './EventsDaily'
import EventsHourly from './EventsHourly'
import StatsDaily from './StatsDaily'
import StatsHourly from './StatsHourly'

const routes = [
  {path: '/events/daily', name: 'EventsDaily', Component: EventsDaily},
  {path: '/events/hourly', name: 'EventsHourly', Component: EventsHourly},
  {path: '/stats/daily', name: 'StatsDaily', Component: StatsDaily},
  {path: '/stats/hourly', name: 'StatsHourly', Component: StatsHourly}
]

export default function Navbar(props) {
  return(
    <div className="toolbar">
      <BrowserRouter>
      <div>
          <Link to="/events/daily" className="toolbar_navigation">Events Daily</Link>
          <Link to="/events/hourly" className="toolbar_navigation">Events Hourly</Link>
          <Link to="/stats/daily" className="toolbar_navigation">Stats Daily</Link>
          <Link to="/stats/hourly" className="toolbar_navigation">Stats Hourly</Link>
      </div>
      <div>
      <Route
  path="/events/daily" component={EventsDaily}></Route>
  <Route
  path="/events/hourly" component={EventsHourly}></Route>
  <Route
  path="/stats/daily" component={StatsDaily}></Route>
  <Route
  path="/stats/daily" component={StatsHourly}></Route>
      </div>
      </BrowserRouter>
    </div>
  )
}