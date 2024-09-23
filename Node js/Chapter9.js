//  Express Middlewares -> Middlewares are the function installed between client and server for safety from cyber crimes

const express = require("express");
const app = express();

//Middleware 1

app.use(express.urlencoded({ extended: true })); //parse incoming requests with URL-encoded payloads

//Middleware 2

app.use((req, res, next) => {
  console.log("This is middleware 2");
  next();
});

//Middleware 3

app.use((req, res, next) => {
  console.log("This is middleware 3");
  next();
});

//routes

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(7000);
