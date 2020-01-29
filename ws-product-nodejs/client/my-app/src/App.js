import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
import './styles/homepageButtons.css';
import EventsDaily from './components/EventsDaily'
import EventHourly from './components/eventsHourly'
import StatsDaily from './components/statsDaily'
import StatsHourly from './components/statsHourly'
import Navbar from './components/navbar'

const routes = [
  {path: '/events/daily', name: 'EventsDaily', Component: EventsDaily}
]

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      
      </header>
    </div>
  );
}

export default App;
