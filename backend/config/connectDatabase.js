const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connection Successful"))
    .catch((err) => console.log("mongodb connection Failed"));
};

module.exports = connectDatabase;
