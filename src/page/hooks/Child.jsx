import React from "react";

function Child({ text }) {
  console.log("Child render boldi"); 
  return (
    <div className=" border border-gray-300 p-3 rounded-xl mt-2 ">
      <h3>Child component</h3>
      <p>Text: {text}</p>
    </div>
  );
}

export default React.memo(Child);
