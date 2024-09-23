//Status Code

//  100-199    -> Informational Responses
//  200-299    -> Succesful Responses
//  300-399    -> Redirection Messages
//  400-499    -> Client error Responses
//  500-599    -> Server error Responses

const express = require("express");
const app = express();
const users = require("./Chapter8.json");

app.get("/", (req, res) => {
  res.status(400).json(users);
});

app.listen(7000);
