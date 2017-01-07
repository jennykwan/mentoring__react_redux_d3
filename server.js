import express from 'express';
import expressWs from 'express-ws';
import request from 'request';
import { StringDecoder } from 'string_decoder';

const app = express();
const wsInstance = expressWs(app);
const port = process.env.PORT || 3001;

const state = {
  topics: {}
};

request
  .get('http://stream.meetup.com/2/rsvps')
  .on('response', (response) => {
    const decoder = new StringDecoder('utf8');
    let buffer = '';
    response.on('data', function(data) {
      buffer += decoder.write(data);
      const rsvpStrs = buffer.split('\n');
      buffer = rsvpStrs.pop();
      const rsvps = rsvpStrs.map(JSON.parse);
      rsvps.forEach((rsvp) => {
        rsvp.group.group_topics.forEach((topic) => {
          state.topics[topic.topic_name] = (state.topics[topic.topic_name] || 0) + 1;
        });
      });
    });
  });

app.ws('/rsvps', (ws, req) => {});
const rsvpsWs = wsInstance.getWss('/rsvps');

const rsvpsInterval = 250;
setInterval(() => {
  rsvpsWs.clients.forEach((client) => {
    const topics = state.topics;
    state.topics = {};
    client.send(JSON.stringify({
      topics: topics
    }));
  });
}, rsvpsInterval);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
