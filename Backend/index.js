const express = require('express');
require('dotenv').config()
console.log(process.env.MONGO_URL)
const mongoose = require('mongoose');
const app = express();
const { useRouter } = require('./routes/todoitems');
mongoose.connect(process.env.MONGO_URL)

app.use(express.json());

app.use('/', useRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
