import React from 'react'

function Todo({text, todo, todos, setTodos, date}) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
    
  }
  const completeHandler = () => {
    setTodos(todos.map((item)=>{
      if(item.id === todo.id){
        return{
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
        <button onClick={completeHandler} className={`complete-btn ${todo.completed ? "completed_orange": ''}`}>
            <i className={`fas fa-check `}></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            <i className='fas fa-trash'></i>
        </button>
        {/* <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{date}</li> */}
    </div>
  )
}

export default Todo