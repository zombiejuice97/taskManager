const { Router } = require("express");
const express = require("express");
const { creatTask, getTasks, updateTask, deleteTask } = require("../controller/taskController");
const Task = require("../models/taskModel");
const router = express.Router();


router.get('/', function (req, res) {
    res.send('Home page!');
})



router.get('/api/tasks',getTasks);
router.post('/api/tasks', creatTask);
router.patch('/api/task/:id',updateTask);
router.delete('/api/task/:id',deleteTask)

module.exports = router;
