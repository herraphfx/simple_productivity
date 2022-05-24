import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function TodoForm({createTask, setInputText, todos, setTodos, inputText, setPriority, setStatus, startDate, setStartDate}) {
    //Javascript function to append my write up
    const inputTextHandler = (e) => {
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
                        date:startDate,
                        id: Math.random() * 1000},
        ]);
        setInputText("");
        createTask();
        
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const priorityHandler = (e) => {
        setPriority(e.target.value)
    }
  return (
      <div>
          <div id='select-all'>
          <div className="select" > 
            <select onChange={statusHandler} name='todos' className='filter-todo'>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
            </div>
          </div>
         
         
         
          
        
    <div className='form'>
        <input value={inputText} onChange={inputTextHandler} placeholder='Enter a task' type="text" className='todo-input'/>
        <button onClick={submitTodoHandler} className='todo-button' type='submit'>
            <i className="fas fa-plus-square"></i>
        </button>
        
       
        <div className="select">
            <select onChange={priorityHandler} name='todos' className='filter-todo'>
                <option value='priority'>Priority</option>
                <option  value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
            </select>
        </div>

      
    </div>
    <div className='dateitem'>
        <label>Choose Due Date: </label>
    <DatePicker className='datepicker' selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
   
    </div>
  )
}

export default TodoForm