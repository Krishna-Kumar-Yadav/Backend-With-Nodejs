const { log } = require("console");
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  //app.use()  -> use to apply middleware
  console.log("middleware1"); // computer  -> middleware1  ->  middleware2 -> server  ->  route  -> reponse
  next();
});

app.use(function (req, res, next) {
  //app.use()  -> use to apply middleware
  console.log("middleware2"); // computer  -> middleware1  ->  middleware2 -> server  ->  route  -> reponse
  next();
});

app.get("/", (req, res) => {
  res.send("krishna's love");
});

app.get("/about", (req, res) => {
  res.send("krishna's pyar");
});

app.listen(3000);
