
function Task({id, title, completed, dueDate, handleDelete, handleUpdate}) {
    return(
        <ul style={{margin: "20px", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start"}}>
            <li>{title}</li>
            <div>{dueDate}</div>
            <input
                type="checkbox"
                checked={completed}
                onChange={()=>handleUpdate(id, title ,!completed)}
            ></input>
            <button
                onClick={()=>handleDelete(id)}
            >
                Delete
            </button>
        </ul>
    )
}

export default Task;