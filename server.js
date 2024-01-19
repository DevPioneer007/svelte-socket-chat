const { Server } = require("socket.io")

const io = new Server({
  cors: {
    origin: "http://localhost:8080"
  }
})

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

io.listen(3000);