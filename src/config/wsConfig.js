const sockjs = require("sockjs");

const connections = [];

const echo = sockjs.createServer();

echo.on("connection", function (conn) {
  console.log("Conn data: ", conn);
  connections.push(conn);
  conn.on("data", function (message) {
    // Xử lý tin nhắn nhận được từ client nếu cần
  });
  conn.on("close", function () {
    connections = connections.filter((c) => c !== conn);
  });
});

function broadcastData(data) {
  connections.forEach((conn) => conn.write(JSON.stringify(data)));
}

module.exports = { echo, broadcastData };
