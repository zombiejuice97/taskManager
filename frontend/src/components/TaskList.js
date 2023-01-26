import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this


function TaskList(){
    const [formData,setFromData] = useState({
        name:"",
        completed:false
    })
    const {name}=formData;

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFromData({...formData,[name]:value});
    }

    const createTask =  function(e){
        e.preventDefault();
         if(name === ""){
            
            return (
                toast.error('enter a name!'),
            <ToastContainer/>
            )

    }
    console.log(formData);
    }

    return(
        <div>
            <h2 className="heading">Tasks list</h2>
            <TaskForm name={name} handleChange={handleChange} createTask={createTask}/>
            <hr />
            <Task/>
        </div>
    )
}


export default TaskList;