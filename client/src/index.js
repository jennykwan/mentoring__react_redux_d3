import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import rsvps from './services/rsvps';
import App from './App';
import './index.css';

const storeInstance = store();

rsvps(storeInstance);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
