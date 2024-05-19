import * as express from "express";
import * as util from "util";

var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { title: "Express and Aurelia" });
});
router.get("/menuitems", (req, res, next) => {
  res.json({
    menuitems: [
      { ButtonName: "About us" },
      { ButtonName: "Contact" },
      { ButtonName: "Login" },
    ],
  });
});
router.post("/login", (req, res, next) => {
  console.log(`POST: ${util.inspect(req, false, null)}`);
  res.sendStatus(200);
});
export { router };
