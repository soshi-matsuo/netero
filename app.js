require("dotenv").config();
const path = require("path");
const cors = require('cors');
const express = require("express");
const app = express();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const logger = require("./logger");

const PORT = process.env.PORT || 8000;

const validateJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_API_IDENTIFIER,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

app.use(cors({ origin: process.env.REACT_APP_URL }));
app.use(express.json());
app.use((req, _, next) => {
  logger.info(`${req.method} request to ${req.url}`);
  next();
});

const indexRouter = require("./routes/indexRouter");
const trainingRouter = require("./routes/trainingRouter");
const achievementRouter = require("./routes/achievementRouter");

app.use(validateJwt);
app.use("/index", indexRouter);
app.use("/training", trainingRouter);
app.use("/achievement", achievementRouter);

app.listen(PORT, () => {
  logger.info("listening on %s", PORT);
});
