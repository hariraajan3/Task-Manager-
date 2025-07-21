import { useState } from "react";
export default function TaskForm({addTask}) {
   
    const [value, setValue] = useState("");
   
    const submit=(event)=>{
      event.preventDefault();
      if(value.trim()){
        addTask(value);
        setValue("");
      }
    }

    return(
        <>
          <form className="add_form" action="" onSubmit={submit}>
            <input  
             className="add_task"
             onChange={(e)=>setValue(e.target.value)}
             type="text"  
             placeholder="Add a Task.."  
             value={value}
             />
            <button type="submit" className="add_task_btn">Add</button> 
          </form>
        </>
    )
    
}