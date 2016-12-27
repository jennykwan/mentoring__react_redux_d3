import React, { Component } from 'react';
import logo from './logo.svg';
import StoreRsvpWordFrequencyTable from './containers/StoreRsvpWordFrequencyTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meetup.com Event Registrations in Real-Time</h2>
        </div>
        <StoreRsvpWordFrequencyTable />
      </div>
    );
  }
}

export default App;
