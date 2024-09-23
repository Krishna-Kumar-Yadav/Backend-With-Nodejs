const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json()); //parser for json
app.use(express.urlencoded({ extended: true })); //parser for urlencode
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir("./public/files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./public/files/${req.body.title.split(" ").join("")}` + ".txt",
    req.body.content,
    () => {
      res.redirect("/");
    }
  );
});

app.listen(3000, () => {
  console.log("running");
});
