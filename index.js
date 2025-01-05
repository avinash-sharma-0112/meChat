const express = require('express');
const http = require('http'); // Import the HTTP module
const { Server } = require('socket.io'); // Import Socket.IO

const uploadImage = require('./utils');

const app = express();
const server = http.createServer(app); // Create an HTTP server
const io = new Server(server, {maxHttpBufferSize: 1e7}); // Pass the HTTP server to Socket.IO

// Middleware to serve static files
app.use(express.static(__dirname));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:roomCode', (req, res) => {
    res.sendFile(__dirname + '/room.html');
})

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('joinRoom', (roomCode) => {
    socket.join(roomCode);
    console.log(`User joined room: ${roomCode}`);
    socket.emit('message', `You joined room: ${roomCode}`);
  });

  socket.on('sendMessage', (roomCode, message) => {
    console.log(roomCode);
    socket.to(roomCode).emit('receiveMessage', message);
  });

  socket.on('sendImage', async (roomCode, image) => {
    var imageUrl = await uploadImage(image);
    console.log(imageUrl);
    socket.to(roomCode).emit('receiveImage', imageUrl);
    io.to(socket.id).emit('imgUrl', imageUrl);
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });

});


// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
