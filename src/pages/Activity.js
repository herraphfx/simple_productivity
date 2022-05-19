import React, { useEffect, useState } from 'react'

function Activity() {
  const [task, setTask] = useState('');
  
  useEffect(() => {
    getTask();

  }, []);


  function getTask() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
    console.log(JSON.parse(data));
        setTask(data);
      });
  }


  function createTask() {
    let description = prompt('Enter description');
    let due_date = prompt('Enter due date'); 
    let completed = prompt('Enter completeted'); 
    let deleted = prompt('Deleted True or false'); 
    let todolist_id=prompt('enter id')
    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description, due_date, completed,deleted,todolist_id}),
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
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        getTask(data);
      });
  }

  return (
    <div className='activity'>
      {/* {task} */}
      <button onClick={createTask}>button</button>
      <button onClick={deleteTask}>delete</button>
      </div>
  )
}

export default Activity