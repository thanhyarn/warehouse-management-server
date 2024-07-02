// dbConfig.js
const sql = require("mssql/msnodesqlv8");

var config = {
  user: "sa",
  password: "123123",
  server: "DESKTOP-N40A3EE\\SQLEXPRESS",
  database: "RFID_Data",
  driver: "msnodesqlv8",
  option: {
    trustedConnection: true,
  },
};

module.exports = config;
