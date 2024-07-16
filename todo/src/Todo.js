const Todo = ({id, task, remove}) => {
  return (
    <ul>
      <li
        id={id}
        className='Todo'      
      >        
        {task}       
        <button onClick={remove}>X</button> 
      </li>    
    </ul>
  )
}

export default Todo;