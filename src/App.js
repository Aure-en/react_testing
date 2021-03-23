import React, { useState } from "react";
import Basic from "./components/Basic";
import Counter from "./components/Counter";
import Form1 from "./components/Form1";
import TestAxios from "./components/TestAxios";
import TestHook from "./components/TestHook";
import TestHookContext from "./components/TestHookContext";
import TestHookReducer from "./components/TestHookReducer";
import Context from "./contexts/Context";

function App() {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeName = () => {
    setName("Steve");
  }

  const changeText = () => {
    setState("Some Other Text");
  }

  return (
    <div className="App">
      <Basic />
      <h1>Counter</h1>
      <Counter />
      <h1>Basic Hook useState</h1>
      <TestHook name={name} changeName={changeName} />
      <h1>Hook reducer</h1>
      <TestHookReducer />
      <h1>Hook useContext</h1>
      <Context.Provider value={{
        changeTextProp: changeText,
        stateProp: state
      }}>
        <TestHookContext />
      </Context.Provider>
      <h1>Form</h1>
      <Form1 />
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
}

export default App;
