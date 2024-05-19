"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var util = require("util");
var router = express.Router();
exports.router = router;
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express i Angular 2" });
});
router.get("/menuitems", function (req, res, next) {
  res.json({
    menuItems: [
      { ButtonName: "About us" },
      { ButtonName: "Contacts" },
      { ButtonName: "Login" },
    ],
  });
});
router.post("/login", function (req, res, next) {
  console.log("" + util.inspect(req.body, false, null));
  res.sendStatus(200);
});
