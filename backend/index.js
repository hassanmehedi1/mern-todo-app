const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());


app.use("/api/testing", require("./routes/test"))
app.use("/api/todo", require("./routes/todotask"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});