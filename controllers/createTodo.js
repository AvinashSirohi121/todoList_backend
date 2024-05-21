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
