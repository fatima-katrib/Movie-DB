const express = require("express");
const app = express();
const port = 3000;

app.listen(port);
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  let time = new Date();
  res.send({ status: 200, message: `${time.getHours}: ${time.getMinutes}` });
});
