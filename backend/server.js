const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDatabase");

// Handling Uncaught Exception Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });
// Connection to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is open on http://localhost:${process.env.PORT}`);
});

// unhandled promise Rejection error
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
