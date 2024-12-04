const { Router } = require('express');
const { todoModel } = require('../db'); 
const mongoose = require('mongoose');
const useRouter = Router();


// Add Todo 
useRouter.post('/addTodo', (req, res) => {
  const title = req.body.title;

  if (!title) {
    return res.status(400).json({
      msg: "Title is required"
    });
  }

  todoModel.create({ title: title })  
    .then(result => res.json({
      msg: "Todo added successfully",
      todo: result 
    }))
    .catch(err => res.status(500).json({
      msg: "Error adding todo",
      error: err.message  
    }));
});


// Edit Todo
useRouter.put('/editTodo/:id', async (req, res) => {
    const id = req.params.id;
    const { title } = req.body;

    // Validate the input
    if (!title) {
        return res.status(400).json({
            success: false,
            message: 'Title is required',
        });
    }

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid ID format',
        });
    }

    try {
        // Find the todo by ID and update the title
        const updatedTodo = await todoModel.findByIdAndUpdate(
            id,
            { title: title }, // Fields to update
            { new: true } // Return the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Todo updated successfully',
            updatedTodo,
        });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating todo',
            error: error.message,
        });
    }
});


// Delete Todo 
useRouter.delete('/deleteTodo/:id', async (req, res) => {
    const id = req.params.id;

    try {

        const deletedTodo = await todoModel.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found',
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Todo deleted successfully',
            deletedTodo: deletedTodo,
        });
    } catch (error) {
        console.error('Error while deleting:', error);
        
        res.status(500).json({
            success: false,
            message: 'Error deleting the todo',
            error: error.message,
        });
    }
});

// get all todo
useRouter.get('/', async (req, res) => {
    try {
        const todos = await todoModel.find();
        res.status(200).json({
            todos
        });
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({
            message: 'Error fetching todos',
            error: error.message,
        });
    }
});


module.exports = {
  useRouter
};