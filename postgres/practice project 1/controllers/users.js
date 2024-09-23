const pool = require("../models/connection");

const createUser = async (first_name, last_name, email, password, gender) => {
  const query = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    INSERT INTO users(id, first_name, last_name, email, password, gender)
    VALUES(uuid_generate_v4(), $1, $2, $3, $4, $5);
  `;

  const values = [first_name, last_name, email, password, gender];

  try {
    const res = await pool.query(query, values);
    console.log("Data inserted into table");
  } catch (err) {
    console.error(err.message);
  }
};

const updateUser = async (
  id,
  first_name,
  last_name,
  password,
  gender,
  email
) => {
  const query = `
    UPDATE users 
    SET first_name = $1, last_name = $2, password = $3, gender = $4, email = $5
    WHERE id = $6;
  `;

  const values = [first_name, last_name, password, gender, email, id.trim()];

  try {
    const res = await pool.query(query, values);
    console.log("Data updated in the table");
  } catch (err) {
    console.error(err.message);
  }
};

const readUser = async (id) => {
  const query = `
    SELECT * FROM users WHERE id = $1;
  `;

  const values = [id.trim()];

  try {
    const res = await pool.query(query, values);
    console.log("Data viewed");
    return res.rows;
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (id) => {
  const query = `
    DELETE FROM users WHERE id = $1;
  `;

  const values = [id.trim()];

  try {
    const res = await pool.query(query, values);
    console.log("Data deleted from table");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  readUser,
  createUser,
  updateUser,
  deleteUser,
};
