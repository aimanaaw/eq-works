import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/homepageButtons.css';
import Eventsdaily from './components/EventsDaily'
import EventHourly from './components/eventsHourly'
import StatsDaily from './components/statsDaily'
import StatsHourly from './components/statsHourly'

function App() {
  return (
    <div className="App">
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
        <button
        type="submit"
        className="homepage_buttons"
        ></button>
      </header>
      <Eventsdaily/>
      <EventHourly/>
      <StatsDaily/>
      <StatsHourly/>
    </div>
  );
}

export default App;
