import React, { useEffect, useState } from 'react'
import '../components/TodoForm.css'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Activity(todo) {
  const [task, setTask] = useState('');
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    getTask();
  }, []);


  function getTask() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
    JSON.parse(data);
        setTask(data);
      });
  }


  function createTask() {
    let description = prompt('enter text')
    let due_date = prompt('Enter due date'); 
    let completed = prompt('Enter completeted'); 
    let deleted = prompt('Deleted True or false'); 
    
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, due_date, completed,deleted}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        getTask(data);
      });
  }

  function deleteTask() {
    let id = prompt('Enter task id');
    id = Number(id);
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
      
    })
      .then(response => {
        return response.text();
      })
      .then(() => {
        getTask();
      });
  }

  return (
    <div className='activity'>
     <TodoForm inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
     <TodoList todos={todos}/>
      </div>
  )
}

export default Activity