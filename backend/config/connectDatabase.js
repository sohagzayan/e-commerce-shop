const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connection Successful"))
    .catch((err) => console.log("mongodb connection Failed"));
};

module.exports = connectDatabase;
