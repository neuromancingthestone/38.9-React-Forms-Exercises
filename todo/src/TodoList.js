import React, {useState} from "react";
import "./TodoList.css"
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import {v4 as uuid} from "uuid";

const TodoList = () => {

  const INITIAL_STATE = [
    {id: uuid(), task: 'Take out trash'},
    {id: uuid(), task: 'Do dishes'},
  ]
 
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id: uuid()}])
  }

  const remove = (e) => {    
    setTodos(todos.filter((t) => t.id !== e.target.parentElement.id));    
  }

  return (
    <div className="TodoList">
      <NewTodoForm className="NewTodoForm" addTodo={addTodo} />
      <div className="Todo-Container">
        {todos.map(({id, task}) =>
          <Todo
            id={id}
            task={task}
            remove={remove}
            key={id}
          />
        )}
      </div>          
    </div>
  )
}

export default TodoList;