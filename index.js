// Creating Server Instance
const express = require("express");
const app = express();

// Importing DB
const dbConnect = require("./config/database");
dbConnect();

// Inporting PORT from .env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middle ware
app.use(express.json());

// Importing Routes
const todoRoutes = require("./routes/todo");

// mountng todo
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port => ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>This is Homepage , Welcome</h1>");
});
