const express = require("express");
const app = express();
const port = 3000;

app.listen(port);
//test route
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

//time route
app.get("/time", (req, res) => {
  let time = new Date();
  res.send({
    status: 200,
    message: `${time.getHours()}: ${time.getMinutes()}`,
  });
});

//hello route
app.get("/hello/:id", (req, res) => {
  res.send({ status: 200, message: `Hello, ${req.params.id}` });
});

//search route
app.get("/search", (req, res) => {
  req.query.s == "undefined" || req.query.s === ""
    ? res.send({
        status: 500,
        error: true,
        message: "you have to provide a search",
      })
    : res.send({ status: 200, message: "ok", data: req.query.s });
});
