//imports 

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const Task = require('./model/taskModel');
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(taskRoutes);



mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(3000, function () {
            console.log('Server running on port 3000!');
        });

    })
    .catch((err) => console.log(err));

