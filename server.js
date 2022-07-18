const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
// const io = require("socket.io")(server);
server.listen(port, () => {
  console.log(`terhubung pada port ${port}`);
});
// io.on("connection", (stream) => {
//   console.log("user connected");
// });
