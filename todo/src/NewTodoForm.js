import React, {useState} from "react";
import "./NewTodoForm.css"

const NewTodoForm = ({addTodo}) => {
  const INITIAL_STATE = {
    task: "",
  }
  
  const [todoFormData, setTodoFormData] = useState(INITIAL_STATE);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTodoFormData(data => ({
      ...data,
      [name]: value
    }))    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({...todoFormData});
    setTodoFormData(INITIAL_STATE);
  } 

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">To Do</label>
        <input 
          id="task"
          type="text"
          name="task"
          placeholder="Enter Task To Do"
          value={todoFormData.task}
          onChange={handleChange}
        />           
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm;