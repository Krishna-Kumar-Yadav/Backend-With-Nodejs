const express = require("express");
const users = require("./Chapter8.json");
const app = express();
const fs = require("fs");
const { stringify } = require("querystring");

//middleware

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const html = `
  <ul>
  ${users.map((item) => `<li>${item.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((item) => item.id === id);
  res.json(user);
});

app.post("/users", (req, res) => {
  const body = req.body;
  //console.log(body);
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./Chapter8.json", JSON.stringify(users), (err, data) => {
    if (!err) {
      console.log("Success");
    } else {
      console.log("fail");
    }
  });
});

app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  //console.log(id);
  const body = req.body;
  const index = users.findIndex((item) => item.id === id);
  users[index] = { id: id, ...body };
  fs.writeFile("./Chapter8.json", JSON.stringify(users), (err, data) => {
    if (!err) {
      console.log("Success");
    } else {
      console.log("fail");
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((item) => item.id === id);
  users[index] = {};
  fs.writeFile("./Chapter8.json", JSON.stringify(users), (err, data) => {
    if (!err) {
      console.log("Success");
    } else {
      console.log("fail");
    }
  });
});

app.listen(7000, () => {
  console.log("Server is running");
});
