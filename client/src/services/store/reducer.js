import { combineReducers } from 'redux-immutable';
import * as actionTypes from './actionTypes';

function rsvps(state, action) {
  switch (action.type) {
  case actionTypes.ADD_RSVPS_DATA:
    let newState = state;
    Object.keys(action.data.topics).forEach((topicTerm) => {
      newState = newState.setIn(
        ['topics', topicTerm],
        (newState.getIn(['topics', topicTerm]) || 0) + action.data.topics[topicTerm]
      );
    });
    return newState;
  default:
    return state;
  }
}

export default combineReducers({
  rsvps
});
