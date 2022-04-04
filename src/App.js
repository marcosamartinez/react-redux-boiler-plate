import React, { useState, useEffect } from "react";
import Count from "./comps/Count";

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

  const add = () => {
    setNumber({ ...number, count: number.count + 1 });
  };
  const subtract = () => {
    setNumber({ ...number, count: number.count - 1 });
  };

  useEffect(() => {
    console.log("Number has changed");
  }, [number]);

  useEffect(() => {
    console.log("App has rendered");
  }, []);

  return (
    <div className="App">
      <Count count={number} add={add} subtract={subtract} />
    </div>
  );
}

export default App;
