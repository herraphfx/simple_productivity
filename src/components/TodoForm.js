import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


function TodoForm({setInputText, todos, setTodos, inputText}) {
    //Javascript function to append my write up
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        //send data to settodo 
        setTodos([
            ...todos, {text: inputText, 
                        high:false, 
                        medium: false, 
                        low: false, 
                        completed: false, 
                        id: Math.random() * 1000},
        ]);
        setInputText("");
    }
  return (
    <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className='todo-input'/>
        <button onClick={submitTodoHandler} className='todo-button' type='submit'>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name='todos' className='filter-todo'>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
        </div>
        <div className="select">
            <select name='todos' className='filter-todo'>
                <option value='all'>Priority</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
            </select>
        </div>
    </form>
  )
}

export default TodoForm