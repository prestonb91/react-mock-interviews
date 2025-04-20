import { useState, useEffect } from 'react'
import Task from './components/Task';
import React from 'react';

const API_URL = "http://localhost:3000/tasks";
const PAGE_RESULT = 5

function App() {

  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const fetchTasks = async () => {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const tasks = await response.json();
    const taskArr = [...tasks];

    setTaskList(taskArr);
  }

  const addTask = async () => {

    const payload = {
      id: crypto.randomUUID(),
      title: newTask,
      completed: false,
    }

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });

    await fetchTasks();
    setNewTask("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  }

  const handleDelete = async (taskId) => {
    await fetch(`${API_URL}/${taskId}`, {
      method: "DELETE", 
      headers: {"Content-Type": "application/json"}
    })

    await fetchTasks();
  }

  const handleUpdate = async (taskId, title, status) => {
    const payload = {
      id: taskId, 
      title: title,
      completed: status,
    }

    await fetch (`${API_URL}/${taskId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {"Content-Type": "application/json"}
    })

    await fetchTasks();
  }

  const pageTasks = taskList.slice(pageNumber * PAGE_RESULT, (pageNumber + 1) * PAGE_RESULT);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h1>Task Manager</h1>
      <form
        onSubmit={handleSubmit}
      >
        <input
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
        ></input>
        <button
          type="submit"
        >Add Task</button>
      </form>

      {pageTasks.map(task =>
        <Task key={task.id} {...task} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      )}

      <div style={{display: "flex"}}>
        <button
          onClick={()=>setPageNumber(pageNumber-1)}
          disabled={pageNumber === 0}
        >Prev</button>
        <div
        >{pageNumber+1}</div>
        <button
          onClick={()=>setPageNumber(pageNumber+1)}
          disabled={taskList.length <= (pageNumber+1) * PAGE_RESULT}
        >Next</button>
      </div>
    </>
  )
}

export default App
