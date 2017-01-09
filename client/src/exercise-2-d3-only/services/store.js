import Immutable from 'immutable';

import rsvps from './rsvps';

export default (callback) => {
  let data = Immutable.Map();
  rsvps((datum) => {
    const newData = data.mergeWith((previous, next, key) => {
      return previous + next;
    }, datum.topics);
    data = newData;
    callback(newData);
  });
};
