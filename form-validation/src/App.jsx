import React from 'react';
import {useState} from 'react';

export function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = [];
  
    if (name.trim().length < 3) {
      newErrors.push("Name is less than 3 characters long");
    }

    if (!email.includes("@")) {
      newErrors.push("No @ included");
    }

    if (password.length < 8) {
      newErrors.push("Password not long enough");
    }

    
    if (newErrors.length > 1) {
      setErrors(newErrors);
    } else {
      setErrors([]);
      alert("Form submitted successfully")
    }
  }

  return (
      <div>
        <h1>Form</h1>

        <form>
          <label>Name</label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="name"  
            type="text"
          ></input>
          <label>Email</label>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="email"  
            type="email"  
          ></input>
          <label>Password</label>
          <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"  
            type="password"  
          ></input>
          <button
            onClick={handleSubmit}  
          >Submit</button>
        </form>
        {errors && <div>{errors}</div>}
      </div>
  )
}

export default App;