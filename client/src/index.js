import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import exercise1Store from './exercise-1-react-only/services/store';
import exercise1Rsvps from './exercise-1-react-only/services/rsvps';
import Exercise1App from './exercise-1-react-only/App';

import exercise2App from './exercise-2-d3-only/app';

import './index.css';

const storeInstance = exercise1Store();
exercise1Rsvps(storeInstance);
ReactDOM.render(
  <Provider store={storeInstance}>
    <Exercise1App />
  </Provider>,
  document.getElementById('exercise-1-react-only')
);

exercise2App('#exercise-2-d3-only');
