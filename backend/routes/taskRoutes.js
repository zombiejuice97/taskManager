const { Router } = require("express");
const express = require("express");
const Task = require("../model/taskModel");
const router = express.Router();


router.get('/', function (req, res) {
    res.send('Home page!');
})


//Route to get all tasks 
router.get('/api/tasks',async function(req,res){
    try {
        const task = await Task.find();
        res.json(task);
    } catch (error) {
        res.send(error);
    }
});

//Route to create a task 
router.post('/api/tasks', async function (req, res) {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        res.send(error);
    }

});


module.exports = router;
