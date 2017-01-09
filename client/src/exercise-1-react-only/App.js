import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreRsvpWordFrequencyTable from './containers/StoreRsvpWordFrequencyTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Row><Col xs={12}><h1>React-Only</h1></Col></Row>
      <Row><Col xs={12}><StoreRsvpWordFrequencyTable /></Col></Row>
      </div>
    );
  }
}

export default App;
