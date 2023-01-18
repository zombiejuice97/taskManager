const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please add a task']
        },
        completed:{
            type:Boolean,
            defaut:false,
            required:true
        }

    },
    {
        timestamps:true
    }
)


const Task = mongoose.model("Task",taskSchema);

export default Task;