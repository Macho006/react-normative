import React, { useState, useMemo } from "react";

export default function ExpensiveCalculation() {
  const [number, setNumber] = useState(0);

  function heavyCalculation(num) {
    console.log("Hisoblanyapdi");
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += num * 2;
    }
    return result;
  }

  const calculated = useMemo(() => heavyCalculation(number), [number]);

  return (
    <div className="w-[300px] mx-auto mt-16 flex flex-col gap-2 rounded-2xl p-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)] ">
      <h2 className="text-center text-4xl m-6">useMemo</h2>

      <div className="flex items-center justify-center gap-3">
        <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>

      <p className="mt-6 text-lg text-center font-medium">
        Natija: <span className="font-bold">{calculated}</span>
      </p>
    </div>
  );
}
