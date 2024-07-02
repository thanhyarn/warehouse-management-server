const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { echo } = require("./src/config/wsConfig");
const http = require("http");
const route = require("./src/routers");
const sql = require("mssql/msnodesqlv8");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);
echo.installHandlers(server, { prefix: "/echo" });

route(app);

const PORT = 3003;
const WS_PORT = 8090;
app.listen(PORT, () => console.log(`HTTP server listening on port ${PORT}`));
server.listen(WS_PORT, () =>
  console.log(`SockJS server running on port ${WS_PORT}`)
);
