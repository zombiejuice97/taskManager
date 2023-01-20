//imports 

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const Task = require('../model/taskModel');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Home page!');
})

app.post('/api/tasks', async function (req, res) {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        res.send(error);
    }

})



mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(3000, function () {
            console.log('Server running on port 3000!');
        });

    })
    .catch((err) => console.log(err));

