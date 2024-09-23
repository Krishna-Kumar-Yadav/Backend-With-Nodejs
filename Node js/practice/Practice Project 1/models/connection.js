const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  database: "project",
  password: "root1234",
  port: 5432,
  host: "localhost",
});

module.exports = pool;
