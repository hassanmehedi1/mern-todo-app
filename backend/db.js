const mongoose = require("mongoose");

const mongoURI =
  "mongodb://localhost:27017/TodoApp?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

module.exports = connectToMongo;