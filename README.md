# Todo App Backend

Welcome to the Todo App backend project! This project is a simple and effective backend service for managing a todo list, built using Express.js and MongoDB. Below you will find details on how to set up the project, the routes available, and how to interact with each route.

## Table of Contents
1. [Setup](#setup)
2. [Routes](#routes)
    - [Create Todo](#create-todo)
    - [Get All Todos](#get-all-todos)
    - [Get Todo By ID](#get-todo-by-id)
    - [Delete Todo By ID](#delete-todo-by-id)
    - [Delete All Todos](#delete-all-todos)
    - [Update Todo](#update-todo)
3. [Contribution](#contribution)
4. [License](#license)

## Setup

To set up and run this project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/todo-app-backend.git
    cd todo-app-backend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Configure environment variables:**
    Create a `.env` file in the root of the project and add your MongoDB connection string:
    ```env
    MONGODB_URI=your-mongodb-connection-string
    ```

4. **Run the server:**
    ```sh
    npm start
    ```

## Routes

### Create Todo
- **URL:** `/createTodo`
- **Method:** POST
- **Description:** Creates a new todo item.
- **Request Body:**
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```
- **Response:**
    - **201 Created:** Returns the created todo item.

### Get All Todos
- **URL:** `/getTodos`
- **Method:** GET
- **Description:** Retrieves all todo items.
- **Response:**
    - **200 OK:** Returns an array of todo items.

### Get Todo By ID
- **URL:** `/getTodoById/:id`
- **Method:** GET
- **Description:** Retrieves a todo item by its unique ID.
- **Parameters:**
    - `id`: The ID of the todo item.
- **Response:**
    - **200 OK:** Returns the todo item if found.
    - **404 Not Found:** If the todo item does not exist.

### Delete Todo By ID
- **URL:** `/deleteTodoById/:id`
- **Method:** DELETE
- **Description:** Deletes a todo item by its unique ID.
- **Parameters:**
    - `id`: The ID of the todo item.
- **Response:**
    - **200 OK:** Returns a success message if the deletion was successful.
    - **404 Not Found:** If the todo item does not exist.

### Delete All Todos
- **URL:** `/deleteAllTodo`
- **Method:** DELETE
- **Description:** Deletes all todo items.
- **Response:**
    - **200 OK:** Returns a success message if all todo items were deleted.

### Update Todo
- **URL:** `/updateTodo/:id`
- **Method:** PUT
- **Description:** Updates a todo item by its unique ID.
- **Parameters:**
    - `id`: The ID of the todo item.
- **Request Body:**
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```
- **Response:**
    - **200 OK:** Returns the updated todo item.
    - **404 Not Found:** If the todo item does not exist.

## Contribution

If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request. Contributions are always welcome!

## License

This project is licensed under the MIT License.

---

Thank you for checking out the Todo App backend project! If you have any questions, please feel free to reach out.
