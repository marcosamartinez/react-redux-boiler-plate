import React from "react";

const Count = ({ count, add, subtract }) => {
  return (
    <div>
      <h1>
        {count.name} : {count.count}
      </h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
};

export default Count;
