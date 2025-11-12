import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Parent render boldi");

  return (
    <div className="w-[300px] mx-auto mt-16 flex flex-col gap-2 rounded-2xl p-6 shadow-[0_2px_6px_rgba(0,0,0,0.1)] ">
      <p className="text-center text-4xl mb-2">React.memo</p>

      <div className="mt-[10px]">
        <button onClick={() => setCount((c) => c + 1)} className=" p-2 bg-[#2563eb] text-white rounded-xl cursor-pointer ">
          Count
        </button>
        <span className=" ml-3 ">Count: {count}</span>
      </div>

      <div className=" mt-4 ">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Matn kiriting"
          className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <Child text={text} />
    </div>
  );
}
