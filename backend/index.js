const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");

app.use(cors());
app.use(express.json()); 


app.use("/api/testing", require("./routes/test"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});