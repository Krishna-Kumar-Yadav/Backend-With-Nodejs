//importing user defined modules

const math = require("./Chapter2-export");

console.log(math);
math.add(2, 7);
math.sub(3, 7);

//importing built in modules

const url = require("url");
console.log(url);
