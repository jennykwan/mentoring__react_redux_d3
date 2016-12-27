import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as actionTypes from './actionTypes';

function rsvps(state = Immutable.List([]), action) {
  switch (action.type) {
  case actionTypes.ADD_RSVP:
    console.log(action.data);
    return state.push(action.data);
  default:
    return state;
  }
}

export default combineReducers({
  rsvps
});
