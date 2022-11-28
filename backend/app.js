const express = require("express");
const errorHandlerGard = require("./middleware/error");
const app = express();

app.use(express.json());

// Route import
const product = require("./routes/productRoute");

app.use("/api/v1", product);

// middleware  error handler
app.use(errorHandlerGard);

module.exports = app;
