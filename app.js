const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");

const app = express();

mongoose.connect("mongodb://localhost:27017/crudapp").then(() => {
  console.log("DB CONNECTED");
});

const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", userRoute);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
