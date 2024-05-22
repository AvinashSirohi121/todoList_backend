const {
  createTodo,
  getAllTodo,
  getTodoById,
  deleteTodoById,
  deleteAllTodo,
  updateTodo
} = require("../controllers/createTodo");
const express = require("express");
const router = express.Router();

// API routes for creating Todo
router.post("/createTodo", createTodo);
router.get("/getTodos", getAllTodo);
router.get("/getTodoById/:id",getTodoById)
router.delete("/deleteTodoById/:id",deleteTodoById)
router.delete("/deleteAllTodo",deleteAllTodo);
router.put("/updateTodo/:id",updateTodo);
module.exports = router;
