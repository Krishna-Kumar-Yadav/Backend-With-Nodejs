const pool = require("../models/connection");
const express = require("express");
const app = express();

const createUrl = async (original_url) => {
  const { nanoid } = await import("nanoid");
  const query = `
    INSERT INTO url(id,original_url,short_url,count)
    VALUES(uuid_generate_v4(),$1,$2,0);
  `;

  const shortUrl = nanoid(10);
  const values = [original_url, shortUrl];

  try {
    await pool.query(query, values);
    return shortUrl;
  } catch (err) {
    console.log(err.message);
  }
};

const getUrl = async (short_url) => {
  const query = `
    UPDATE url SET count = count + 1 WHERE short_url = $1 RETURNING original_url;
  `;

  try {
    const res = await pool.query(query, [short_url]);
    return res.rows;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  createUrl,
  getUrl,
};
