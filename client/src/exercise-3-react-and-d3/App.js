import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';

import RsvpsMap from './containers/RsvpsMap';
import rsvps from './services/rsvps';
import store from './services/store';

const storeInstance = store();
rsvps(storeInstance);

class App extends Component {
  render() {
    return (
      <Provider store={storeInstance}><div>
        <Row><Col xs={12}><h1>React and D3</h1></Col></Row>
        <Row><Col xs={12}><RsvpsMap /></Col></Row>
      </div></Provider>
    );
  }
}

export default App;
