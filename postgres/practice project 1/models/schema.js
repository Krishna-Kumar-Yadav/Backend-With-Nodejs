const pool = require("./connection");

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id UUID NOT NULL PRIMARY KEY,
      first_name VARCHAR(50) NOT NULL,
      last_name VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      gender VARCHAR(7) NOT NULL,
      creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      
    );
  `;

  try {
    const res = await pool.query(query);
    console.log("Table is successfully created");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = createTable;
