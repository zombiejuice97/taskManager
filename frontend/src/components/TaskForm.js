function TaskForm({handleChange,createTask,name}){
    return(
        <div>
            <form onSubmit={createTask} className="task-form">
                <input 
                type="text" 
                placeholder="Enter task here" 
                value={name}
                name="name"
                onChange={handleChange} 
                 />
                <button>Add</button>
            </form>
        </div>
    )
}


export default TaskForm;