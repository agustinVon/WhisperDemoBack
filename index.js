const port = 3000

const WebSocket = require('ws')
const wss = new WebSocket.WebSocketServer({ port });

wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
        // Handle incoming audio data chunks
        // Process, store, or further manipulate the audio data as needed
        console.log('Received audio data chunk:', message);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

console.log(`WebSocket server listening on port ${port}`);
