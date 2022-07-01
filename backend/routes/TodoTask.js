const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.post("/addTodo", async (req, res) => {
  try {
    const { title, task, isComplete } = req.body;

    const todo = new Todo({
      title,
      task,
      isComplete,
    });
    const saveTodo = await todo.save();
    res.json(saveTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.put("/updateTodo/:id", async (req, res) => {
  try {
    const { title, task, isComplete } = req.body;

    const newTodo = {};
    if (title) {
      newTodo.title = title;
    }
    if (task) {
      newTodo.task = task;
    }
    if (isComplete) {
      newTodo.isComplete = isComplete;
    }

    //find the note by id
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).send("Not Found");
    }

    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: newTodo },
      { new: true }
    );
    res.json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    //find the note by delete
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).send("Not Found");
    }

    todo = await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: "deleted Todo" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/fetchAllTodo", async (req, res) => {
   const filter = {};
  const todo = await Todo.find(filter)
  res.json(todo);
});

router.get("/fetchCompletedTodo", async (req, res) => {
   // const filter = {};
  const todo = await Todo.find({isComplete : true})
  res.json(todo);
});

module.exports = router;
