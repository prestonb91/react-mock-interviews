import { useState, useEffect } from 'react'
import './App.css'
import Task from './Task';

const API_URL = "http://localhost:3000/tasks";

function App() {

  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

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

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <h1>Task Manager</h1>
      <input
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
      ></input>
      <button
        onClick={()=>addTask()}
      >Add Task</button>

      {taskList.map(task =>
        <Task key={task.id} {...task} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      )}
    </>
  )
}

export default App
