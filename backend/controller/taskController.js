const Task = require("../models/taskModel");

const creatTask = async (req,res)=> {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        res.send(error);
    }
}

const getTasks = async function(req,res){
    try {
        const task = await Task.find();
        res.json(task);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {creatTask,getTasks}