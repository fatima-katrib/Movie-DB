const express = require("express");
const app = express();
const port = 3000;
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب", year: 1992, rating: 6.2 },
];

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

//movies route
app.get("/movies/create", (req, res) => {
  res.send("create");
});

app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: movies });
});
app.get("/movies/read/by-date", (req, res) => {
  res.send({ status: 200, data: [...movies].sort((a, b) => b.year - a.year) });
});
app.get("/movies/read/by-rating", (req, res) => {
  res.send({
    status: 200,
    data: [...movies].sort((a, b) => b.rating - a.rating),
  });
});
app.get("/movies/read/by-title", (req, res) => {
  res.send({
    status: 200,
    data: [...movies].sort((a, b) => a.title.localeCompare(b.title)),
  });
});
app.get("/movies/read/id/:id", (req, res) => {
  const id = req.params.id;
  id && id <= movies.length
    ? res.send({
        status: 200,
        data: movies[id],
      })
    : res
        .status(404)
        .send({
          status: 404,
          error: true,
          message: `the movie ${id} does not exist`,
        });
});

app.get("/movies/update", (req, res) => {
  res.send("update");
});

app.get("/movies/delete", (req, res) => {
  res.send("delete");
});
