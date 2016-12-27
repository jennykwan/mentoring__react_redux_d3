import * as actionTypes from './actionTypes';

export const addRsvp = (data) => {
  return {
    type: actionTypes.ADD_RSVP,
    data: data
  };
};
