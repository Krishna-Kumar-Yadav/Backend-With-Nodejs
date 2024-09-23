const express = require("express");
const app = express();
const { createUrl, getUrl } = require("./controllers/index");
const bodyParser = require("body-parser");

//Create table in database

const table = require("./models/model");
table();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = String(req.params.shortUrl);
  const redirectUrl = await getUrl(shortUrl);

  try {
    if (redirectUrl) {
      res.redirect(redirectUrl[0].original_url);
    } else {
      res.status(404).send("Short URL not found");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.post("/submit", async (req, res) => {
  const original_url = req.body.original_url;

  try {
    if (original_url) {
      const shortUrl = await createUrl(original_url);
      console.log(shortUrl);

      res.status(201).render("index", { data: shortUrl });
    } else {
      res.status(400).send("url is not accepted");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//server call

app.listen(7000);
