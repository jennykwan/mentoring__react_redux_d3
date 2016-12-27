import * as actionTypes from './actionTypes';

export const addRsvpsData = (data) => {
  return {
    type: actionTypes.ADD_RSVPS_DATA,
    data: data
  };
};
