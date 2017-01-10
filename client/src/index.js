import React from 'react';
import ReactDOM from 'react-dom';

import Exercise1App from './exercise-1-react-only/App';
import exercise2App from './exercise-2-d3-only/app';

import './index.css';

ReactDOM.render(
  <Exercise1App />,
  document.getElementById('exercise-1-react-only')
);

exercise2App('#exercise-2-d3-only');
