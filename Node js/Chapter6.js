//in Node Js there is so muuh code stuff due to which things are getting complicated and user had to manage the code from scratch which create problems in readability , understanding and all that that's why Express Framework get introduced as assistant which handle all these problems and make the code understandable and easier

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/about", (req, res) => {
  res.send(`Hi ${req.query.name}`);
  console.log(req.query.name);
});

app.listen(8000);
