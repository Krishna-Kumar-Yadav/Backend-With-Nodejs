const pool = require("../models/connection");
const { setUser, getUser } = require("../service/auth");

const insertData = async (req, res, next) => {
  console.log(req.file);

  const data = req.body;

  const query = `
    INSERT INTO formdata(full_name,date_of_birth,phone_number,email,password)VALUES
    ($1,$2,$3,$4,$5);
  `;
  const values = [
    data.name,
    data.dob,
    data.phoneNumber,
    data.email,
    data.password,
  ];

  try {
    if (data) {
      await pool.query(query, values);
      console.log("data inserted");
      const token = setUser(data);
      res.cookie("uid", token);
      res.status(201).render("read", { data });
    } else {
      res.status(404).send("Insert the data correctly");
    }
  } catch (err) {
    return next(err);
  }
};

const fetchData = async (req, res) => {
  const data = req.body;
  const query = `
    SELECT * FROM formdata WHERE (phone_number = $1 OR email = $1) AND password = $2;
  `;
  const values = [data.loginid, data.loginPassword];

  try {
    if (!data.loginid || !data.loginPassword) {
      return res.status(400).send("Please provide both login ID and password");
    }

    const result = await pool.query(query, values);

    if (result.rows.length > 0) {
      // Successful login
      res.status(200).render("read", { data: result.rows[0] });
    } else {
      // Invalid login credentials
      res.status(401).render("login", { error: "Wrong ID or password" });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  insertData,
  fetchData,
};
