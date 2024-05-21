const {createTodo} = require("../controllers/createTodo");
const express = require("express");
const router = express.Router();

// API routes for creating Todo
router.post("/createTodo", createTodo);

module.exports = router;
