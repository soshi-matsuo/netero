require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const path = require("path");
const cors = require('cors');
const express = require("express");
const app = express();

const logger = require("./logger");

const PORT = process.env.PORT || 8000;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        return done(null, profile);
      });
    }
  )
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      console.log('inside req.isauthenticated')
    return next();
  }
  console.log('before redirect to auth/login', req.path)
  res.redirect(303, "/auth/login");
}

app.use(cors());
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const indexRouter = require("./routes/indexRouter");
const trainingRouter = require("./routes/trainingRouter");
const achievementRouter = require("./routes/achievementRouter");
const authRouter = require("./routes/authRouter");

// app.use("/index", ensureAuthenticated, indexRouter);
// app.use("/training", ensureAuthenticated, trainingRouter);
// app.use("/achievement", ensureAuthenticated, achievementRouter);
app.use("/index", indexRouter);
app.use("/training", trainingRouter);
app.use("/achievement", achievementRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  logger.info("listening on %s", PORT);
});
