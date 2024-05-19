import * as express from "express";
import { router } from "./routes/index";
import * as path from "path";
import * as bodyParser from "body-parser";
var hbs = require("express-hbs");

let app = express();

app.engine(
  "hbs",
  hbs.express4({
    defaultLayout: "views/layout/default",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use("/", router);
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/scripts", express.static(path.join(__dirname, "scripts")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Express on port 3000");
});
