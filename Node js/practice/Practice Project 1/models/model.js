const pool = require("./connection");

const createTable = async () => {
  const query = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE TABLE IF NOT EXISTS formData(
      id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
      full_name VARCHAR(50) NOT NULL,
      date_of_birth DATE NOT NULL,
      phone_number VARCHAR(15) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL,
      creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(phone_number)
    );
  `;

  try {
    await pool.query(query);
    console.log("Table created");
  } catch (err) {
    console.log("Error creating table:", err.message);
  }
};

module.exports = createTable;
