import React from 'react';
import {useState} from 'react';

export function App() {

  const [string, setString] = useState("");
  const [option, setOption] = useState("reverse");
  const [transformed, setTransformed] = useState("");

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  const handleTransform = () => {

    if (option === "reverse") {
      let sorted = string.split("").reverse().join("");
      setTransformed(sorted);
    }

    if (option === "capitalize") {
      let arr = string.split("");
      let capitalize = arr.map(char => {
        if ("aeiou".includes(char.toLowerCase())) {
          return char.toUpperCase();
        } 
        return char;
      })
       setTransformed(capitalize.join(""));
    }

  }

  return (
    <div>
      <h1>String Transformer</h1>
      <input
        onChange={(e)=>setString(e.target.value)}
      ></input>
      <select onChange={handleChange}>
        <option value="reverse">ReverseString</option>
        <option value="capitalize">CapitalizeVowels</option>
      </select>
      <button
        onClick={handleTransform}
      >Transform</button>

      <h2>{transformed}</h2>
    </div>
  );
}

export default App;