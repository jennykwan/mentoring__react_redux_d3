import React, { Component } from 'react';
import { Col, Grid, Navbar, Row } from 'react-bootstrap';
import StoreRsvpWordFrequencyTable from './containers/StoreRsvpWordFrequencyTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Meetup.com Event Registrations</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <StoreRsvpWordFrequencyTable />
          </Col>
          <Col xs={12} md={9}>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
