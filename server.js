const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const data = require("./data.json")
const app = express();

app.use(bodyparser.json());
app.use(cors());
app.get("/getdata", (req, res) => {
  res.json(data);
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.send("data recived..");
});

app.listen(8080, () => {
  console.log("server started at 8080");
});
