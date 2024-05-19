import express from "express";
import config from "./config";
import apiRouter from "./api/index";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import bodyParser from "body-parser";
const server = express();

server.use(bodyParser.json());
server.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
  })
);
server.use(express.static("public"));
server.use("/api", apiRouter);
server.set("view engine", "ejs");

import serverRender from "./serverRender";

server.get(["/", "/contest/:contestId"], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }: any) => {
      res.render("index", {
        initialMarkup,
        initialData,
      });
    })
    .catch((error: string) => {
      console.error(error);
      res.status(404).send("Bad request");
    });
});

server.listen(Number(config.port), config.host, () => {
  console.info("Express listening on port ", config.port);
});
