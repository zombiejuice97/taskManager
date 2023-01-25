const Task = require("../models/taskModel");

const creatTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json(task);
    } catch (error) {
        res.send(error);
    }
}

const getTasks = async function (req, res) {
    try {
        const task = await Task.find();
        res.json(task);
    } catch (error) {
        res.send(error);
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
        res.send('Task updated');    
    } catch (error) {
          res.send(error);  
    }
}

const deleteTask = async (req,res)=> {
    try {
        const{id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.send(`task with the id:${id} doesn't exist`);
        }
        else{
            res.send('task deleted');
        }
    } catch (error) {
        
    }
}


module.exports = { creatTask, getTasks,updateTask,deleteTask }