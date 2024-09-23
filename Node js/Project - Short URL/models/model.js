const pool = require("./connection");

const newTable = async () => {
  const query = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE TABLE IF NOT EXISTS url(
    id  UUID NOT NULL PRIMARY KEY,
    original_url VARCHAR(1000) NOT NULL,
    short_url VARCHAR(20) NOT NULL,
    count BIGINT NOT NULL,
    creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(original_url)
    );

  `;

  try {
    const res = await pool.query(query);
    console.log("Table created Succesfully");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = newTable;
