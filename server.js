const express = require("express");

const app = express();

app.get("/getdata", (req, res) => {
  res.json([
    {
      name: "sumit",
      class: "IMCA",
      roll: 30,
    },
    {
      name: "kunali",
      class: "IMCA",
      roll: 31,
    },
    {
      name: "sayali",
      class: "IMCA",
      roll: 32,
    },
  ]);
});

app.listen(8080, () => {
  console.log("server started at 8080");
});
