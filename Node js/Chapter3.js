//asynchronous  ->  Non Blocking         execution is done without waiting of processes
//synchronous  -> Blocking               execution top to bottom

//importing file module

const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

//synchronous call to write file

fs.writeFileSync("./Chapter3-test.txt", "hi baby");

//asynchronous call to write file

fs.writeFile("./Chapter3-test.txt", "hello baby", (err) => {}); //ashynchoronus should use mostly

//synchronous way to read file

const result = fs.readFileSync("./Chapter3-test.txt", "utf-8"); //return the file data in a variable
console.log(result);

fs.readFile("./Chapter3-test.txt", "utf-8", (err, result) => {
  //not return file data in variable its void
  if (!err) {
    console.log(result);
  } else {
    console.log(err);
  }
});

fs.appendFileSync("./Chapter3-test.txt", "hey there\n");

fs, fs.appendFile("./Chapter3-test.txt", "fine", (err) => {});

fs.mkdir("kk", (err) => {});
fs.rmdir("kk", (err) => {});
