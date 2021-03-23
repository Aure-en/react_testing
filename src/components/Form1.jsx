import React, { useState } from 'react'

function Form1() {
  const [valueChange, setValueChange] = useState("");
  const [valueSubmit, setValueSubmit] = useState("");

  const handleChange = (e) => {
    setValueChange(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValueSubmit(valueChange);
  }

  return (
    <div>
      <h1>React Hooks Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text1">Input Text:</label>
        <input id="text1" onChange={handleChange} type="text" value={valueChange} />
        <button type="submit">Submit</button>
      </form>
      <h3>React State</h3>
      <p>Change: {valueChange}</p>
      <p>Submit Value: {valueSubmit}</p>
    </div>
  )
}

export default Form1
