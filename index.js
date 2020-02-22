const WebSocket = require("ws");

const http = require("http");
const port = 3000;

const ws = new WebSocket("ws://www.host.com/path");

ws.on("message", function incoming(data) {
  console.log(data);
});

// sockets
ws.on("open", function open() {
  ws.send("something");
});

// http
const requestHandler = (request, response) => {
  ws.send(request.body);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
