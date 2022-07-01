const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://todo_admin:e5JyLKNrG3Pdsr32@cluster0.o94kq.mongodb.net/TodoApp?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Database Connected Boss");
  });
};

console.log(mongoURI);

module.exports = connectToMongo;
