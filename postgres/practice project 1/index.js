const express = require("express");

const app = express();

//PERFORMING CRUD OPERATIONS

const {
  readUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./controllers/users");

//TABLE CREATION FUNCTION
const createTable = require("./models/schema");
createTable();

//ROUTES

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await readUser(id); // Await the async function
    res.status(200).json(user); // Send the user data in JSON format
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle errors
  }
});

app.listen(7000);
