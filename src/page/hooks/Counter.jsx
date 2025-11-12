import React, { useState, useCallback } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("Counter render boldi");

  return (
    <>
    <div className="w-[300px] mx-auto mt-16 flex flex-col gap-2 rounded-2xl p-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)] ">
        <p className="text-center text-4xl mt-16">UseCallback</p>
        <div className="text-center mt-[50px] ">
          <h2>Count: {count}</h2>
          <Button onClick={increment} />
        </div>
      </div>
    </>
  );
}
