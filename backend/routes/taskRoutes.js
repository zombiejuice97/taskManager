const { Router } = require("express");
const express = require("express");
const { creatTask, getTasks } = require("../controller/taskController");
const Task = require("../models/taskModel");
const router = express.Router();


router.get('/', function (req, res) {
    res.send('Home page!');
})


//Route to get all tasks 
router.get('/api/tasks',getTasks);

//Route to create a task 
router.post('/api/tasks', creatTask);


module.exports = router;
