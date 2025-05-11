/*
Requirements
- create a todo list where each task has a name and status
- should be able to add a new task with status not finished
- should be able to delete tasks from list
- should be able to edit the task name
- should be able to click a checkbox to signify that that task is finished, changing status to finished
- each task should be its own component

Approach
- an array of objects, each object being a task with a task name, status
- the page should display all tasks, each with an edit and delete button
- edit button click should be able to modify the task name
- delete button should delete from list 
- set up sample data to work with first
*/


import {useState} from 'react'
import Task from './Task'

export default function App() {

    const sampleData = [
    {name: "Walk dog", status: false},
    {name: "Clean dishes", status: false},
    {name: "Wash clothes", status: false},
]
    
    // where array of todo list will be stored in 
    const [list, setList] = useState(sampleData);
    const [filteredList, setFilteredList] = useState(sampleData)
    const [newTodo, setNewTodo] = useState("");
    const [searchValue, setSearchValue] = useState("");

    // add todo item
    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page refresh
        setList([...list, {name: newTodo, status: false}]);
        setNewTodo(""); // clears input
    }

    // delete an item
    const handleDelete = (indexToDelete) => {
        setList(list.filter((item, index) => index !== indexToDelete))
    }

    const handleEdit = (indexToEdit, newValue) => {
        const updatedList = [...list];
        updatedList[indexToEdit].name = newValue;
        setList(updatedList);
    }

    // const filteredList = list.filter(todo => todo.name.toLowerCase().includes(searchValue.toLowerCase()));

    const handleSearch = () => {
        const result = list.filter(task => task.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilteredList(result);
        setSearchValue("");
    }
    
    return (
    <div>
        <h1>Todo List</h1>

        {/* Search Bar */}
        <input
            placeholder="Enter search term"   
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        >
        </input>
        <button
            onClick={handleSearch}
        >Search</button>
        
        {/* List Input */}
        <input
            type="text"
            placeholder="Add new todo"    
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button
            onClick={handleSubmit}
        >Add Todo</button>
        
        {/* Todo List */}
        {filteredList.map((task, index) => 
            <Task 
                key={index} 
                index={index}
                task={task}
                handleDelete={handleDelete} 
                handleEdit={handleEdit} 
            />
        ) }
    </div>    
    )
}
