const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDatabase");

// config
dotenv.config({ path: "backend/config/config.env" });
// Connection to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is open on http://localhost:${process.env.PORT}`);
});
