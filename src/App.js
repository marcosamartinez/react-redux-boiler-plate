import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

const initialState = {
  count: 0,
  name: "Count",
};

function App() {
  // Number is the state for whole app
  // State goes in an array
  const [number, setNumber] = useState(initialState);

  return (
    <div className="App">
      <h1>
        {number.name} : {number.count}
      </h1>
      <button>Add</button>
      <button>Subtract</button>
    </div>
  );
}

export default App;
