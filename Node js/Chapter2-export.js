function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

//Method 1 to export

exports.div = (a, b) => a - b;

//Method 2 and best method to export

module.exports = {
  add,
  sub,
};
