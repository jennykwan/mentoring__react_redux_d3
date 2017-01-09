export default (callback) => {
  const protocol = (location.protocol === 'https:') ? 'wss:' : 'ws:';
  const url = `${protocol}//${location.host}/rsvps`;

  const ws = new WebSocket(url);
  ws.addEventListener('message', (message, flags) => {
    callback(JSON.parse(message.data));
  });
};
