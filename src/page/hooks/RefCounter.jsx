import React, { useState, useRef, useEffect } from "react";
import Button from "./shadcnButton";

export default function RefCounter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const focusInput = () => inputRef.current.focus();

  return (
    <div className="max-w-md mx-auto mt-10 border border-gray-300 p-5 rounded-xl text-center">
      <h2 className="text-xl font-semibold mb-2">useRef Hook misoli</h2>

      <h3 className="text-lg">Hozirgi count: {count}</h3>
      <p className="text-gray-500 mb-4">Oldingi count: {prevCount.current}</p>

      <div className="flex justify-center gap-3 mb-5">
        <Button onClick={() => setCount(count + 1)} variant="primary">
          +
        </Button>
        <Button onClick={() => setCount(count - 1)} variant="danger">
          -
        </Button>
      </div>

      <div className="space-y-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="inputga focus"
          className="w-4/5 border border-gray-300 rounded-lg px-3 py-2"
        />
        <br />
        <Button onClick={focusInput} variant="success">
          Inputga Focus berish
        </Button>
      </div>
    </div>
  );
}
