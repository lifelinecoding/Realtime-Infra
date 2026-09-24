import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

const httpServer = createServer(app);
const server = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

const PORT = 3000;

server.on("connection", (socket) => {
  console.log("A User connected: ", socket.id);

  socket.emit("message", "Kaise ho bhai");
  socket.on("ack", (data) => {
    console.log(data);
  })

});

app.route("/").get((req, res) => {
  res.send("Hello World!");
});

httpServer.listen(PORT, () => {
  console.log(`Server is running at: ${PORT}`);
});
