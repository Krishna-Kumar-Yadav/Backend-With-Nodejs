const express = require("express");
const path = require("path"); // Required for serving static files
const createTable = require("./models/model");
const { insertData, fetchData } = require("./controllers/index"); // Ensure correct function name and casing

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

const app = express(); // Initialize the Express app

// Create the table (ensure it only runs once, perhaps by checking if the table already exists)
createTable();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Render the form on the home page
app.get("/", (req, res) => {
  res.render("index");
});

// Render the form on "/create" page
app.get("/create", (req, res) => {
  res.render("create");
});

// Define routes
app.post("/create", upload.single("img"), insertData); // Use the correct callback, insertData
app.post("/login", fetchData);

app.get("/login", (req, res) => {
  res.render("login");
});

// Start the server
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
