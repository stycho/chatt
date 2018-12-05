const express = require('express');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;
const uuid = require('uuid/v4');

// Set port
const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  ws.send(JSON.stringify({
    type: 'assignId',
    id: uuid()
  }));

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
  ws.on('message', function incoming(data) {
    // console.log(data)
    const outMessage = createOutMessage(data);
    console.log(outMessage);
    sendToAllClients(outMessage);
    // ws.send();
  });
});

// Parse and and check type property. Return stringified response object.
function createOutMessage(inMessage) {
  const { username, message, type } = JSON.parse(inMessage);
  let outMessage;
  switch(type) {
    case 'message':
      outMessage = {
        type: 'message',
        id: uuid(),
        username,
        message,
        time: Date.now()
      }
      return JSON.stringify(outMessage);
    case 'alert':
      outMessage = {
        type: 'alert',
        id: uuid(),
        message,
        time: Date.now()
      };
      return JSON.stringify(outMessage);
    default:
      outMessage = {
        type: 'unrecognized'
      }
      return JSON.stringify(outMessage);
  }

}

// Stringify and send message to all connected clients
function sendToAllClients(outMessage) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === require('ws').OPEN) {
      client.send(outMessage);
    }
  });
}