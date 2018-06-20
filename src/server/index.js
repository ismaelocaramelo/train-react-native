const port = 3001;
const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({port});

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message);
    // Broadcast to everyone else
    wss.clients.forEach(client => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log(`Web Socket Server running on port ${port}`);
