const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { useRouter } = require('./routes/todoitems');
mongoose.connect("mongodb+srv://ayush:RcvvhqD1u1visVR3@cluster0.mlr6n.mongodb.net/TODO_App")

app.use(express.json());

app.use('/', useRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
