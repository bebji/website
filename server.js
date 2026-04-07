const WebSocket = require('ws');

// Use the port your tunnel is pointing to
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('client connected');

    ws.on('message', (data) => {
        // Broadcast the message to EVERY connected client
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        });
    });

    ws.on('close', () => console.log('client disconnected'));
});

console.log('Server is running on port 8080');
