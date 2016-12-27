import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import * as actionTypes from './actionTypes';

function rsvps(state = Immutable.Map({}), action) {
  switch (action.type) {
  case actionTypes.ADD_RSVP:
    return state.set(action.data, (state.get(action.data) || 0) + 1);
  default:
    return state;
  }
}

export default combineReducers({
  rsvps
});
