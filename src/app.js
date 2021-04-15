const express = require("express");
const winston = require("winston");
const expressWinston = require("express-winston");
const helmet = require("helmet");

// Routes
const usersRoute = require("./routes/users-route");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json()),
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    colorize: false,
    headerBlacklist: ["authorization"],
  })
);

// Use Routes
app.use(usersRoute);

module.exports = app;
