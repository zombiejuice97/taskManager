
import { FaEdit, FaTrash, FaCheck, FaRegClock } from 'react-icons/fa'

function Task({task,index,deleteTask}) {
    return (
        <div className='task'>

            <p> 
                <b>{index+1}. </b>
                {task.name}
            </p>
            <div className='icons'>
                <FaRegClock color="rgb(158, 159, 159)" />   
                <FaCheck color="rgb(158, 159, 159)" />
                <FaEdit color="rgb(158, 159, 159)" />
                <FaTrash color="rgb(158, 159, 159)" onClick={()=>deleteTask(task._id)}/>
            </div>
        </div>
    )
}

export default Task;