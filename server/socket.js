const app = require("express")();
const server = require("http").createServer(app, (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
});

const clients = [];

const io = require("socket.io")(server);
io.on("connection", (socket) => {
  //   console.log("new client connected !"); 
  socket.on("connected_client", (userId) => {
    clients.push({ userId, socketId: socket.id });
  });
});

server.listen(process.env.SOCKETIO_PORT || 3002);

module.exports = {
  io,
  clients,
  methods:{
    getUserSockets: userId => clients.filter(e=>e.userId === userId).map(e=>e.socketId)
  }
};
