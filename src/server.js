const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectDB = require("./DB/connectDB")



const app = express();

connectDB();

app.use(bodyparser.json());
app.use(cors());
app.get("/getdata", (req, res) => {
  res.json(data);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.send("data recived..");
});


app.use("/api", require("./Routes/Routes"))

app.listen(8080, () => {
  console.log("server started at 8080");
});
