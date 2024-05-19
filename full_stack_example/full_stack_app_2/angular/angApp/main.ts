import * as express from "express";
let app = express();

import * as Index from "./routes/index";

import * as path from "path";
var hbs = require("express-hbs");

app.engine(
  "hbs",
  hbs.express4({
    defaultLayout: "views/layout",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

import * as bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", Index.router);

app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/dist", express.static(__dirname + "/dist"));
app.use("/css", express.static(__dirname + "/css"));

app.listen(3000, () => {
  console.log(`Express lisening on port 3000`);
});
