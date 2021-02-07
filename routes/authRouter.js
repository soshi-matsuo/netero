const express = require("express");
const router = express.Router();
const passport = require("passport");

const logger = require("../logger");

router.get(
  "/login",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
  }),
  (req, res) => {}
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/login" }),
  (req, res) => {
    logger.info(`${JSON.stringify(req.user)} has been authenticated!`);
    res.redirect('/index');
  }
);

module.exports = router;