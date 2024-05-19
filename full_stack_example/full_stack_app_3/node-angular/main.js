"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var Index = require("./routes/index");
var path = require("path");
var hbs = require("express-hbs");
app.engine(
  "hbs",
  hbs.express4({
    defaultLayout: "views/layout",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", Index.router);
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/css", express.static(__dirname + "/css"));
app.listen(3000, function () {
  console.log("Express lisening on port 3000");
});
