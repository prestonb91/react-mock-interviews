import { useState } from 'react'

function Task ({index, task, handleEdit, handleDelete}) {

    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState(task.name);

    const handleSave = () => {
        handleEdit(index, newName);
        setEdit(false);
    }
    
    return (
        <div>
            {edit ? (
            <>
                <input
                    value={newName}
                    placeholder="New name"    
                    onChange={(e)=>setNewName(e.target.value)}
                >
                </input>
                <button
                    onClick={handleSave}    
                >Save</button>
            </>
            ) : (
            <>
                <div>{task.name}</div>    
                <button onClick={()=> setEdit(true)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
            </>
            )}
        </div>
    )
}

export default Task;