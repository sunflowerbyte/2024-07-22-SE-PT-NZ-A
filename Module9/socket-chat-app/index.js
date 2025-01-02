const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

// Store online users
let onlineUsers = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected");

  //Nickname
  socket.on("nickname", (nickname) => {
    onlineUsers[socket.id] = nickname || `User-${socket.id.slice(0, 4)}`;
    io.emit("online users", Object.values(onlineUsers));
    socket.emit("nickname", `Welcome, ${onlineUsers[socket.id]}!`);
  });

  // Chat messages
  socket.on("chat message", (msg) => {
    const senderNickname = onlineUsers[socket.id] || "Anonymous";
    socket.broadcast.emit("chat message", `${senderNickname}: ${msg}`);
    socket.emit("chat message", `You: ${msg}`);
  });

  // Disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    delete onlineUsers[socket.id];
    io.emit("online users", Object.values(onlineUsers));
    io.emit("connection", "A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("Listening on *:3000");
});
