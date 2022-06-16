import React, { useEffect, useState } from 'react'
import '../components/TodoForm.css'
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';


function Activity(todo) {

  //States
  const [task, setTask] = useState('');
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [priority, setPriority] = useState('priority')
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(()=> {
    getLocalTodos();
  }, [])
  //use efect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //Functions
  const filterHandler= ()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
         setFilteredTodos(todos);
         break;
    }
  }
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
    console.log(todos);
    let description;
    let due_date;
    let completed;
    let deleted;
    for(let i = 0; i< todos.length; i++ ){
      description = todos[i].text;
       due_date = todos[i].date; 
       completed = todos[i].completed; 
       deleted = todos[i].deleted;
    }
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, due_date, completed, deleted}),
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

  //Save to local storage
  const saveLocalTodos = () => {
   
      localStorage.setItem('todos', JSON.stringify(todos))
    
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className='activity'>
     <TodoForm inputText={inputText} 
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText}
     setStatus={setStatus}
     setPriority={setPriority}
     startDate={startDate}
     setStartDate={setStartDate}
     createTask={createTask}
     
     />
     <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
      </div>
  )
}

export default Activity