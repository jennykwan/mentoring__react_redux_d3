import express from 'express';
import expressWs from 'express-ws';

const app = express();
const port = process.env.PORT || 8080;

expressWs(app);

app.ws('/rsvps', (ws, req) => {
  console.log(ws);
  console.log(req);
});

app.listen(port, () => {
  console.log(`Listening on port ${PORT}.`);
});
