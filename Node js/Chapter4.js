const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New request recieved\n`;
  fs.appendFileSync("Chapter4-test.txt", log, (err) => {});

  console.log("Server Created");
  res.end("Hi");
});

myServer.listen(8000, () => {
  console.log("running");
});
