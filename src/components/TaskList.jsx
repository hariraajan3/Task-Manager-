import { FaPencilAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";


export default function TaskList({tasks,toggleTask,deleteTask,toggleEdit,saveEdit,handleEdit}){     
    return(
        <ul>
            {
              tasks.map((task,index)=>( <li key={index}>
                <div className="list">
                  <input type="checkbox" checked={task.completed} onChange={()=>toggleTask(task.id)}/>
                  {task.isEditing ? (< input
                     type="text"
                     value={task.text}
                     onChange={(e)=>handleEdit(task.id,e.target.value)}
                     onKeyUp={(e) => {
                       if (e.key === 'Enter') saveEdit(task.id);
                     }}/>)
                     : 
                     (<div className={`taskText ${task.completed ? "completed":" "}`}>{task.text}</div>) 
                  }
                  <button className="rename" onClick={()=>toggleEdit(task.id)}>
                    {task.isEditing ? <FaCheck />:<FaPencilAlt /> }
                  </button>
                  <button className="delete" onClick={()=>deleteTask(task.id)}><RiDeleteBin6Line /></button>
                </div>
              </li>))
            }
        </ul>
    ) 
}