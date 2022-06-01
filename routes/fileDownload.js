var express = require("express");
var fileDownloadrouter = express.Router();
var publicDir = require("path").join(__dirname);

/* GET file. */
fileDownloadrouter.get("/", function (req, res, next) {
  res.download(`${publicDir}/xx.png`);
});

module.exports = fileDownloadrouter;
