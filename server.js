import express from 'express';
import expressWs from 'express-ws';

const app = express();
const port = process.env.PORT || 3001;

expressWs(app);

app.ws('/rsvps', (ws, req) => {
  ws.on('message', (message) => {
    ws.send(message);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
