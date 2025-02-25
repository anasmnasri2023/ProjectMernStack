import io from "socket.io-client";
export const socketClient = io("http://localhost:3002", {
  autoConnect: false,
  transports: ["websocket"],
  upgrade: false,
});
