import React, { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import axios from "axios";


function TaskList() {
    const [formData, setFromData] = useState({
        name: "",
        completed: false
    })
    const [tasks,setTasks] = useState([]);
    const { name } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFromData({ ...formData, [name]: value });
    }

    const getTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/tasks")
            setTasks(data);
        } catch (error) {
            toast(error.message)
        }


    }

    useEffect(() => {
        getTasks()
    }, [tasks])

    const createTask = async function (e) {
        e.preventDefault();
        if (name === "") {
            return (
                toast("Task needs to have a name, bruh!")
            )
        }
        try {
            await axios.post("http://localhost:5000/api/tasks", formData)
            setFromData({ ...formData, name: '' })
        } catch (error) {
            toast.error(error.message);
        }

    }

    const deleteTask = async (id)=>{
        try {
            await axios.delete(`http://localhost:5000/api/task/${id}`);
            getTasks();
        } catch (error) {
            toast(error.message);
        }
    }

    return (
        <div>
            <h2 className="heading">Tasks list</h2>
            <TaskForm name={name} handleChange={handleChange} createTask={createTask} />
            <hr />
            {
                tasks.map((task,index)=><Task key={task._id} task={task} index={index} deleteTask={deleteTask}/>)
            }
            <ToastContainer />
        </div>
    )
}


export default TaskList;