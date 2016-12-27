import { createStore } from 'redux';
import Immutable from 'immutable';
import reducer from './reducer';

const initialState = Immutable.fromJS({
  rsvps: []
});

export default () => {
  return createStore(reducer, initialState);
};
