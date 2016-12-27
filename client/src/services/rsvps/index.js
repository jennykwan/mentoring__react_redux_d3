import {newRsvp} from '../../actions/index';
console.log(newRsvp);

const rsvps = (store) => {
  const protocol = (location.protocol === 'https:') ? 'wss:' : 'ws:';
  const url = `${protocol}//${location.host}/rsvps`;
  console.log(url);

  const ws = new WebSocket(url);
  ws.addEventListener('message', (message, flags) => {
    console.log(message.data);
    store.dispatch(newRsvp(message.data));
  });
};

export default rsvps;
