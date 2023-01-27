//imports 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const Task = require('./models/taskModel');
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(taskRoutes);


//firing up the server and connecting to mongo
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, function () {
            console.log('Server running on port 5000!');
        });

    })
    .catch((err) => console.log(err));

