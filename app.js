const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");

// Router
const qnaRouter = require("./routes/qna");

// Start Express
const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Data sanitization aaginst NOSQL query injection
app.use(mongoSanitize());

// Data sanitization against xss
app.use(xss());

app.use(async function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// API
app.use("/v1", qnaRouter);

module.exports = app;
