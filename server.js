import express from 'express';
import expressWs from 'express-ws';

const app = express();
const wsInstance = expressWs(app);
const port = process.env.PORT || 3001;

app.ws('/rsvps', (ws, req) => {});
const rsvpsWs = wsInstance.getWss('/rsvps');

const rsvpsInterval = 1000;
setInterval(() => {
  rsvpsWs.clients.forEach((client) => {
    client.send('hello');
  });
}, rsvpsInterval);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
