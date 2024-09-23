const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.appendHeader("Owner", "KKY"); //ADDING HEADER WHILE RESPONSING
  res.setHeader("X-myname", "krishna"); // 'X' is necessary it shows the header is usto otherwise it will takes as a builtin header
  console.log(req.headers);

  res.send("Hi");
});

app.listen(7000);
