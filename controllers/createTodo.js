const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    // creating a new todo object and insert in DB

    const response = await Todo.create({ title, description });
    console.log("Res =>", response);
    // send json response with success flag

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log("Error in createTodo =>", err);

    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};

exports.getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({});
    if (todo) {
      res.status(200).json({
        success: true,
        data: todo,
        message: "All Todo Data fetched successfully",
      });
    }
  } catch (err) {
    console.log("Error while getting all todo", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    let id = req.params.id;

    const todo = await Todo.findById({ _id: id });
    if (todo) {
      res.status(200).json({
        success: true,
        data: todo,
        message: `Todo data for given id => ${id}`,
      });
    }
  } catch (err) {
    console.log("Error while getting Todo Data for id =>", err);
    res.status(500).json({
      success: false,
      err: err.message,
      message: "Internal Server Error",
    });
  }
};

exports.deleteTodoById = async (req, res) => {
  try {
    let id = req.params.id;

    let todo = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: false,
      message: `Todo for id => ${id} deleted successfully`,
      data: todo,
    });
  } catch (err) {
    console.log("Error while deleting the todo", err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Error in deleting the Todo",
    });
  }
};

exports.deleteAllTodo = async (req, res) => {
  try {
    let x = await Todo.deleteMany({});
    if (x) {
      res.status(200).json({
        success: true,
        data: `${x} no. of todos deleted`,
        message: "Todo deleted successfully",
      });
    }
  } catch (err) {
    console.log("Error while deleting All todos");
    res.status(500).json({
      success: false,
      err: err.message,
      message: "Error while deleting All todos",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    let id = req.params.id;
    let { title, description } = req.body;

    let todo = await Todo.findByIdAndUpdate(
      id,
      {
        $set: {
          title: title,
          description: description,
        },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo => ${id} updated successfully`,
    });
  } catch (err) {
    console.log("Error while updating the todo");
    res.status(500).json({
      success: false,
      err: err.message,
      message: "Error while updating the todo",
    });
  }
};
