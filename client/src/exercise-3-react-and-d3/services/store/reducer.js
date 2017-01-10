import { combineReducers } from 'redux-immutable';
import * as actionTypes from './actionTypes';

function rsvps(state, action) {
  switch (action.type) {
  case actionTypes.ADD_RSVPS_DATA:
    return state.setIn(
      ['locations'],
      (state.getIn(
        ['locations']
      ) || []).concat(
        action.data.locations
      )
    );
  default:
    return state;
  }
}

export default combineReducers({
  rsvps
});
