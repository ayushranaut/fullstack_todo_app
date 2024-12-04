const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const todoSchema = new mongoose.Schema({
    title: String,
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
    todoModel
};
