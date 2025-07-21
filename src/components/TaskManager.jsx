import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList";
import './Task.css';

export default function TaskManager(){
  
    const [tasks,setTasks]=useState([]) 
     
    const addTask=(text)=>{
        const newTask={id:Date.now(),text, completed:false, isEditing:false};
        setTasks([...tasks,newTask]);
    }

    const toggleTask=(id)=>{
       const updatedTasks= tasks.map((task)=>
            task.id === id?{...task,completed:!task.completed}: task    
        )
        setTasks(updatedTasks);
    }

    const deleteTask=(id)=>{
       const updatedTasks= tasks.filter((task)=>
            task.id !== id)
       setTasks(updatedTasks);
        
    }

    const toggleEdit=(id)=>{
        const updatedTasks=tasks.map((task)=>
            task.id === id ? {...task,isEditing:!task.isEditing} : task
        )
        setTasks(updatedTasks)
    }
    const handleEdit=(id,newText)=>{
      const updatedTasks=tasks.map((task)=>
           task.id === id ? {...task,text:newText} : task
      )
      setTasks(updatedTasks)
    }
    const saveEdit=(id)=>{
       const updatedTasks=tasks.map((task)=>
           task.id === id ? {...task,isEditing:false} : task
       )
       setTasks(updatedTasks)
    }

   
    return(
    <div className="task_container">
        <h2>Task Manager</h2>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} 
         toggleEdit={toggleEdit} handleEdit={handleEdit} saveEdit={saveEdit}/>
        <h4>Tasks : {tasks.length}</h4>
    </div>

    )
}